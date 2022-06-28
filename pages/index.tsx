import Wrapper from "../components/wrapper";
import Heading from "../components/heading/heading";
import Experience from "../components/experience/experience";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import ScrollToTop from "../components/scrollToTop";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Marcho&apos;s Site</title>
        <meta name="description" content="Marchotridyo's personal site. A fullstack web developer that loves making stuffs and learning new things." />
      </Head>
      <Wrapper>
        <>
          <Navbar />
          <Heading />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      </Wrapper>
    </>
  );
};

export default MainPage;
