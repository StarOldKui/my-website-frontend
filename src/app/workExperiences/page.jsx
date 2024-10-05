"use client"
import { useState } from 'react';
import styles from './workexperiences.module.css';

const experiences = [
  {
    company: "PwC",
    logo: "logo-pwc.png",
    position: "Cloud Engineer",
    time: "June 2021 - Present",
    description: "Leading cloud-native development, AWS architecture design, and machine learning integration with Quarkus and Langchain.",
    companyInfo: "PwC is a multinational professional services network with offices in 157 countries, providing industry-focused services in audit and assurance, consulting, and tax.",
    listed: true,
  },
  {
    company: "Wuhan Jindou Medical Data Technology",
    logo: "logo-kindo.png",
    position: "Software Engineer",
    time: "March 2020 - June 2021",
    description: "Developed scalable systems for medical data analysis, optimized MySQL databases, and enhanced backend processes using Java.",
    companyInfo: "Wuhaaaassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan Jindou Medical Data Technology focuses on healthcare data solutions, improving medical processes through data analytics.",
    listed: false,
  },
];

const WorkExperiences = () => {
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentExperienceIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentExperienceIndex((prevIndex) => 
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentExperience = experiences[currentExperienceIndex];

  return (
    <div className={styles.container}>
      <div className={styles.projectCard}>
        <div className={styles.projectInfo}>
          <div className={styles.companyHeader}>
            <div className={styles.companyDetails}>
              <h2 className={styles.company}>{currentExperience.company}</h2>
              <p className={styles.companyInfo}>{currentExperience.companyInfo}</p>
              <p className={styles.listed}>
                {currentExperience.listed ? "Publicly Listed" : "Private Company"}
              </p>
            </div>
          </div>
          <h3 className={styles.position}>{currentExperience.position}</h3>
          <p className={styles.time}>{currentExperience.time}</p>
          <p className={styles.projectDescription}>{currentExperience.description}</p>
        </div>

        <div className={styles.projectImage}>
          <img
            src={currentExperience.logo}
            alt={`${currentExperience.company} logo`}
            className={styles.image}
          />
        </div>
      </div>

      {/* 时间轴 */}
      <div className={styles.timelineContainer}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={`${styles.timelineCircle} ${currentExperienceIndex === index ? styles.active : ''}`}></div>
            <p className={`${styles.timelineText} ${currentExperienceIndex === index ? styles.activeText : ''}`}>{experience.time}</p>
          </div>
        ))}
      </div>

      <div className={styles.carouselControls}>
        <button onClick={handlePrevClick} className={styles.carouselButton}>{"<"}</button>
        <button onClick={handleNextClick} className={styles.carouselButton}>{">"}</button>
      </div>
    </div>
  );
};

export default WorkExperiences;
