import styles from './Projects.module.scss';
import Reveal from '../ui/Reveal';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'Update App',
    desc: 'Update is a geo-social networking platform that enables users to discover updates from individuals around the world while participating in structured, location-based communities.',
    category: 'Social Networking',
    date: 'March, 2026',
    href: '/work/update',
    image: '/images/home/projects/update.png',
  },
  {
    title: 'KeyFund Real-Estate App',
    desc: 'KeyFund aims to make real-estate investment accessible to Africans with small capital.',
    category: 'Real Estate',
    date: '2025',
    href: '/work/keyfund',
    image: '/images/home/projects/keyfund.png',
  },
  {
    title: 'Orange HRM',
    desc: 'Orange HRM is a HR software that simplifies your workflow, empowering your team from hiring to thriving. The existing dashboard experience was cluttered and visually noisy, making it difficult for HR managers and employees to quickly understand what needed their attention.',
    category: 'HRM Platform',
    date: 'November, 2025',
    href: '/work/orange-hrm',
    image: '/images/home/projects/orange-hrm.png',
  },
  {
    title: 'E-Split App',
    desc: 'E-Split App is a mobile app designed to make sharing expenses among individuals simple, transparent, and stress-free.',
    category: 'Finance',
    date: 'October, 2024',
    href: '/work/e-split',
    image: '/images/home/projects/e-split.png',
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <Reveal className={styles.header}>
        <h2 className={styles.heading}>
          A curated collection of websites designed with care
        </h2>
        <span className={styles.tag}>Projects</span>
      </Reveal>

      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
