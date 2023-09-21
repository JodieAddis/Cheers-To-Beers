/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lightBeige: "#E0CFC3",
                beige: "#BFA779",
                DarkGrey: "#3E3E3E",
                beigeBrown: "#8F837A",
                whiteCream: "#FFFDD0",
                grey: "#5E5E5E",
                lightGrey: "#858480",
                darkBrown: "#4A3628",
            },
            fontFamily: {
                Julius: ["Julius", ...defaultTheme.fontFamily.sans],
                // istok: ["Istok Web", ...defaultTheme.fontFamily.sans],
                Aboreto: ["Aboreto", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
