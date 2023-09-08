/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lightBeige: "#E0CFC3",
                DarkGreen: "#606C5A",
                grey: "#5E5E5E",
                lightGrey: "#858480",
            },
            fontFamily: {
                julius: ["Julius Sans One", ...defaultTheme.fontFamily.sans],
                istok: ["Istok Web", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
