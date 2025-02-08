import { SectionController } from "../interfaces";
import ContentTile from "@/components/Content-tile";
import LinkIcon from "@/components/Link-icon";

interface SectionProps {
    sectionController: SectionController
}

function Section({sectionController}: SectionProps) {
    const contentList = sectionController.content.map(contentController => <ContentTile key={contentController.header} contentController={contentController} />);
    return (
        <section id={sectionController.id}>
            {sectionController.header && <h2>{sectionController.header}</h2>}
            <div className="content-list">{contentList}</div>
            {sectionController.link &&
                <div className="link">
                    <a className='link-icon' target="_blank" href={sectionController.link.href}>{sectionController.link.label}
                        <LinkIcon />
                    </a>
                </div>
            }
        </section>
    )
}

export default Section;
