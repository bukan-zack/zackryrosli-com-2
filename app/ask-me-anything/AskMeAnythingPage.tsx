"use client";

import { Card } from "@/app/components/Card";
import { Display } from "@/app/components/Display";
import { Button } from "@/app/components/Button";
import { Motion } from "@/app/components/Motion";
import { addQuestion } from "@/app/ask-me-anything/actions";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

export default function AskMeAnythingPage() {
    const [state, formAction] = useFormState(addQuestion, {
        message: "",
    });
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (state?.message) {
            setOpenModal(true);
        }
    }, [state]);

    return (
        <>
            <main className="flex flex-col min-h-screen px-6 md:px-16">
                <section className="min-h-screen w-full flex items-center justify-center py-16">
                    <Motion
                        className="w-full max-w-2xl"
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "easeInOut", duration: 0.4 }}
                    >
                        <Card>
                            <div className="px-6 md:px-8 py-6 flex flex-col">
                                <Display size="2xl" variant="semibold">
                                    Ask Me Anything
                                </Display>
                                <Display>
                                    This Q&A session is totally anonymous, with no additional information gathered beyond the question itself. The response will be shared on my X account @bukan_zack.
                                </Display>
                                <form action={formAction} className="mt-4 z-10">
                                    <textarea cols={8} name="message" className="break-all h-32 w-full border-2 border-black px-6 py-4" placeholder="Write your question here." />
                                    <div className="mt-2">
                                        <Button variant="tropical_indigo">
                                            LFG
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </Motion>
                </section>
            </main>    
            {openModal && (
                <div className="z-[99] inset-0 fixed w-full min-h-screen px-6 md:px-16 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <Motion
                        className="w-full max-w-2xl"
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "easeInOut", duration: 0.4 }}
                    >
                        <Card>
                            <div className="px-6 md:px-8 py-6 flex flex-col">
                                <Display>
                                    {state?.message}
                                </Display>
                                <div className="mt-2 z-10">
                                    <Button variant="apricot" onClick={() => setOpenModal(false)}>
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Motion>
                </div>
            )}
        </>
    );
}