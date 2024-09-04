import { ContentController } from "./content-controller";

export interface SectionController {
    header: string;
    content: ContentController[];
}
