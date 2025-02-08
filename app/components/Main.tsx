import { SectionController } from "../interfaces";
import {
    AboutSectionController,
    EducationSectionController,
    ExperienceSectionController,
    TechStackSectionController
} from "@/section-controllers";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

const sections: SectionController[] = [
    AboutSectionController,
    ExperienceSectionController,
    EducationSectionController,
    TechStackSectionController,
]

function Main() {
    return (
        <main>
            {sections.map(section => <Section key={section.header} sectionController={section} />)}
            <Footer />
        </main>
    )
}

export default Main;
