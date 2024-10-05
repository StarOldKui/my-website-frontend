// Skills.js
import styles from './skills.module.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            skills: ["JavaScript", "React", "Next.js"],
            icon: "🖥️",
        },
        {
            category: "Backend",
            skills: [
                "Python",
                "FastAPI",
                "Java",
                "JVM",
                "Spring Boot",
                "Spring Cloud",
                "Quarkus",
                "Hibernate",
                "MyBatis",
                "MySQL",
                "Oracle",
                "PostgreSQL",
                "Redis",
                "Docker",
                "Kubernetes",
                "AWS ECS",
                "AWS Lambda",
                "AWS CDK",
                "AWS RDS",
                "AWS DynamoDB",
                "Flyway",
                "Maven",
                "OpenAPI",
                
                "Git",
            ],
            icon: "⚙️",
        },
        {
            category: "AI",
            skills: [
                "PyTorch",
                "LangChain",
                "LangSmith",
                "LangGraph",
                "Agent",
                "RAG",
                "Memory",
                "AWS SageMaker",
                "AWS Bedrock",
                "AWS OpenSearch",
                "Pinecone",
            ],
            icon: "🤖",
        },
        {
            category: "DevOps",
            skills: [
                "AWS CodePipeline",
                "AWS CloudFormation",
                "CI/CD Pipeline Design",
            ],
            icon: "🔧",
        },
        {
            category: "AWS",
            skills: [
                "Certified DevOps Engineer - Professional",
                "Certified SysOps Administrator - Associate",
                "Certified Solutions Architect - Associate",
                "Certified Developer - Associate",
            ],
            icon: "☁️",
        },
    ];

    return (
        <div className={styles.skillsContainer}>
            {skillsData.map((skill, index) => (
                <div className={`${styles.card} ${styles[`card${index + 1}`]}`} key={skill.category}>
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
