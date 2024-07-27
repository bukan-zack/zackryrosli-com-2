"use server";

import { sql } from "@vercel/postgres";

export async function addQuestion(_prevState: any, formData: FormData) {
    const message = formData.get("message");
    if (message == null) {
        return 
    }

    await sql`INSERT INTO questions (message) VALUES (${message.toString()})`;

    return {
        message: "Successfully added your question to the queue.",
    };
}