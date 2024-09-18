import { SectionController } from "../interfaces";
import {
    GoodAtController,
    GreatAtController,
    HypedAboutController,
    LikeALotController
} from "@/content-controllers";

export const TechStackSectionController: SectionController =  {
    header: 'Tech stack',
    content: [
        GreatAtController,
        GoodAtController,
        LikeALotController,
        HypedAboutController
    ],
}
