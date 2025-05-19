/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular", "sans-serif"],
        "inter-thin": ["Inter_300Light", "sans-serif"],
        "inter-medium": ["Inter_500Medium", "sans-serif"],
        "inter-semibold": ["Inter_600SemiBold", "sans-serif"],
        "inter-bold": ["Inter_700Bold", "sans-serif"],
        manrope: ["Manrope_400Regular", "sans-serif"],
        "Manrope-thin": ["Manrope_300Light", "sans-serif"],
        "Manrope-medium": ["Manrope_500Medium", "sans-serif"],
        "Manrope-semibold": ["Manrope_600SemiBold", "sans-serif"],
        "Manrope-bold": ["Manrope_700Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
