export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        school: {
          green: "#1f6f4a",
          leaf: "#2f9d68",
          gold: "#e0a526",
          ink: "#17251f",
          mist: "#f4f8f1"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
