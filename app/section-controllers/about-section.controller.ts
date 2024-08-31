import { SectionController } from "@/abstracts";
import { AboutController } from "@/content-controllers";

export class AboutSectionController extends SectionController {
    static header = 'About';
    static content = [
        AboutController
    ];
}
