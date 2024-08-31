import { ContentController } from "@/abstracts";
import { Skill } from "@/enums";

export class ComarchController extends ContentController {
    static header = 'March 2022 - July 2023';
    static title = 'Senior Frontend Developer | Codete (now Exadel Europe)';
    static description = 'Developed micro frontend monorepo application for the real estate market, connecting buyers, brokers, and developers.';
    static skills = [
        Skill.Angular,
        Skill.Typescript,
        Skill.NgRx,
        Skill.RxJs,
        Skill.SCSS,
        Skill.Nx,
        Skill.Material,
        Skill.Storybook,
    ]
}
