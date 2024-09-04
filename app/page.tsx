import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import ModeIcon from "@/components/Mode-icon";

export default function Home() {
  return (
      <>
        <ModeIcon />
        <Header />
        <Main />
        <Footer />
      </>
  );
}
