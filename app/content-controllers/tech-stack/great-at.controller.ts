import { ContentController } from "../../interfaces";
import { Skill } from "@/enums";

export const GreatAtController: ContentController =  {
    header: '>5 years industry experience',
    title: 'Things I\'m great at',
    skillLinksEnabled: true,
    skills: [
        Skill.Angular,
        Skill.Typescript,
        Skill.NgRx,
        Skill.RxJs,
        Skill.SCSS,
    ]
}
