import styles from '../assets/css/ExperienceStyles.module.css'

const Contact = () => {
  return (
    <section className={`row ${styles.experience}`} id='contact'>
        <h1 className="title">Contact Me</h1>
        <div className={`col-10 card border-dark my-3 py-3 ${styles.border}`} id='exp-card'>
            <div className="d-flex justify-content-evenly">
                <p>
                    <a href="mailto:shawn.ali1203@gmail.com" style={{ fontSize: '30px', marginRight: '10px'}} className='' target='_blank'>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <span id={`${styles.email_address}`}>
                        shawn.ali1203@gmail.com
                    </span>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/shafkatali/" style={{ fontSize: '30px' }} target='_blank'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </p>
                <p>
                    <a href="https://github.com/Shafkat-ali" style={{ fontSize: '30px' }} target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </p>
                <p>
                    <a href="https://www.instagram.com/uyghurkid/" style={{ fontSize: '30px' }} target='_blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </p>
                <p>
                    <a href="https://www.facebook.com/uyghurkid" style={{ fontSize: '30px' }} target='_blank'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </p>
                <p>
                    <a href="https://www.youtube.com/@AliShauketFamily" style={{ fontSize: '30px' }} target='_blank'>
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </p>
                <p>
                    <a href="https://www.tiktok.com/@shawnali55" style={{ fontSize: '30px' }} target='_blank'>
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </p>
            </div>
        </div>

    </section>
  );
};

export default Contact;
