import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // API Route for sending email
  app.post('/api/send-email', async (req, res) => {
    console.log("Received email request:", req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("Missing fields");
      return res.status(400).json({ success: false, error: "Missing fields" });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "kaswin29062006@gmail.com",
          pass: "mdjoruygrhtaxrso" // APP PASSWORD
        }
      });

      console.log("Attempting to send email...");
      const mailOptions = {
        from: `"Portfolio Contact" <kaswin29062006@gmail.com>`,
        replyTo: email,
        to: "kaswin29062006@gmail.com",
        subject: `Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      res.json({ success: true });

    } catch (error: any) {
      console.error("Email error details:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to send email",
        details: error.message || "Unknown error"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    try {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
      console.log("Vite middleware integrated");
    } catch (e) {
      console.error("Failed to start Vite:", e);
    }
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
