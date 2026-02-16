import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Portfolio Contact <portfolio-contact@resend.dev>",
      to: ["pokhrelprashant9@gmail.com"],
      subject: `New Message form ${name}`,
      html: `
        <div>
        <h1>New Message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        </div>
        `,
    });
    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false });
  }
}
