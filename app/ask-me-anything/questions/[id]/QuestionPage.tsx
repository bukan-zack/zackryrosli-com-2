"use client";

import { Card } from "@/app/components/Card";
import { Display } from "@/app/components/Display";
import { Button } from "@/app/components/Button";
import { Motion } from "@/app/components/Motion";
import { Question } from "@/app/types";
import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

export default function QuestionPage({
    question,
}: {
    question: Question;
}) {
    const [answering, setAnswering] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    async function handleAnswer() {
        setAnswering(true);

        const image = await htmlToImage.toPng(cardRef.current!);
        const link = document.createElement("a");

        link.download = `ask_me_anything_${question.question_id}.png`;
        link.href = image;
        link.click();

        setAnswering(false);
    }

    return (
        <main className="flex flex-col min-h-screen px-6 md:px-16">
            <section className="min-h-screen w-full flex items-center justify-center py-16">
                <Motion
                    className="w-full max-w-2xl"
                    initial={{ opacity: 0, translateY: -100 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "easeInOut", duration: 0.4 }}
                >
                    <Card ref={cardRef}>
                        <div className="px-6 md:px-8 py-6 flex flex-col">
                            <Display size="sm">
                                @bukan_zack
                            </Display>
                            <Display size="2xl" variant="semibold" className="mt-1">
                                Ask Me Anything
                            </Display>
                            <div className="mt-4 z-10">
                                <Display className="break-all w-full border-2 border-black px-6 py-4 font-mono">
                                    {question.message}
                                </Display>
                                {!answering && (
                                    <div className="mt-4">
                                        <Button variant="tropical_indigo" onClick={() => handleAnswer()}>
                                            Answer
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </Motion>
            </section>
        </main>    
    );
}