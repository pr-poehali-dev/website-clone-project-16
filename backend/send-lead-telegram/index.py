import base64
import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    '''Принимает данные лида (имя, email, телефон, yclid) и пересылает их в Telegram-чат владельца'''
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

    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')

    if not bot_token or not chat_id:
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'success': False, 'note': 'Telegram secrets not configured yet'})}

    text_lines = [
        '🆕 Новая заявка с сайта',
        f'Имя: {name}',
        f'Email: {email}',
        f'Телефон: {phone}',
    ]
    if yclid:
        text_lines.append(f'yclid: {yclid}')
    if page_url:
        text_lines.append(f'Страница: {page_url}')

    text = '\n'.join(text_lines)

    telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = urllib.parse.urlencode({'chat_id': chat_id, 'text': text}).encode()

    try:
        req = urllib.request.Request(telegram_url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=10) as resp:
            resp.read()
        sent = True
    except Exception:
        sent = False

    return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'success': sent})}