/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    //set default as dark mode
    darkMode: "class",

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "5px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      padding: {
       
      },
      colors: {
        "primary-one": "#2F80ED",
        "primary-two": "#4F4F4F",
        "primary-three": "#828282",
        "primary-four": "#E0E0E0",
        "gold": "#F8B76B",
        "purple": "#8785FF",
        "matte-red":"#EB5757",
        "matte-yellow":"#F2994A",
        "outbox-chat" : '#EEDCFF',
        "outbox-chat-title" : '#9B51E0',
        "inbox-chat-1" : '#FCEED3',
        "inbox-chat-title-1" : '#E5A443',
        "inbox-chat-2" : '#D2F2EA',
        "inbox-chat-title-2" : '#43B78D',
        'sticker-primary' : '#E9F3FF',
      },
    },
  },
  plugins: [],
};
