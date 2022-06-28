import Wrapper from "../components/wrapper";
import Heading from "../components/heading/heading";
import Experience from "../components/experience/experience";
import Projects from "../components/projects/projects";

const MainPage = () => {
  return (
    <Wrapper>
      <>
        <Heading />
        <Experience />
        <Projects />
      </>
    </Wrapper>
  );
};

export default MainPage;
