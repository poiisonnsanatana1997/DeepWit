import { EmailTemplate } from '@/components/Correo/email-template';
import { Resend } from 'resend';
import { json } from 'stream/consumers';

const resend = new Resend("re_R4YaNHqp_BSTwFX1YRnWNRMy7oX5CoNc8");


export async function POST(request: Request) {
    
    try {
        const text = await request.json();
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: text.empresa,
            react: EmailTemplate({ firstName: 'Mauricio' }),
            text: text.telefono
        });
        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
