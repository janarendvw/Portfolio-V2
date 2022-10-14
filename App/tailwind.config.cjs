/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myDark: {
          primary: "#1326ff",
          secondary: "#FFF",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#070707",

          "--rounded-box": "5px", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "5px", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "5px", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "capitalize", // set default text transform for buttons
          "--btn-focus-scale": "1", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
        myLight: {
          primary: "#1326ff",
          secondary: "#070707",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#F9FAFB",

          "--rounded-box": "5px", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "5px", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "5px", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "capitalize", // set default text transform for buttons
          "--btn-focus-scale": "1", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        }
    
      },
    ],
  }
}
