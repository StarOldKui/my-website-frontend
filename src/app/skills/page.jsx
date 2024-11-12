// Skills.js
import styles from './skills.module.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
            icon: "🖥️",
        },
        {
            category: "Backend",
            skills: [
                "Java",
                "Spring MVC",
                "Spring Boot",
                "Spring Cloud",
                "Quarkus",
                "GraalVM",
                "Native Image",
                "Hibernate",
                "Querydsl",
                "MyBatis",
                "Junit",
                "Spock",
                "Groovy",
                "Zookeeper",
                "AWS MQ",
                "RabbitMQ",
                "Selenium",
                "Python",
                "FastAPI",
                "Pandas",
                "NumPy",
                "Playwright",
                "MySQL",
                "Oracle",
                "PostgreSQL",
                "AWS DynamoDB",
                "Quar",
                "Redis",
                "AWS Glue ETL",
                "AWS Data Catalog Crawler",
                "AWS Redshift",
                "AWS Athena"
            ],
            icon: "⚙️",
        },
        {
            category: "AI",
            skills: [
                "PyTorch",
                "LangChain",
                "LCEL",
                "Agent",
                "RAG",
                "Memory",
                "LangGraph",
                "LangSmith",
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
                "CI/CD Automation",
                "Cloud Resource Optimization",
                "Access Management",
                "Authentication",
                "Encryption",
                "Security & Compliance",
                "Troubleshooting",
                "AWS CDK",
                "AWS CloudFormation",
                "AWS CodePipeline"
            ],
            icon: "🛠️",
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
        {
            category: "Dev Tools & Project Management",
            skills: [
                "IntelliJ IDEA",
                "PyCharm",
                "VS Code",
                "Git",
                "GitHub",
                "GitLab",
                "AWS CodeCommit",
                "Gradle",
                "Maven",
                "Flayway",
                "JWT",
                "Teams",
                "Jira",
                "Confluence",
                "Eraser",
                "Agile",
                "Restful API",
                "WebSocket",
                "OpenAPI v3",
            ],
            icon: "🧰", 
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
