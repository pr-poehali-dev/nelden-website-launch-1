import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field, ValidationError


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=5, max_length=20)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=1000)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form submissions via email
    Args: event - dict with httpMethod, body
          context - object with request_id
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    contact_req = ContactRequest(**body_data)
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    
    if not all([smtp_host, smtp_user, smtp_password]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP configuration missing'})
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от {contact_req.name}'
    msg['From'] = smtp_user
    msg['To'] = 'nelden@internet.ru'
    
    html_body = f"""
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Новая заявка с сайта</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #555;">Имя:</strong> {contact_req.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Телефон:</strong> {contact_req.phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> {contact_req.email}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Сообщение:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              {contact_req.message}
            </div>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #888; text-align: center;">
            Это письмо отправлено автоматически с формы обратной связи
          </p>
        </div>
      </body>
    </html>
    """
    
    msg.attach(MIMEText(html_body, 'html'))
    
    if smtp_port == 465:
        server = smtplib.SMTP_SSL(smtp_host, smtp_port)
    else:
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
    
    server.login(smtp_user, smtp_password)
    server.send_message(msg)
    server.quit()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'success': True, 'message': 'Email sent successfully'})
    }
