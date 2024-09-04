import { ContentController } from "../../interfaces";
import { Skill } from "@/enums";

export const LikeALotController: ContentController =   {
    header: 'Personal time, no industry experience',
    title: 'Things I like a lot',
    skills: [
        Skill.React,
        Skill.ReactNative,
        Skill.Figma,
    ]
}
