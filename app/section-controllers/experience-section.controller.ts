import { SectionController } from "../interfaces";
import { CodeteController, ComarchController, LoyconController, VonRollController } from "@/content-controllers";

export const ExperienceSectionController: SectionController =  {
    header: 'Experience',
    content: [
        VonRollController,
        CodeteController,
        LoyconController,
        ComarchController
    ],
}
