import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import styles from "./ContactComp.module.scss";

export default function ContactInfo() {
  return (
    <article className={styles.contactInfo}>
      <h2>Contact Info</h2>
      <ul>
        <li><FaPhone /> +91 8009 054294</li>
        <li><MdAlternateEmail /> info@medieval.com</li>
      </ul>
      <p>
        1000+ Travel partners and 65+ Service city across India, USA, Canada &amp; UAE
      </p>
    </article>
  );
}
