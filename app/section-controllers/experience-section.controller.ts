import { SectionController } from "../interfaces";
import { CodeteController, ComarchController, LoyconController, VonRollController } from "@/content-controllers";

export const ExperienceSectionController: SectionController =  {
    id: 'experience',
    header: 'Experience',
    content: [
        VonRollController,
        CodeteController,
        LoyconController,
        ComarchController
    ],
    link: {
        label: 'View Full Résumé',
        href: '/wojciech-kasprzyk-resume.pdf'
    }
}
