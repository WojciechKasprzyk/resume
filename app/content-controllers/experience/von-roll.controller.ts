import { ContentController } from "@/abstracts";
import { Skill } from "@/enums";

export class VonRollController extends ContentController {
    static header = '2023 - Now';
    static title = 'Senior Frontend Developer | VonRoll';
    static description = 'Developed a web application for visualizing and managing city water networks, including infrastructure and devices. Created related hybrid mobile apps, implementing specific features from the web application and extending them with additional functionalities.';
    static skills = [
        Skill.Angular,
        Skill.Typescript,
        Skill.NgRx,
        Skill.RxJs,
        Skill.SCSS,
        Skill.Nx,
        Skill.Material,
        Skill.MapApi,
        Skill.Ionic,
    ]
}
