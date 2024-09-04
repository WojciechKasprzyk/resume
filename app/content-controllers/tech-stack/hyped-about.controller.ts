import { ContentController } from "../../interfaces";
import { Skill } from "@/enums";

export const HypedAboutController: ContentController =   {
    header: 'Just hyped about',
    title: 'Things I would like to spend more on',
    skills: [
        Skill.Svelte,
        Skill.Solid,
        Skill.NextJs,
        Skill.Cypress,
        Skill.Playwright,
    ]
}
