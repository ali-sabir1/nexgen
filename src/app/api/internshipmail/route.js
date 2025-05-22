import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, degree, program } = await req.json();

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
      subject: `${name} registered for ${program} internship program.`,
      text: `${name} has registered for Internship. \n\nEmail:(${email}) \n\nPhone:(+92${phone}) \n\n Degree:(${degree}) \n\n Program:(${program})`,
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
