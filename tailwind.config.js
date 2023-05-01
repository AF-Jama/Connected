// tailwind.config.js

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}", "./src/Screens/**/*.{js,jsx,ts,tsx}", "./src/Component/**/*.{js,jsx,ts,tsx}" ,"./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            color:{
                'primary':'#000000' 
            }
        },
    },
    plugins: [],
}