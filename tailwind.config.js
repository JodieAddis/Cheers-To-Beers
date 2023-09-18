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
                grey: "#5E5E5E",
                lightGrey: "#858480",
                darkBrown: "#4A3628",
            },
            fontFamily: {
                julius: ["Julius Sans One", ...defaultTheme.fontFamily.sans],
                istok: ["Istok Web", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
