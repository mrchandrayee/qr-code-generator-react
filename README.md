# QR Code Generator — React

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/qr-code-generator-react/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the 26.7-second uploaded video.

## Video analysis and visible source details

The video shows a QR Code Generator card with a blue QR block, white card, hover lift, and delayed QR zoom. The QR code points to `https://google.com` in the original visible React code. The displayed heading and helper text are:

- `Improve your front-end skills by building projects`
- `Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.`

The code panels reveal React 17.0.2, ReactDOM, `qrcodejs` 1.0.0, and a React component that uses a ref and effect to create the QR code. Visible QR settings include 160×160, white foreground, `#3685fe` background, and high error correction.

The visible CSS includes:
- `font-family: "Outfit", sans-serif`
- `.qr-code { width: 320px; padding: 18px; background-color: white; border-radius: 20px; margin: 0 28px; ... }`
- `.qr-code:hover { transform: translateY(-10px); }`
- `.qr-code-code { background-color: #3685fe; display: flex; justify-content: center; padding: 60px 0; border-radius: 10px; transition: transform 0.3s; }`
- `.qr-code-code:hover { transition-delay: 1s; transform: scale(1.5); }`
- `.qr-code-content { padding: 30px 18px; text-align: center; transition: padding 0.3s; }`

## Features in this runnable version
- Generate a QR code for any valid HTTP/HTTPS URL.
- Customize heading and description.
- Download the generated QR code as PNG.
- Hover card lift and delayed QR zoom.
- Responsive layout.
- Validation for invalid URLs.

## Run

Requires Node.js 18+.

```bash
npm install
npm run start
```

Open the local URL shown by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
qr-code-generator-react/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    └── styles.css
```

## Accuracy note

The video shows a partially readable source listing, not every line of the original project. This reconstruction follows the visible React + QRCode.js approach and preserves the displayed design, default Google URL, text, QR settings, and hover behavior. The editable URL/title/description and PNG download are additional practical features.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
