import { NextRequest, NextResponse } from 'next/server';

import axios from 'axios';
// const md5 = require('md5'); // to hash the email address, required for some operations

const sender = process.env.EMAIL_SENDER || '';
const apiKey = process.env.MAILCHIMP_API_KEY || '';
const listId = process.env.MAILCHIMP_LIST_ID;

async function subscribeUser(email: string) {
  const data = {
    email_address: email,
    status: 'subscribed', // "subscribed" or "pending"
  };

  const serverPrefix = apiKey.split('-')[1]; // Mailchimp API keys have a server prefix after the '-' character

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `apikey ${apiKey}`,
    },
  };

  try {
    const response = await axios.post(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/`,
      data,
      config,
    );
    console.log(response.data);
  } catch (error: any) {
    console.error(error && error.response && error.response.data);
  }
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    const data = await subscribeUser(email);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
