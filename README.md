## React Tailwind starter project

```javascript
npm install -D tailwindcss
npx tailwindcss init
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Link : https://tailwindcss.com/docs/guides/create-react-app
