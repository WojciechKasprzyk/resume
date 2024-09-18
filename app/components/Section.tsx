import { SectionController } from "../interfaces";
import ContentTile from "@/components/Content-tile";


interface SectionProps {
    sectionController: SectionController
}

function Section({sectionController}: SectionProps) {
    const contentList = sectionController.content.map(contentController => <ContentTile key={contentController.header} contentController={contentController} />);
    return (
        <section id={sectionController.header}>
            {sectionController.header && <h2>{sectionController.header}</h2>}
            {contentList}
        </section>
    )
}

export default Section;
