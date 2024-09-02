import styles from '../assets/css/FooterStyles.module.css'

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Shafkat Ali. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;