"use server";

import { sql } from "@vercel/postgres";

export async function addQuestion(_prevState: any, formData: FormData) {
    const message = formData.get("message");
    if (message == null || message.toString().length < 8 || message.toString().length > 191) {
        return {
            message: "The message must be at least 8 characters, or less than 191.",
        };
    }

    await sql`INSERT INTO questions (message) VALUES (${message.toString()})`;

    return {
        message: "Successfully added your question to the queue.",
    };
}