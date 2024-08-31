import { SectionController } from "@/abstracts";
import { CodeteController, ComarchController, LoyconController, VonRollController } from "@/content-controllers";

class ExperienceSectionController extends SectionController {
    static header = 'Experience';
    static content = [
        VonRollController,
        CodeteController,
        LoyconController,
        ComarchController
    ];
}
