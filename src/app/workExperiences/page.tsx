"use client"
import styles from './workexperiences.module.css';
import dynamic from "next/dynamic";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";


const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

const data = [
  {
    title: "2024 - 2021",
    content: (
      <div>
        <strong className="text-lg font-bold text-teal-400">SENIOR CLOUD ENGINEER</strong> <br />
        <div><strong>PwC</strong></div>
        <p className="mt-4">
          Led the design of end-to-end cloud-native architectures, collaborating with global teams to deliver cutting-edge cloud and AI solutions. Specialized in cloud-native application development, Generative AI solutions, and cloud migration projects on AWS platforms.
        </p>

        <p className="mt-6">
          <strong>Tech Stacks:</strong>
        </p>

        <p className="mt-2">
          Java, Python, FastAPI, LangChain, LangGraph, LangSmith, Pinecone, Quarkus, GraalVM, AWS, Azure, Docker, Kubernetes, Hibernate, Querydsl, MySQL, Oracle, PostgreSQL, Redis, Flyway, Maven, Groovy Scripts, Spock, Git, OpenAPI.
        </p>

        <div className="mt-6">
          <strong>Key Achievements:</strong>
          <ul className="list-disc list-inside mt-2">
            <li><strong className="text-lg font-bold text-teal-400">Developed multiple high-performance cloud-native applications</strong> using Java and its ecosystem, leveraging Quarkus and GraalVM for native image generation, and deployed them on AWS, significantly improving system scalability and efficiency.</li>
            <li><strong className="text-lg font-bold text-teal-400">Built intelligent Generative AI chatbots</strong> using LangChain, LangGraph, and LangSmith. Mastered advanced AI techniques like prompt engineering and Retrieval-Augmented Generation (RAG), which improved user engagement and automated complex tasks.</li>
            <li><strong className="text-lg font-bold text-teal-400">Improved database performance</strong> by optimizing SQL queries, tuning indexes, and enhancing systems in MySQL, resulting in faster query execution times and better resource utilization.</li>
            <li><strong className="text-lg font-bold text-teal-400">Migrated multiple enterprise infrastructures to AWS,</strong> setting up essential resources like VPCs, EC2 instances, databases, containers, and CI/CD pipelines, streamlining operations and reducing infrastructure costs.</li>
            <li><strong className="text-lg font-bold text-teal-400">Streamlined development processes</strong> by creating Maven Archetype templates and implementing code quality tools—such as integrating Google Checkstyle checks into the Maven lifecycle and adding Git pre-commit hooks for code submissions—improving code quality and reducing development time for the team.</li>
            <li><strong className="text-lg font-bold text-teal-400">Promoted best practices in code development and DevOps</strong> through code reviews and documentation, enhancing overall team productivity and software quality.</li>
            <li><strong className="text-lg font-bold text-teal-400">Collaborated effectively with global teams across different time zones,</strong> frequently working with teams in the United States and India. Participated in early morning internal meetings and evening international conferences daily, ensuring seamless project integration and delivery. Facilitated knowledge sharing among international colleagues.</li>
            <li><strong className="text-lg font-bold text-teal-400">Guided junior developers and colleagues</strong> on code-related issues through video sessions and face-to-face meetings, helping them solve technical problems by explaining underlying principles and sharing problem-solving approaches. Regularly recommended new technologies to broaden the team&apos;s horizons, fostering a culture of continuous learning and improvement.</li>
            <li><strong className="text-lg font-bold text-teal-400">Delivered projects ahead of schedule,</strong> receiving commendations from clients and stakeholders for exceeding expectations and demonstrating reliability.</li>
            <li><strong className="text-lg font-bold text-teal-400">Adapted quickly to rapidly evolving technological environments,</strong> showcasing strong problem-solving skills by effectively integrating new technologies and methodologies into ongoing projects.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2021 – 2020",
    content: (
      <div>
        <strong className="text-lg font-bold text-teal-400">JAVA DEVELOPER</strong> <br />
        <div><strong>Kindo</strong></div>
        <p className="mt-4">
          Developed medical data systems using Java and Spring Boot, ensuring stability and high performance across hospital networks.
        </p>

        <div className="mt-6">
          <strong>Tech Stacks:</strong>

          <p className="mt-2">
            Java, Spring Boot, Spring MVC, Maven, MyBatis, MySQL, JUnit, Git, Linux, Tomcat, Nginx.
          </p>
        </div>

        <div className="mt-6">
          <strong>Key Achievements:</strong>
          <ul className="list-disc list-inside mt-2">
            <li><strong className="text-lg font-bold text-teal-400">Developed and enhanced medical data systems</strong> using Java, Spring Boot, and MyBatis, ensuring stability and functionality across hospital networks.</li>
            <li><strong className="text-lg font-bold text-teal-400">Managed on-site deployments and maintenance</strong> at major hospitals, proficiently handling Linux servers, deploying applications via Tomcat, and configuring Nginx for optimal performance, ensuring smooth operation and high system reliability.</li>
            <li><strong className="text-lg font-bold text-teal-400">Optimized core system code</strong> for enhanced stability and performance, reducing downtime and improving system efficiency.</li>
          </ul>
        </div>
      </div>

    ),
  },
  {
    title: "2019 – 2016",
    content: (
      <div>
        <strong className="text-lg font-bold text-teal-400">BACHELOR OF SCIENCE</strong> <br />
        <div><strong>University of Melbourne</strong></div>
        <div className="mt-6">
          <strong>Major:</strong>
          <p className="mt-2">
            Computing and Software Systems
          </p>
        </div>
      </div>
    ),
  },
];


const WorkExperiences = () => {
  return (
    <div>
      <Timeline data={data} />
      <div style={{ width: '100%', height: '600px' }}>
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
};

export default WorkExperiences;
