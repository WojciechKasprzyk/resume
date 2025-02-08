import { Skill as SkillEnum, SKILLS_LINKS } from "@/enums";

interface SkillProps {
    skill: SkillEnum;
    linksEnabled?: boolean;
}

function Skill({skill, linksEnabled}: SkillProps) {
    if (linksEnabled) {
        return <a href={SKILLS_LINKS[skill]} target="_blank"><li className="skill">{skill}</li></a>
    }
    return <li className="skill">{skill}</li>;
}

export default Skill;
