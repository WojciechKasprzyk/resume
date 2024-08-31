import { SectionController } from "../abstracts";
import { VonRollController } from "../content-controllers/von-roll.controller";

class ExperienceController extends SectionController {
    static header = 'Experience';

    static content = [
        VonRollController
    ];
}
