'use client'
import { useEffect } from "react";

type ScrollDirection = 'down' | 'up';

function getSectionIndexByScrollProgress(scrollProgress: number, scrollDirection: ScrollDirection) {
    if (scrollDirection === 'down') {
        if (scrollProgress > 0.85) return 3;
        if (scrollProgress > 0.65) return 2;
        if (scrollProgress > 0.3) return 1;
    } else {
        if (scrollProgress > 0.75) return 3;
        if (scrollProgress > 0.55) return 2;
        if (scrollProgress > 0.2) return 1;
    }

    return 0;
}

// function setActiveSection(sections: NodeListOf<HTMLElement>, lastScrollY: number) {
//     let currentSection: HTMLElement | null = null;
//     const scrollProgress = scrollY / screen.height;
//     const scrollDirection: ScrollDirection = scrollY > lastScrollY ? "down" : "up";
//
//     currentSection = sections[getSectionIndexByScrollProgress(scrollProgress, scrollDirection)];
//     setActive(currentSection.getAttribute("id"));
//     lastScrollY = scrollY;
// }

function watchScrollSection() {
    let lastScrollY = 0;
    const sections = document.querySelectorAll("section");

    document.addEventListener("scroll", function () {
        // sections.forEach(s => {
        //     console.log(s.offsetTop)
        // })
        let currentSection: HTMLElement | null = null;
        const scrollProgress = scrollY / screen.height;
        const scrollDirection: ScrollDirection = scrollY > lastScrollY ? "down" : "up";

        currentSection = sections[getSectionIndexByScrollProgress(scrollProgress, scrollDirection)];
        setActive(currentSection.getAttribute("id"));
        lastScrollY = scrollY;
    });
}

function setActive(currentSection: string | null): void {
    if (currentSection === null) {
        return;
    }
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

function Navbar() {
    useEffect(() => watchScrollSection(), []);
    return <nav>
        <ul>
            <li><a className="nav-link" onClick={() => setActive('About')} href="#About"><span></span>ABOUT</a></li>
            <li><a className="nav-link" onClick={() => setActive('Experience')} href="#Experience"><span></span>EXPERIENCE</a></li>
            <li><a className="nav-link" onClick={() => setActive('Education')} href="#Education"><span></span>EDUCATION</a></li>
            <li><a className="nav-link" onClick={() => setActive('Tech stack')} href="#Tech stack"><span></span>TECH STACK</a></li>
        </ul>
    </nav>;
}

export default Navbar;
