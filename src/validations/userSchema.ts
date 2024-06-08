import { Phone } from 'lucide-react';
import { string, z } from 'zod';

const telefonoValidacion = new RegExp(
    /^\d{10}$/
);

export const userSchema = z.object({
    nombre: z.string().min(3, {
        message: 'El nombre debe tener entre 3 y 100 caracteres'
    }).max(100, {
        message: 'El nombre debe tener entre 3 y 100 caracteres'
    }),
    correo: z.string().email({
        message: 'El correo debe ser válido'
    }),
    empresa: z.string().min(3, {
        message: 'La empresa debe tener entre 3 y 100 caracteres'
    }).max(50, {
        message: 'La empresa debe tener entre 3 y 100 caracteres'
    }),
    telefono: z.string().regex(telefonoValidacion, {
        message: 'Número de teléfono no válido'
    })
});                                                                                                                                                     