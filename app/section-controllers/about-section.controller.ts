import { SectionController } from "../interfaces";
import { AboutController } from "@/content-controllers";

export const AboutSectionController: SectionController =  {
    id: 'about',
    header: 'About',
    content: [
        AboutController
    ],
}
