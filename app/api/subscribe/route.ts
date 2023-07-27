import { NextRequest, NextResponse } from 'next/server';
import sgMail, { MailDataRequired } from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const sender = process.env.EMAIL_SENDER || '';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    const msg: MailDataRequired = {
      to: email,
      from: sender,
      subject: 'Sending with SendGrid is Fun',
      templateId: process.env.EMAIL_TEMPLATE_ID as string,
      personalizations: [
        {
          to: [{ email }],
        },
      ],
    };
    const data = await sgMail.send(msg);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
