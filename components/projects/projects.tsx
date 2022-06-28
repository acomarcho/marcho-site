import styles from "./projects.module.css";
import Slider from "./slider/slider";

const Projects = () => {
  return (
    <div className={styles.projectsContainer} id="projects">
      <div className={styles.headingContainer}>
        <h1>Featured Projects</h1>
      </div>
      <Slider />
    </div>
  );
};

export default Projects;
