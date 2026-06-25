import projectStyles from './Projects.module.scss';
import styles from './CaseStudiesIndex.module.scss';
import Reveal from '../ui/Reveal';
import ProjectCard from './ProjectCard';
import { CASE_STUDIES } from '@/lib/links';

export default function CaseStudiesIndex() {
  const projects = CASE_STUDIES.map((study) => ({
    ...study,
    href: `/work/${study.slug}`,
  }));

  return (
    <section className={styles.wrap}>
      <Reveal className={styles.header}>
        <span className={styles.pill}>Case Studies</span>
        <h1 className={styles.heading}>Selected work, told end to end</h1>
        <p className={styles.intro}>
          A closer look at the products I&rsquo;ve designed, the problems behind
          them, the process I followed, and the outcomes they delivered.
        </p>
      </Reveal>

      <div className={projectStyles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
