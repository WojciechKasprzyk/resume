import { ContentController } from "@/abstracts";
import { Skill } from "@/enums";

export class GoodAtController extends ContentController {
    static header = '>1 year industry experience';
    static title = 'Things I\'m good at';
    static skills = [
        Skill.Nx,
        Skill.NodeJs,
        Skill.ExpressJs,
        Skill.MongoDB,
        Skill.Storybook,
        Skill.Flutter,
        Skill.Dart,
    ]
}
