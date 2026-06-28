import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.scss';
import Reveal from '../ui/Reveal';
import ProjectLogo from '../ui/ProjectLogo';

export default function ProjectCard({ project }) {
  return (
    <Reveal as="article" className={styles.card} y={40}>
      <Link
        href={project.href}
        className={styles.cardLink}
        aria-label={`View ${project.title} case study`}
      />
      <div className={styles.info}>
        <ProjectLogo
          slug={project.href.split('/').pop()}
          height={44}
          className={styles.logo}
        />
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span className={styles.metaKey}>Category</span>
            <span className={styles.metaVal}>{project.category}</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaRow}>
            <span className={styles.metaKey}>Date</span>
            <span className={styles.metaVal}>{project.date}</span>
          </div>
        </div>
        <span className={styles.cta}>View Case Study</span>
      </div>
      <div className={styles.visual}>
        <div className={styles.visualInner}>
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={859}
            height={707}
          />
        </div>
      </div>
    </Reveal>
  );
}
