import { headerContent } from "@/content";
import Socials from "@/components/Socials";
import Navbar from "@/components/Navbar";


function Header() {

    return (
        <header>
            <h1>{headerContent.fullname}</h1>
            <h2 className="subtitle">{headerContent.position}</h2>
            <p className="short-summary">{headerContent.description}</p>

            <Navbar />

            <Socials/>
        </header>
    );
}

export default Header;
