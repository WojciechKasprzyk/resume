import { ContentController } from "@/abstracts";
import { Skill } from "@/enums";

export class GreatAtController extends ContentController {
    static header = '>5 years industry experience';
    static title = 'Things I\'m great at';
    static skills = [
        Skill.Angular,
        Skill.Typescript,
        Skill.NgRx,
        Skill.RxJs,
        Skill.SCSS,
    ]
}
