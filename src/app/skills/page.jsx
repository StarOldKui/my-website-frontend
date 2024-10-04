import styles from './skills.module.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["Next.js", "React", "JavaScript"],
      icon: "🖥️",
    },
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "MySQL", "Quarkus", "MicroservicesMicroservicesMicroservicesMicroservicesMicroservicesMicroservices"],
      icon: "⚙️",
    },
    {
      category: "AI",
      skills: ["LangChain", "AWS SageMaker", "PyTorch"],
      icon: "🤖",
    },
    {
      category: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS CodePipeline", "Terraform"],
      icon: "🔧",
    },
    {
      category: "AWS",
      skills: [
        "Certified DevOps Engineer",
        "Certified SysOps Administrator",
        "Certified Solutions Architect",
      ],
      icon: "☁️",
    },
  ];

  return (
    <div className={styles.skillsContainer}>
      {skillsData.map((skill) => (
        <div className={styles.card} key={skill.category}>
          <div className={styles.icon}>{skill.icon}</div>
          <h3 className={styles.cardTitle}>{skill.category}</h3>
          <ul className={styles.skillsList}>
            {skill.skills.map((s) => (
              <li className={styles.skillItem} key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
