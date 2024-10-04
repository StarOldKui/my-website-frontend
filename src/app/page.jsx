import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Homepage Title */}
      <h1 className={styles.title}>Alen - Backend Engineer | Cloud Engineer</h1>

      {/* Career and Personal Introduction */}
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <div className={styles.personalIntro}>
            <p>I am an experienced backend engineer specializing in Java and Python development, with expertise in cloud services such as AWS and DevOps tools.</p>
            <p>Click the button below to view my detailed resume and contact me.</p>
          </div>
        </div>
      </div>

      {/* Graduation Photo and Graduation Information */}
      <div className={styles.card}>
  <div className={styles.profileSection}>
    <Image 
      src="/782e7fcf5171ff82b56daefb1b70519.jpg" 
      alt="Graduation Photo" 
      layout="responsive" /* Dynamically adjust the image size */
      width={500} /* Provide a width value */
      height={500} /* Provide a height value (same aspect ratio) */
      className={styles.imgGraduation} 
    />
    <div className={styles.graduationInfo}>
      <p>I graduated from the University of Melbourne with a major in Computer Systems and Software Engineering, with a solid foundation in computer science.</p>
      <p>Graduation Date: December 2019</p>
    </div>
  </div>
</div>


      {/* Life Photos */}
      <div className={styles.lifePhotosSection}>
        <h2 className={styles.sectionTitle}>Life Photos</h2>
        <div className={styles.imgSection}>
          <div className={styles.imgContainer}>
            <Image src="/76c7f2479998b759bd877f218f22482.jpg" alt="" width={300} height={300} />
          </div>
          <div className={styles.imgContainer}>
            <Image src="/dee879a5378c1d283e42b25e3906e38.jpg" alt="" width={300} height={300} />
          </div>
          <div className={styles.imgContainer}>
            <Image src="/d7a561f2e89f3b6cbf4cd394461be53.jpg" alt="" width={300} height={300} />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      {/* Important Buttons: Resume and Contact */}
      <div className={styles.buttons}>
        <a href="/your-resume.pdf" className={styles.button} download>
          Download My Resume
        </a>
      </div>

      <div className={styles.contact}>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:staroldkui@gmail.com">staroldkui@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alen-xia-469600293/">Alen Xia</a></p>
        <p>GitHub: <a href="https://github.com/StarOldKui">My GitHub</a></p>
      </div>
    </div>
  );
}
