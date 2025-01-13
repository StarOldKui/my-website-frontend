import Image from "next/image";
import styles from "./page.module.css";
import { Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/moving-border";



export default function Home() {
  return (
    <div className={styles.container}>
      {/* Career and Personal Introduction */}
      <h2 className={styles.sectionTitle}>About Me</h2><br />
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <div className={styles.personalIntro}>
            <p><Highlight>Software developer</Highlight> and <Highlight>DevOps specialist</Highlight> with 4+ years of experience delivering scalable, high-availability Cloud-Native and GenAI applications.</p>
            <p>Proficient in <Highlight>Java</Highlight>, <Highlight>Python</Highlight> and <Highlight>TypeScript</Highlight>, with deep knowledge of distributed systems, microservices, and containerization.</p>
            <p>Extensive hands-on expertise with <Highlight>AWS</Highlight>, with a proven track record in designing and automating CI/CD pipelines and optimizing cloud infrastructure to consistently enhance performance and achieve substantial cost savings.</p>
            <p>Years of practical experience in Agile development. Skilled in collaboration, problem-solving, and clear communication with both technical and non-technical teams.</p>
          </div>
        </div>
      </div>

      {/* Life Photos */}
      <div className={styles.lifePhotosSection}>
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
        <h2>My Contact</h2><br />
        <p>Email: <a href="mailto:staroldkui@gmail.com" target="_blank" rel="noopener noreferrer">staroldkui@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alen-xia-469600293/" target="_blank" rel="noopener noreferrer">Alen Xia</a></p>
        <p>GitHub: <a href="https://github.com/StarOldKui" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
      </div>

      <br />
      <Button download borderRadius="1.75rem">
        <a href="/Alen_Xia_Software_Engineer_Resume.pdf" download>
          Download My CV
        </a>
      </Button>
      <br />

    </div>
  );
}
