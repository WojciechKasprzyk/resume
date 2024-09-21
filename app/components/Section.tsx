import { SectionController } from "../interfaces";
import ContentTile from "@/components/Content-tile";


interface SectionProps {
    sectionController: SectionController
}

function Section({sectionController}: SectionProps) {
    const contentList = sectionController.content.map(contentController => <ContentTile key={contentController.header} contentController={contentController} />);
    return (
        <section id={sectionController.id}>
            {sectionController.header && <h2>{sectionController.header}</h2>}
            <div className="content-list">{contentList}</div>
        </section>
    )
}

export default Section;
