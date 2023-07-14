/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './_drafts/**/*.{html,md}',
        './_includes/**/*.{html,md}',
        './_layouts/**/*.{html,md}',
        './_posts/**/*.{html,md}',
        // A bit overboard, but just to be sure
        './*.{html,md}',
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#454545",
                "primary-dark": "#353535",
                "primary-light": "#555555",
                "tint": "#9f6cd2",
                "contrast": "#e8e8e8",
            },
            fontFamily: {
                "fira-sans": ["Fira Sans", "sans-serif"],
                "segoe-ui": ["Segoe UI", "sans-serif"],
            },
        },
    },
    darkMode: 'class',
    plugins: [
        // require('@tailwindcss/typography'),
    ],
}

