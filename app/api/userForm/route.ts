import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
const nodemailer = require('nodemailer');
import axios from "axios";


export async function POST(req: NextRequest) {
    const { firstName, lastName, email, text,token } = await req.json();
    console.log(firstName);
    console.log(process.env.EMAIL_USER)
    const response= await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`
      );

    // SMTP taşıyıcınızın bilgilerini buraya ekleyin
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // E-posta adresiniz
            pass: process.env.EMAIL_PASS, // E-posta şifreniz veya uygulama şifresi
        },
    });
    if(response.data.success){
        try {
            await transporter.sendMail({
                from: email, // Gönderen e-posta adresi
                to: "alibarandemir798@gmail.com",
                subject: "Portfolio",
                text: `${firstName+" "+lastName} isimli kullanıcı bunları önerdi: ${text} `,
            });
    
            return NextResponse.json({success:true, message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: "Email not sent successfully", error: 'Failed to send email' });
        }
    
    }
    else {
        // reCAPTCHA verification failed
        return NextResponse.json({message:'reCAPTCHA verification failed.'});}
}

export async function GET() {
    return NextResponse.json({ message: "This endpoint only accepts POST requests" });
}
