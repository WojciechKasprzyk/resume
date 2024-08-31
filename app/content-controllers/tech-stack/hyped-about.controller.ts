import { ContentController } from "@/abstracts";
import { Skill } from "@/enums";

export class HypedAboutController extends ContentController {
    static header = 'Just hyped about';
    static title = 'Things I would like to spend more on';
    static skills = [
        Skill.Svelte,
        Skill.Solid,
        Skill.NextJs,
        Skill.Cypress,
        Skill.Playwright,
    ]
}
