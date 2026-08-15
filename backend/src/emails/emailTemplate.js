
// emailTemplate.js

export const createWelcomeEmailTemplate = (name, clientURL) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Chatify</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f7; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7; padding: 40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">
            <tr>
              <td style="background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 40px 24px; text-align:center;">
                <div style="width:64px; height:64px; background-color:rgba(255,255,255,0.2); border-radius:50%; display:inline-block; line-height:64px; font-size:28px; color:#ffffff; margin-bottom:16px;">💬</div>
                <h1 style="color:#ffffff; font-size:22px; margin:0;">Welcome to Chatify!</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 24px;">
                <h2 style="color:#111827; font-size:18px; margin-top:0;">Hello ${name},</h2>
                <p style="color:#374151; font-size:15px; line-height:1.6;">
                  We're excited to have you join Chatify! Connect with friends, family, and colleagues in real-time, no matter where they are.
                </p>
                <p style="color:#374151; font-size:15px; line-height:1.6; margin-bottom: 24px;">
                  Get started in just a few steps:
                </p>
                <ul style="color:#374151; font-size:15px; line-height:1.8; padding-left: 20px;">
                  <li>Set up your profile picture</li>
                  <li>Find and add your contacts</li>
                  <li>Start a conversation</li>
                </ul>
                <div style="text-align:center; margin: 32px 0;">
                  <a href="${clientURL}" style="background-color:#3b82f6; color:#ffffff; text-decoration:none; padding: 12px 28px; border-radius:6px; font-size:15px; display:inline-block;">
                    Open Chatify
                  </a>
                </div>
                <p style="color:#9ca3af; font-size:13px; text-align:center; margin-top: 32px;">
                  If you didn't sign up for Chatify, you can safely ignore this email.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};