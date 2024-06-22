import { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "tropical-indigo": "#9381FF",
                "periwinkle": "#B8B8FF",
                "ghost-white": "#f8f7ff",
                "antique-white": "#FFEEDD",
                "apricot": "#ffd8be",
            },
        },
    },
    plugins: [],
};

export default config;
