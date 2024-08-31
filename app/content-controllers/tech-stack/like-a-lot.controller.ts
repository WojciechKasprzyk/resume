import { ContentController } from "@/abstracts";
import { Skill } from "@/enums";

export class LikeALotController extends ContentController {
    static header = 'Personal time, no industry experience';
    static title = 'Things I like a lot';
    static skills = [
        Skill.React,
        Skill.ReactNative,
        Skill.Figma,
    ]
}
