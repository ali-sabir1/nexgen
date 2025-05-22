import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const resume = formData.get("resume");

    if (!resume || resume.type !== "application/pdf") {
      return new Response(
        JSON.stringify({ message: "Resume must be a PDF file." }),
        {
          status: 400,
        }
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "testingwithali1@gmail.com",
        pass: "taak pclv xzew qcej",
      },
    });

    await transporter.sendMail({
      from: "testingwithali1@gmail.com",
      to: "alisabir0075@gmail.com",
      subject: `${name} applied for ${position} position.`,
      text: `${name} has applied for a job.\n\nEmail: ${email}\nPhone: +92${phone}\nPosition: ${position}`,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
          contentType: resume.type,
        },
      ],
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send message." }),
      {
        status: 500,
      }
    );
  }
}
