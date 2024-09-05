import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import ModeIcon from "@/components/Mode-icon";
import Socials from "@/components/Socials";

export default function Home() {
  return (
      <>
          <ModeIcon />
          <Header />
          <Socials />
          <Main />
          <Footer />
      </>
  );
}
