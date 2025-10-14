import { useState, useRef } from "react";
import styles from "./ContactComp.module.scss";

type TFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactComp() {
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string>("");
  const [shake, setShake] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const checkForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields");
      return false;
    }
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!ok) {
      setError("Please enter a valid email");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkForm()) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }
    console.log(formData);
  };

  return (
    <section className={styles.contact} id="contact">
      <form onSubmit={handleSubmit} className={styles.card}>
        <h2>Contact Us</h2>
        <p>Feel Free to contact us any time. We will get back to you as soon as we can.</p>
        <div className={styles.inputs}>
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
        </div>
        <button ref={btnRef} type="submit" className={shake ? styles.shake : ""}>
          Send
        </button>
        {error && <span className={styles.error}>{error}</span>}
      </form>
    </section>
  );
}
