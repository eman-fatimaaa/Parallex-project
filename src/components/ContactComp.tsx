import { useState } from "react";
import ContactInfo from "./ContactInfo";
import styles from "./ContactComp.module.scss";

type TFormData = { name: string; email: string; message: string };

export default function ContactComp() {
  const [formData, setFormData] = useState<TFormData>({ name: "", email: "", message: "" });
  const [error, setError] = useState<string>("");

  const checkForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields");
      setTimeout(() => setError(""), 2100);
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email");
      setTimeout(() => setError(""), 2100);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkForm()) return;
    console.log(formData);
  };

  return (
    <section className={styles.contact}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <h2>Contact Us</h2>
        <p>Feel Free to contact us any time. We will get back to you as soon as we can!</p>

        <div className={styles.contactContainer}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            id="message-body"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit" className={error ? styles.shakeHorizontal : ""}>Send</button>
          {error && <span className={styles.error}>{error}</span>}
        </div>
      </form>

      <ContactInfo />
    </section>
  );
}
