// ============================================================
// ContactSection.jsx
//
// Uses a controlled form — a core React pattern.
//
// CONTROLLED vs UNCONTROLLED forms:
//   Controlled   = React state owns the input value (senior way ✓)
//   Uncontrolled = DOM owns the value (avoid this)
//
// In C# terms: think of `formData` state as a DTO (Data Transfer Object)
// that you build up before sending to an API.
// ============================================================

import { useState } from "react";
import { tokens, sharedStyles } from "../styles";

// Initial state extracted as a constant — easy to reset to
const INITIAL_FORM = { name: "", email: "", message: "" };

export function ContactSection({ links }) {
  // formData is our "DTO" — tracks all field values
  const [formData, setFormData]   = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  // One handler for ALL fields — the `name` attr on each input
  // maps to the matching key in formData. Senior pattern: avoid
  // writing separate handlers (handleNameChange, handleEmailChange...).
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    // Later: replace this with a real fetch() call to your Node/Express API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData(INITIAL_FORM); // reset form
  }

  return (
    <div>
      <p style={sharedStyles.sectionLabel}>// get in touch</p>
      <h2 style={sharedStyles.sectionTitle}>Contact</h2>

      {submitted ? (
        <SuccessMessage onReset={() => setSubmitted(false)} />
      ) : (
        <ContactForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}

      {/* Social Links */}
      <div style={styles.linksRow}>
        {links.map((link) => (
          <a key={link.label} href={link.href} style={styles.link}>
            → {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// ---- Sub-components ----

function ContactForm({ formData, onChange, onSubmit }) {
  return (
    <div style={styles.form}>
      <input
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={onChange}
        style={styles.input}
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={onChange}
        style={styles.input}
      />
      <textarea
        name="message"
        placeholder="Your message..."
        rows={5}
        value={formData.message}
        onChange={onChange}
        style={{ ...styles.input, resize: "vertical" }}
      />
      <button onClick={onSubmit} style={styles.button}>
        SEND_MESSAGE.exe
      </button>
    </div>
  );
}

function SuccessMessage({ onReset }) {
  return (
    <div style={{ ...sharedStyles.card, maxWidth: "500px", marginTop: "32px" }}>
      <p style={{ fontFamily: tokens.fonts.mono, color: tokens.colors.accent, marginBottom: "12px" }}>
        ✓ Message sent successfully.
      </p>
      <button onClick={onReset} style={{ ...styles.button, fontSize: "12px", padding: "6px 16px" }}>
        Send another
      </button>
    </div>
  );
}

const styles = {
  form: {
    display:       "flex",
    flexDirection: "column",
    gap:           "12px",
    maxWidth:      "500px",
    marginTop:     "32px",
  },
  input: {
    background:  "rgba(255,255,255,0.04)",
    border:      `1px solid rgba(255,255,255,0.1)`,
    color:       tokens.colors.text,
    padding:     "10px 14px",
    fontFamily:  tokens.fonts.mono,
    fontSize:    "13px",
    outline:     "none",
    width:       "100%",
    borderRadius:"2px",
  },
  button: {
    background:    "transparent",
    border:        `1px solid ${tokens.colors.accent}`,
    color:         tokens.colors.accent,
    padding:       "10px 24px",
    cursor:        "pointer",
    fontFamily:    tokens.fonts.mono,
    fontSize:      "13px",
    letterSpacing: "0.08em",
    alignSelf:     "flex-start",
    borderRadius:  "2px",
  },
  linksRow: {
    display:   "flex",
    gap:       "16px",
    marginTop: "40px",
  },
  link: {
    fontFamily:     tokens.fonts.mono,
    fontSize:       "13px",
    color:          tokens.colors.text,
    textDecoration: "none",
    padding:        "8px 16px",
    border:         `1px solid rgba(255,255,255,0.08)`,
    transition:     "all 0.2s",
    borderRadius:   "2px",
  },
};
