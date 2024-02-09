"use server"

import { z } from 'zod'
import prisma from '../../db';
import { revalidatePath } from 'next/cache';

export async function createUser(prevState: any, formData: FormData): Promise<{ message: string }> {
    const schema = z.object({
        username: z.string({
            invalid_type_error: 'Invalid Username',
            required_error: 'Username is a required field'
        }).min(1)
    });
    const data = schema.parse({
        username: formData.get('username')
    });
    
    try {
        await prisma.user.create({
            data: {
                username: data.username
            }
        });
        revalidatePath('/users');
        return {
            message: 'Successfully added the user.'
        }
    } catch (error) {
        console.log(error);
        return {
            message: 'Could\'nt add the user.'
        }
    }

}