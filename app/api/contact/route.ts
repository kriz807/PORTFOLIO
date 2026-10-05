import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const subject = String(body.subject || '').trim();
    const message = String(body.message || '').trim();
    const website = String(body.website || '').trim();

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please complete all fields.' },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 150 || message.length > 5000) {
      return NextResponse.json(
        { error: 'One or more fields are too long.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const { error } = await resend.emails.send({
      from: 'Krishnalal Portfolio <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;padding:32px;color:#26342b">
          <p style="font-size:12px;letter-spacing:2px;color:#6b7e70">
            NEW PORTFOLIO MESSAGE
          </p>

          <h1 style="font-size:28px;margin:12px 0 30px">
            ${safeSubject}
          </h1>

          <div style="background:#f5f7f4;padding:20px;border-radius:14px">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
          </div>

          <div style="margin-top:25px;line-height:1.7">
            ${safeMessage}
          </div>

          <hr style="border:0;border-top:1px solid #e5e8e5;margin:30px 0">

          <p style="font-size:12px;color:#89928c">
            Sent from krishnalal's portfolio contact form.
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        { error: 'Unable to send your message.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully.'
    });

  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}