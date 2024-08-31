import { SectionController } from "@/abstracts";
import { AghController } from "@/content-controllers";

export class EducationSectionController extends SectionController {
    static header = 'Education';
    static content = [
        AghController
    ];
}
