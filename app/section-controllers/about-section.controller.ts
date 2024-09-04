import { SectionController } from "../interfaces";
import { AboutController } from "@/content-controllers";

export const AboutSectionController: SectionController =  {
    header: 'About',
    content: [
        AboutController
    ],
}
