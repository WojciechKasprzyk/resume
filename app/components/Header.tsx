import { headerContent } from "@/content";


function Header() {
    return (
        <header>
            <h1>{headerContent.fullname}</h1>
            <h2>{headerContent.position}</h2>
            <p>{headerContent.description}</p>
        </header>
    );
}

export default Header;
