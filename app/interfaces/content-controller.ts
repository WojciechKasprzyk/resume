import { Skill } from "@/enums";

export interface ContentController {
    readonly header?: string;
    readonly title?: string;
    readonly summary?: string[];
    readonly descriptionClass?: string;
    readonly description?: string[];
    readonly descriptionList?: string[];
    readonly skills?: Skill[];
    readonly skillLinksEnabled?: boolean;
    readonly contentLink?: string;

}
