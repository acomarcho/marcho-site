import Wrapper from "../components/wrapper";
import Heading from "../components/heading/heading";
import Experience from "../components/experience/experience";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import ScrollToTop from "../components/scrollToTop";

const MainPage = () => {
  return (
    <Wrapper>
      <>
        <Heading />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </>
    </Wrapper>
  );
};

export default MainPage;
