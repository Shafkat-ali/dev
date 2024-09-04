import styles from '../assets/css/ProfileStyles.module.css'
import profile_img from'../images/profile_img.png'
import CV from '../assets/ShafkatAli.pdf'





const Profile = () => {


    return (
    <section className={`${styles.profileContainer}`} id='about'>
        <div className="row" id='profile-info'>
            <div className={`col-12 col-lg-6 ${styles.colorModeContainer}`}>
                <img className={styles.profile} src={profile_img} alt="Shafkat Ali"/>
            </div>
            <div className={`col-12 col-lg-6 ${styles.info}`}>
                <h1>Shafkat Ali</h1>
                <h2>Software QA Engineer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/shafkatali/" target='_blank'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Shafkat-ali" target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </span>
                <p className={styles.description}>
                    Over 7+ years of experience with expertise in Manual/Automated Testing.
                </p>
                <a href={CV} download>
                    <button className='hover btn btn-primary'>Resume</button>
                </a>
            </div>
        </div>

    </section>
    )
}

export default Profile