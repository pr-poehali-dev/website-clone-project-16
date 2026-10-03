import base64
import json
import os
import re
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

    smtp_login = os.environ.get('YANDEX_SMTP_LOGIN')
    smtp_password = os.environ.get('YANDEX_SMTP_PASSWORD')

    if not smtp_login or not smtp_password:
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'success': False, 'note': 'SMTP secrets not configured yet'})}

    lines = [
        'Лид плетение',
        f'Имя: {name}',
        f'Email: {mask_email(email)}',
        f'Телефон {mask_phone(phone)}',
    ]
    if yclid:
        lines.append(f'yclid: {yclid}')
    if page_url:
        lines.append(f'Страница: {page_url}')

    text = '\n'.join(lines)

    msg = MIMEText(text, 'plain', 'utf-8')
    msg['Subject'] = 'Лид плетение'
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


def mask_phone(phone: str) -> str:
    digits = re.sub(r'\D', '', phone or '')
    if len(digits) <= 4:
        return '*' * len(digits)
    return '*' * (len(digits) - 4) + digits[-4:]


def _mask_part(part: str) -> str:
    if len(part) <= 2:
        return part[:1] + '*' * (len(part) - 1)
    return part[0] + '*' * (len(part) - 2) + part[-1]


def mask_email(email: str) -> str:
    if not email or '@' not in email:
        return _mask_part(email or '')
    local, domain = email.rsplit('@', 1)
    if '.' in domain:
        host, tld = domain.split('.', 1)
        masked_domain = _mask_part(host) + '.' + tld
    else:
        masked_domain = _mask_part(domain)
    return _mask_part(local) + '@' + masked_domain


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