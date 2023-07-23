import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SubscribeEmailTemplate } from '~/components/emails/SubscribeEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'Acme <noreply@myturn.me>',
      to: [email],
      subject: 'Welcom to MyTurn !',
      react: SubscribeEmailTemplate({ email }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
