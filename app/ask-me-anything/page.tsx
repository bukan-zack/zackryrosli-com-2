import AskMeAnythingPage from "@/app/ask-me-anything/AskMeAnythingPage"; 
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ask Me Anything",
};

export default function Page() {
    return <AskMeAnythingPage />;
}