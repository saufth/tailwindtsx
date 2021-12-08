module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: false, // or "media" or "class"
    theme: {
        fontFamily: {
            rob: [
                "Roboto"
            ],
            mono: [
                "Share Tech Mono"
            ]
        },
        maxWidth: {
            "container": "1260px",
            "9/10": "90%"
        },
        extend: {
            fontSize: {
                "4cxl": "2.5rem"
            },
            width: {
                "3/10": "30%",
                "7/10": "70%",
                "17/20": "85%",
                "9/10": "90%"
            },
            spacing: {
                "15": "3.75rem"
            }
        }
    },
    variants: {
        extend: {
            padding: ["first"]
        },
    },
    plugins: [],
}
