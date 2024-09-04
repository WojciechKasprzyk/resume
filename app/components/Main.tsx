import { SectionController } from "../interfaces";
import {
    AboutSectionController,
    EducationSectionController,
    ExperienceSectionController,
    TechStackSectionController
} from "@/section-controllers";
import Section from "@/components/Section";

const sections: SectionController[] = [
    AboutSectionController,
    ExperienceSectionController,
    EducationSectionController,
    TechStackSectionController,
]

function Main() {
    return (
        <main>
            {/*<h2>About</h2>*/}
            {/*<p>*/}
            {/*    I am a big fan of application performance optimization and reactive programming. I love finding new,*/}
            {/*    better ways to solve technical and business cases.*/}
            {/*    Over the past 7 years, I contributed to user-oriented CMS for the healthcare sector, fleet management*/}
            {/*    web and mobile applications tracking vehicles owned by over two thousand organizations, fluid management*/}
            {/*    system dedicated to petrol retailers and buyers, and real estate market micro frontend applications*/}
            {/*    connecting buyers, brokers, and developers.*/}
            {/*    I love well-designed applications having UX that helps to solve user problems, and well-designed*/}
            {/*    architecture having Developer Experience that helps to avoid future problems.*/}
            {/*    So far I have Angular, NgRx, RxJs, Nx workspace, React, Storybook, Javascript, Typescript, HTML, CSS,*/}
            {/*    SCSS, and Flutter under my belt. I used to work with Node.js, MongoDB, and Express.js (MEAN stack). I’m*/}
            {/*    still enthusiastically grabbing onto other Frontend frameworks and libraries.*/}
            {/*</p>*/}

            {/*<h2>Experience</h2>*/}
            {/*<h2>Education</h2>*/}
            {/*<h2>Tech stack</h2>*/}

            {sections.map(section => <Section key={section.header} sectionController={section} />)}

        </main>
    )
}

export default Main;
