import { Display } from "@/app/components/Display";
import { Button } from "@/app/components/Button";

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen px-6 md:px-16 py-14 gap-24">
            <section className="relative md:min-h-screen w-full bg-ghost-white border-4 border-black">
                <div className="absolute top-1/2 -translate-y-1/2 px-5 md:px-8 py-4">
                    <Display size="2xl" variant="semibold">
                        Hello!
                    </Display>
                    <Display size="5xl" className="mt-3.5" variant="semibold">
                        I am a Software Engineer
                    </Display>
                    <Display size="lg" className="mt-6">
                        A self-driven Go enthusiast hailing from Sarawak, Malaysia, bringing 4 years of hardcore experience to the table.
                        Thrives on crafting innovative solutions with absolute precision.
                    </Display>
                    <div className="flex flex-row mt-6 gap-4">
                        <Button variant="tropical_indigo">
                            Contact Me
                        </Button>
                        <Button variant="periwinkle">
                            See Portfolios
                        </Button>
                    </div>
                </div>
                <div className="z-[-1] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-4 absolute h-full md:min-h-screen w-full bg-black ">
                </div>
            </section>
            <section>
                <Display size="3xl" variant="semibold">
                    My <span className="underline">Creative</span> Works
                </Display>
            </section>
        </main>
    );
}
