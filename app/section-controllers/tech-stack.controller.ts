import { SectionController } from "@/abstracts";
import {
    GoodAtController,
    GreatAtController,
    HypedAboutController,
    LikeALotController
} from "@/content-controllers";

export class TechStackController extends SectionController {
    static header = 'Tech  stack';
    static content = [
        GreatAtController,
        GoodAtController,
        LikeALotController,
        HypedAboutController
    ];
}
