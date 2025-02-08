import { SectionController } from "../interfaces";
import {
    GoodAtController,
    GreatAtController,
    HypedAboutController,
    LikeALotController
} from "@/content-controllers";

export const TechStackSectionController: SectionController =  {
    id: 'techstack',
    header: 'Tech stack',
    content: [
        GreatAtController,
        GoodAtController,
        LikeALotController,
        HypedAboutController
    ],
}
