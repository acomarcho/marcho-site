import styles from "./experience.module.css";
import Accordion from "./accordion/accordion";
import PrimaryButton from "../primaryButton";

const Experience = () => {
  const freelanceContent = (
    <>
      <p>
        I&apos;ve made many projects using mainly tech stacks like{" "}
        <strong>React</strong>, <strong>Node</strong>, <strong>Express</strong>,{" "}
        <strong>Next</strong>, and <strong>PostgreSQL</strong>. I often make the
        designs myself too using <strong>Figma</strong>.
      </p>
      <div className={styles.buttonContainer}>
        <PrimaryButton href="/" text="See featured projects" />
      </div>
    </>
  );

  const QAContent = (
    <>
      <p>
        I managed test cases for Pintarnya Kerja using <strong>Testiny</strong> and used several
        technical tools such as <strong>DBeaver</strong>, <strong>Postman</strong>, <strong>MoEngage</strong>, and <strong>Amplitude</strong> to
        test new features pushed by engineers.
      </p>
      <br />
      <p>
        I also do thorough <strong>code reviews</strong> and <strong>debugging</strong> when I find bugs and <strong>fix
        them myself</strong> if the engineers are occupied.
      </p>
    </>
  );

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.headingContainer}>
        <h1>Work Experience</h1>
      </div>
      <div className={styles.accordionsContainer}>
        <Accordion title="Freelance Web Developer">
          {freelanceContent}
        </Accordion>
        <Accordion title="QA Intern @ Pintarnya">
          {QAContent}
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
