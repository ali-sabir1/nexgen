import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testingwithali1@gmail.com",
      pass: "taak pclv xzew qcej",
    },
  });

  try {
    await transporter.sendMail({
      from: "testingwithali1@gmail.com",
      to: "alisabir0075@gmail.com",
      subject: `New Message from ${name}.`,
      text: `You have received a new message from ${name} (${email}), Phone(+1${phone}):\n\n${message}`,
    });
    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to send message." }),
      {
        status: 500,
      }
    );
  }
}
