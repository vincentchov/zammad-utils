// Created with help from https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project and https://itnext.io/how-to-setup-typescript-eslint-prettier-and-react-in-5-minutes-44cfe8af5081
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    extraFileExtensions: [".js"],
    sourceType: "module", // Allows for the use of imports
  },
  extends: ["airbnb-typescript-prettier"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
