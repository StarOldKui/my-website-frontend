import Image from "next/image";
import styles from "./page.module.css";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className={styles.container}>
      {/* Career and Personal Introduction */}
      <h2 className={styles.sectionTitle}>About Me</h2><br />
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <div className={styles.personalIntro}>
            <p><Highlight>Backend developer</Highlight> and <Highlight>DevOps specialist</Highlight> with <Highlight>4+ years</Highlight> of experience delivering scalable, high-availability <Highlight>Cloud-Native</Highlight> and <Highlight>GenAI</Highlight> applications.</p>
            <p>Proficient in <Highlight>Java</Highlight> and <Highlight>Python</Highlight>, with deep knowledge of distributed systems, microservices, and containerization.</p>
            <p>Extensive hands-on expertise with <Highlight>AWS</Highlight>, with a proven track record in designing and automating <Highlight>CI/CD</Highlight> pipelines and optimizing cloud infrastructure to consistently enhance performance and achieve substantial cost savings.</p>
            <p>Years of practical experience in <Highlight>Agile</Highlight> development. Skilled in collaboration, problem-solving, and clear communication with both technical and non-technical teams.</p>
          </div>
        </div>
      </div>

      {/* Where I Currently Live */}
      <h2 className={styles.sectionTitle}>Where I Currently Live</h2><br />
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
        <h2 className={styles.sectionTitle}>Life Photos</h2><br />
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
        <h2>Contact Me</h2><br />
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
