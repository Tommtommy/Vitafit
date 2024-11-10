// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite болон React-ийн JSX, TSX файлуудыг оруулна
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Үндсэн өнгө (жишээ нь: цэнхэр)
        secondary: '#9333EA', // Туслах өнгө (жишээ нь: ягаан)
        accent: '#10B981', // Тусгай өнгө (жишээ нь: ногоон)
      },
    },
  },
  plugins: [],
}
