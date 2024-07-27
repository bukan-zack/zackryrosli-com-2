"use client";

import { Card } from "@/app/components/Card";
import { Display } from "@/app/components/Display";
import { Button } from "@/app/components/Button";
import { Motion } from "@/app/components/Motion";
import { Question } from "@/app/types";
import * as htmlToImage from 'html-to-image';
import { useRef } from "react";

export default function QuestionPage({ question }: { question: Question; }) {
    const cardRef = useRef<HTMLDivElement>(null);

    async function handleAnswer() {
        const image = await htmlToImage.toPng(cardRef.current!);
        const link = document.createElement('a');

        link.download = `ask_me_anything_${question.question_id}.png`;
        link.href = image;
        link.click();
    }

    return (
        <main className="flex flex-col min-h-screen px-6 md:px-16">
            <section className="min-h-screen w-full flex items-center justify-center py-16">
                <Motion
                    className="w-full max-w-2xl"
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "easeInOut", duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Card ref={cardRef}>
                        <div className="px-6 md:px-8 py-4 flex flex-col">
                            <Display size="2xl" variant="semibold">
                                Ask Me Anything
                            </Display>
                            <div className="mt-4">
                                <Display className="w-full border-2 border-black px-6 py-4 font-mono">
                                    {question.message}
                                </Display>
                                <div className="mt-2">
                                    <Button variant="tropical_indigo" onClick={() => handleAnswer()}>
                                        Answer
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Motion>
            </section>
        </main>    
    );
}