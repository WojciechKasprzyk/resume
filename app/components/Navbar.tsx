'use client'
import { useEffect } from "react";

type ScrollDirection = 'down' | 'up';
type SectionIndex = 0 | 1 | 2 | 3;

let skipScroll = false;

function getSectionIndexByScrollProgress(scrollProgress: number, scrollDirection: ScrollDirection): SectionIndex {
    if (scrollDirection === 'down') {
        if (scrollProgress > 0.85) return 3;
        if (scrollProgress > 0.70) return 2;
        if (scrollProgress > 0.2) return 1;
    } else {
        if (scrollProgress > 0.75) return 3;
        if (scrollProgress > 0.60) return 2;
        if (scrollProgress > 0.1) return 1;
    }

    return 0;
}

function setActiveSection(lastScrollY: number) {
    const sections = document.querySelectorAll("section");
    let currentSection: HTMLElement = sections[0];
    const maxScrollY = document.body.offsetHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScrollY;
    const scrollDirection: ScrollDirection = scrollY > lastScrollY ? "down" : "up";

    currentSection = sections[getSectionIndexByScrollProgress(scrollProgress, scrollDirection)];
    setActive(currentSection.getAttribute("id"));
}

function watchScrollSection() {
    let lastScrollY = 0;

    setActiveSection(lastScrollY);

    document.addEventListener("scroll", function () {
        if (skipScroll) {
            return setTimeout(() => skipScroll = false);
        }

        // const sections = document.querySelectorAll("section");
        // let currentSection: HTMLElement = sections[0];
        // const maxScrollY = document.body.offsetHeight - window.innerHeight;
        // const scrollProgress = scrollY / maxScrollY;
        // const scrollDirection: ScrollDirection = scrollY > lastScrollY ? "down" : "up";
        //
        // currentSection = sections[getSectionIndexByScrollProgress(scrollProgress, scrollDirection)];
        // setActive(currentSection.getAttribute("id"));
        setActiveSection(lastScrollY);
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

function redirectToSection(currentSection: string | null): void {
    setActive(currentSection);
    skipScroll = true;
}

function Navbar() {
    // useEffect(() => watchScrollSection(), []);
    return <nav>
        <ul>
            <li><a className="nav-link" onClick={() => redirectToSection('About')} href="#About"><span></span>ABOUT</a></li>
            <li><a className="nav-link" onClick={() => redirectToSection('Experience')} href="#Experience"><span></span>EXPERIENCE</a></li>
            <li><a className="nav-link" onClick={() => redirectToSection('Education')} href="#Education"><span></span>EDUCATION</a></li>
            <li><a className="nav-link" onClick={() => redirectToSection('Tech stack')} href="#Tech stack"><span></span>TECH STACK</a></li>
        </ul>
    </nav>;
}

export default Navbar;
