"use client";

import { Card } from "@/app/components/Card";
import { Display } from "@/app/components/Display";
import { Button } from "@/app/components/Button";
import { Motion } from "@/app/components/Motion";
import { addQuestion } from "@/app/ask-me-anything/actions";
import { useFormState } from "react-dom";

export default function Page() {
    const [state, formAction] = useFormState(addQuestion, {
        message: "",
    });

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
                    <Card>
                        <div className="px-6 md:px-8 py-4 flex flex-col">
                            <Display size="2xl" variant="semibold">
                                Ask Me Anything
                            </Display>
                            {state?.message && (
                                <Display size="md">
                                    {state?.message}
                                </Display>
                            )}
                            <form action={formAction} className="mt-4">
                                <textarea cols={8} name="message" className="w-full border-2 border-black px-6 py-4" />
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
    );
}