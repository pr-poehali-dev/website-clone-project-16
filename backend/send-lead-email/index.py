import base64
import json
import os
import smtplib
import urllib.request
from email.mime.text import MIMEText


def handler(event: dict, context) -> dict:
    '''Принимает данные лида (имя, email, телефон, yclid, страница) и отправляет их письмом на почту владельца'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if method != 'POST':
        return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}

    raw_body = event.get('body') or '{}'
    if event.get('isBase64Encoded'):
        raw_body = base64.b64decode(raw_body).decode('utf-8')
    body = json.loads(raw_body or '{}')

    name = body.get('name', '')
    email = body.get('email', '')
    phone = body.get('phone', '')
    yclid = body.get('yclid', '')
    page_url = body.get('page_url', '')
    click_time = body.get('click_time', '')

    smtp_login = os.environ.get('YANDEX_SMTP_LOGIN')
    smtp_password = os.environ.get('YANDEX_SMTP_PASSWORD')

    if not smtp_login or not smtp_password:
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'success': False, 'note': 'SMTP secrets not configured yet'})}

    text_lines = [
        'Новая заявка с сайта',
        f'Имя: {name}',
        f'Email: {email}',
        f'Телефон: {phone}',
    ]
    if yclid:
        text_lines.append(f'yclid: {yclid}')
    if click_time:
        text_lines.append(f'Время клика: {click_time}')
    if page_url:
        text_lines.append(f'Страница: {page_url}')

    text = '\n'.join(text_lines)

    msg = MIMEText(text, 'plain', 'utf-8')
    msg['Subject'] = 'Новая заявка с сайта'
    msg['From'] = smtp_login
    msg['To'] = smtp_login

    try:
        with smtplib.SMTP_SSL('smtp.yandex.ru', 465, timeout=8) as server:
            server.login(smtp_login, smtp_password)
            server.sendmail(smtp_login, [smtp_login], msg.as_string())
        sent = True
    except Exception:
        sent = False

    max_sent = send_to_max(text)

    return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'success': sent, 'max_sent': max_sent})}


def send_to_max(text: str) -> bool:
    bot_token = os.environ.get('MAX_BOT_TOKEN')
    chat_id = os.environ.get('MAX_CHAT_ID')
    if not bot_token or not chat_id:
        return False
    try:
        url = f'https://platform-api.max.ru/messages?chat_id={chat_id}'
        data = json.dumps({'text': text}).encode('utf-8')
        req = urllib.request.Request(
            url,
            data=data,
            method='POST',
            headers={'Content-Type': 'application/json', 'Authorization': bot_token},
        )
        with urllib.request.urlopen(req, timeout=8) as resp:
            resp.read()
        return True
    except Exception:
        return False