import { SectionController } from "@/abstracts";
import { AghController } from "@/content-controllers";

export class EducationController extends SectionController {
    static header = 'Education';
    static content = [
        AghController
    ];
}
