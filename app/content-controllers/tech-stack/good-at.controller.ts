import { ContentController } from "../../interfaces";
import { Skill } from "@/enums";

export const GoodAtController: ContentController =  {
    header: '>1 year industry experience',
    title: 'Things I\'m good at',
    skillLinksEnabled: true,
    skills: [
        Skill.Nx,
        Skill.NodeJs,
        Skill.ExpressJs,
        Skill.MongoDB,
        Skill.Storybook,
        Skill.Flutter,
        Skill.Dart,
    ]
}
