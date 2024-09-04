import { headerContent } from "@/content";


function Header() {
    return (
        <header>
            <h1>{headerContent.fullname}</h1>
            <h2 className="subtitle">{headerContent.position}</h2>
            <p className="short-summary">{headerContent.description}</p>
        </header>
    );
}

export default Header;
