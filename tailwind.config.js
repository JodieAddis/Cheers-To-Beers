/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                LightGreen: "#B9B99D",
                DarkGreen: "#606C5A",
                grey: "#5E5E5E",
            },
            fontFamily: {
                julius: ["Julius Sans One", ...defaultTheme.fontFamily.sans],
                istok: ["Istok Web", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
