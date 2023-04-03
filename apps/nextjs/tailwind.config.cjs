/** @type {import("tailwindcss").Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": { width: "0px", height: "0px", opacity: 0.5 },
          "100%": { width: "500px", height: "500px", opacity: 0 },
        },
      },
      animation: {
        ripple: "ripple 1s linear infinite",
      },
    },
  },
  presets: [require("@acme/tailwind-config")],
};
