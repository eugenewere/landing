/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Inter', 'Poppins', 'sans-serif'],
            },
            colors: {
                'kebu': {
                    50: '#fff8eb',
                    100: '#fdebc8',
                    200: '#fcd48b',
                    300: '#fab84f',
                    400: '#f8991d',
                    500: '#f27a0e',
                    600: '#d65709',
                    700: '#b2390b',
                    800: '#902c10',
                    900: '#772510',
                    950: '#441004'
                }
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

