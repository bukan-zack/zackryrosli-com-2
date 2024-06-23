"use client";

import { Display } from "@/app/components/Display";
import { Button } from "@/app/components/Button";
import { Card } from "@/app/components/Card";
import Link from "next/link";
import { motion } from "framer-motion";

function truncate(str: string, max: number) {
    return str.length > max ? str.substr(0, max-1) + '...' : str;
}

const blogs = [
    {
        name: "Should I use frameworks in Go?",
        description: "We all know that Go is one of the popular programming languages for crafting fast and scalable web applications. If you are coming from another programming languages (such as JavaScript or PHP), you might prefer using frameworks to make everything easier for yourself. But to be honest, we don't need that in Go.",
        href: "https://blog.zackryrosli.com/should-i-use-frameworks-in-go",
    },
    {
        name: "Why Angular is perfect for web development",
        description: "It isn't.",
        href: "https://blog.zackryrosli.com/why-angular-is-perfect-for-web-development",
    },
];

const workExperience = [
    {
        company: "Decube",
        position: "Software Engineer",
        from: "May 2024",
        till: "Present",
        image: "/decube.png",
        employment: "Contract",
        href: "https://decube.io",
    },
    {
        company: "BerryByte Limited",
        position: "Lead Software Engineer",
        from: "Nov 2023",
        till: "Mar 2024",
        image: "/berrybyte.png",
        employment: "Part-time",
        href: "https://berrybyte.net",
    },
    {
        company: "BerryByte Limited",
        position: "Software Engineer",
        from: "Apr 2022",
        till: "Nov 2023",
        image: "/berrybyte.png",
        employment: "Part-time",
        href: "https://berrybyte.net",
    },
];

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen px-6 md:px-16">
            <section className="min-h-screen w-full flex items-center justify-center py-16">
                <motion.div
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "easeInOut", duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Card className="md:min-h-screen flex flex-col items-center justify-center" interactable>
                        <div className="px-5 md:px-8 py-4 flex flex-col">
                            <Display size="2xl" variant="semibold">
                                Hello there!
                            </Display>
                            <Display size="5xl" className="mt-1.5 md:mt-3.5" variant="semibold">
                                I am a Software Engineer
                            </Display>
                            <Display size="lg" className="mt-4 md:mt-6">
                                A self-driven Go enthusiast hailing from Sarawak, Malaysia, bringing 4 years of hardcore experience to the table.
                                Thrives on crafting innovative solutions with absolute precision.
                            </Display>
                            <div className="z-10 flex flex-col md:flex-row mt-6 gap-4 md:gap-8">
                                <Link href="https://x.com/zack0x64" target="_blank">
                                    <Button variant="tropical_indigo">
                                        Follow on X
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/zackry-rosli" target="_blank">
                                    <Button variant="periwinkle">
                                        Connect on LinkedIn
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </motion.div>  
            </section>
            <section className="py-8 md:py-16">
                <motion.div
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "easeInOut", duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Display size="3xl" variant="semibold">
                        My <span className="underline">Latest</span> Blogs
                    </Display>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        {blogs.map((blog, ix) => (
                            <Link key={ix} href={blog.href} target="_blank">
                                <Card className="px-5 md:px-8 py-6 flex flex-col" interactable>
                                    <Display size="xl" variant="semibold">
                                        {blog.name}
                                    </Display>
                                    <Display className="mt-2">
                                        {truncate(blog.description, 64)}
                                    </Display>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </section>
            <section className="py-8 md:py-16">
                <motion.div
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "easeInOut", duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Display size="3xl" variant="semibold">
                        My <span className="underline">Work</span> Experience
                    </Display>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6">
                        {workExperience.map((exp, ix) => (
                            <Link key={ix} href={exp.href} target="_blank">
                                <Card className="px-5 md:px-8 py-6 flex flex-col" interactable>
                                    <img src={exp.image} className="w-32" />
                                    <Display size="xl" variant="semibold" className="mt-4">
                                        {exp.position}
                                    </Display>
                                    <Display className="mt-1 md:mt-2">
                                        {exp.company} ({exp.employment})
                                    </Display>
                                    <Display className="mt-1 md:mt-2" size="sm">
                                        {exp.from} - {exp.till}
                                    </Display>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </section>
            <Display className="py-8" size="sm">
                &copy; {new Date().getFullYear()} Zackry Rosli. All rights reserved.
            </Display>
        </main>
    );
}
