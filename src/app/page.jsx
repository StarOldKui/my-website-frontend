import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Homepage Title */}
      <h1 className={styles.title}>
        <span className={styles.highlight}>Cloud</span> Engineer | <span className={styles.highlight}>AI</span> Engineer
      </h1>

      {/* Career and Personal Introduction */}
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <div className={styles.personalIntro}>
            <p>Backend developer and AWS DevOps specialist with over four years of experience in cloud-native and generative AI application development.</p>
            <p>Extensive hands-on expertise with AWS platforms, holding multiple AWS cloud certifications.</p>
            <p>Extensive experience working in English-speaking, multinational teams, with a strong ability to collaborate effectively with global colleagues. Well-versed in Agile development.</p>
            <p>Proficient in Java and Python, and passionate about exploring and applying new technologies.</p>
          </div>
        </div>
      </div>

      {/* Where I Currently Live */}
      <h2 className={styles.sectionTitle}>Where I Currently Live</h2>
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <p>I currently live at 100 Lorimer St, Docklands VIC 3008, Melbourne.</p>
        </div>
      </div>

      {/* Graduation Photo and Graduation Information */}
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <Image
            src="/782e7fcf5171ff82b56daefb1b70519.jpg"
            alt="Graduation Photo"
            layout="responsive" /* Dynamically adjust the image size */
            width={600} /* Provide a width value */
            height={600} /* Provide a height value (same aspect ratio) */
            className={styles.imgGraduation}
          />
          <div className={styles.graduationInfo}>
            <p><strong>I graduated</strong> from the University of Melbourne with a major in <strong>Computer Systems and Software Engineering</strong>.</p>
            <p>I developed a strong foundation in computer science during my studies, which supports my backend engineering and DevOps expertise.</p>
            <p><strong>Graduation Date:</strong> December 2019</p>
          </div>
        </div>
      </div>

      {/* Life Photos */}
      <div className={styles.lifePhotosSection}>
        <h2 className={styles.sectionTitle}>Life Photos</h2>
        <div className={styles.imgSection}>
          <div className={styles.imgContainer}>
            <Image src="/76c7f2479998b759bd877f218f22482.jpg" alt="Life photo 1" width={300} height={300} />
          </div>
          <div className={styles.imgContainer}>
            <Image src="/dee879a5378c1d283e42b25e3906e38.jpg" alt="Life photo 2" width={300} height={300} />
          </div>
          <div className={styles.imgContainer}>
            <Image src="/d7a561f2e89f3b6cbf4cd394461be53.jpg" alt="Life photo 3" width={300} height={300} />
          </div>
        </div>
      </div>

      {/* Contact Information */}

      <div className={styles.contact}>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:staroldkui@gmail.com" target="_blank" rel="noopener noreferrer">staroldkui@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alen-xia-469600293/" target="_blank" rel="noopener noreferrer">Alen Xia</a></p>
        <p>GitHub: <a href="https://github.com/StarOldKui" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
      </div>

      <div className={styles.buttons}>
        <a href="/Alen_Xia_Software_Engineer_Resume.pdf" className={styles.button} download>
          Download My Resume
        </a>
      </div>
    </div>
  );
}
