import { sql } from "@vercel/postgres";
import { Question } from "@/app/types";
import QuestionPage from "@/app/ask-me-anything/questions/[id]/QuestionPage"; 

export default async function Page({ params: { id } }: { params: { id: number } }) {
    const { rows } = await sql`UPDATE questions SET viewed = true WHERE question_id = ${id} RETURNING *`;
    const question = rows[0] as Question;
    
    return <QuestionPage question={question} />
}