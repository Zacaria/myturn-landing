import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SubscribeEmailTemplate } from '~/components/emails/SubscribeEmailTemplate';
import sgMail, { MailDataRequired } from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const resend = new Resend(process.env.RESEND_API_KEY);
const sender = process.env.EMAIL_SENDER || '';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    const msg: MailDataRequired = {
      to: email,
      from: sender,
      subject: 'Sending with SendGrid is Fun',
      templateId: 'd-e5cf25d1d8564d0f8c2df9cc8d6ad2af',
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
