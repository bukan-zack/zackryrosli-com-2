import Link from "next/link";
import { Display } from "@/app/components/Display";
import { Card } from "@/app/components/Card";
import { Motion } from "@/app/components/Motion";
import { sql } from "@vercel/postgres";
import { Question } from "@/app/types";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Page() {
    const { rows } = await sql`SELECT * FROM questions ORDER BY question_id DESC LIMIT 100`;
    const questions = rows as Question[]; 

    console.log(questions);

    return (
        <main className="flex flex-col min-h-screen px-6 md:px-16">
            <section className="py-8 md:py-16">
                <Motion
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "easeInOut", duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Display size="3xl" variant="semibold">
                        Ask Me Anything
                    </Display>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6">
                        {questions.map((question) => (
                            <Link key={question.question_id} href={`/ask-me-anything/questions/${question.question_id}`} target="_blank">
                                <Card className="px-5 md:px-8 py-6 flex flex-col" interactable>
                                    <Display className="mt-2">
                                        {question.message}
                                    </Display>
                                    <Display size="sm">
                                    {question.viewed ? "Viewed" : "Unviewed"} | {question.created_at.toString()}
                                    </Display>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </Motion>
            </section>
        </main>
    );
}
