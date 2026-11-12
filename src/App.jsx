import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcodejs";

const DEFAULT_URL = "https://google.com";
const DEFAULT_TITLE = "Improve your front-end skills by building projects";
const DEFAULT_TEXT = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.";

function QrCard({ url, title, text }) {
  const qrContainer = useRef(null);

  useEffect(() => {
    const element = qrContainer.current;
    if (!element) return undefined;

    element.innerHTML = "";
    const code = new QRCode(element, {
      text: url,
      width: 160,
      height: 160,
      colorDark: "#FFFFFF",
      colorLight: "#3685fe",
      correctLevel: QRCode.CorrectLevel.H
    });

    // The original demo removes the browser's built-in title tooltip.
    element.title = "";
    return () => {
      element.innerHTML = "";
    };
  }, [url]);

  return (
    <article className="qr-card">
      <div className="qr-code">
        <div className="qr-code-code" ref={qrContainer} aria-label={`QR code for ${url}`} />
      </div>
      <div className="qr-code-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default function App() {
  const [url, setUrl] = useState(DEFAULT_URL);
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [text, setText] = useState(DEFAULT_TEXT);
  const [draftUrl, setDraftUrl] = useState(DEFAULT_URL);
  const [draftTitle, setDraftTitle] = useState(DEFAULT_TITLE);
  const [draftText, setDraftText] = useState(DEFAULT_TEXT);
  const [error, setError] = useState("");

  function generate(event) {
    event.preventDefault();
    let parsed;
    try {
      parsed = new URL(draftUrl.trim());
      if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("Invalid protocol");
    } catch {
      setError("Please enter a valid URL starting with https:// or http://");
      return;
    }
    setError("");
    setUrl(parsed.href);
    setTitle(draftTitle.trim() || "Scan this QR code");
    setText(draftText.trim() || "Scan the QR code with your phone camera.");
  }

  function downloadQr() {
    const image = document.querySelector(".qr-code-code img");
    const canvas = document.querySelector(".qr-code-code canvas");
    let dataUrl = image?.src;
    if (!dataUrl && canvas) dataUrl = canvas.toDataURL("image/png");
    if (!dataUrl) return;
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "qr-code.png";
    link.click();
  }

  return (
    <main className="app-shell">
      <header className="page-heading">
        <span className="eyebrow">SCAN · CONNECT · EXPLORE</span>
        <h1>QR Code <span>Generator</span></h1>
        <p>Create a QR code for any website and scan it with your phone.</p>
      </header>

      <section className="workspace">
        <QrCard url={url} title={title} text={text} />
        <form className="generator-form" onSubmit={generate}>
          <div className="form-heading">
            <div><span className="form-kicker">CUSTOMIZE YOUR CODE</span><h2>QR settings</h2></div>
            <span className="live-dot">LIVE</span>
          </div>
          <label>
            Website URL
            <input value={draftUrl} onChange={e => setDraftUrl(e.target.value)} placeholder="https://example.com" inputMode="url" required />
          </label>
          <label>
            Card heading
            <input value={draftTitle} onChange={e => setDraftTitle(e.target.value)} maxLength={80} />
          </label>
          <label>
            Description
            <textarea value={draftText} onChange={e => setDraftText(e.target.value)} rows={3} maxLength={180} />
          </label>
          {error && <p className="error" role="alert">{error}</p>}
          <div className="form-actions">
            <button className="primary" type="submit">Generate QR code <span>↗</span></button>
            <button className="secondary" type="button" onClick={downloadQr}>Download PNG ↓</button>
          </div>
          <p className="helper">Hover over the QR card to see the zoom effect. Scan the code to open your link.</p>
        </form>
      </section>

      <footer className="footer">
        <span className="brand-mark">QR</span>
        <span>QR CODE GENERATOR</span>
        <span className="footer-note">Made for quick sharing</span>
      </footer>
    </main>
  );
}
