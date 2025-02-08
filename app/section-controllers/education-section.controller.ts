import { SectionController } from "../interfaces";
import { AghController } from "@/content-controllers";

export const EducationSectionController: SectionController =  {
    id: 'education',
    header: 'Education',
    content: [
        AghController
    ],
}
