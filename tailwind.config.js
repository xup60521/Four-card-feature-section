/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_p_Red: "hsl(0, 78%, 62%)",
                c_p_Cyan: "hsl(180, 62%, 55%)",
                c_p_Orange: "hsl(34, 97%, 64%)",
                c_p_Blue: "hsl(212, 86%, 64%)",
                c_n_Very_Dark_Blue: "hsl(234, 12%, 34%)",
                c_n_Grayish_Blue: "hsl(229, 6%, 66%)",
                c_n_Very_Light_Gray: "hsl(0, 0%, 98%)",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"]
            }
        },
    },
    plugins: [],
}

