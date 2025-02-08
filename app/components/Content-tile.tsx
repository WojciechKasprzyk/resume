import { ContentController } from "../interfaces";
import Skill from "@/components/Skill";
import { SKILLS_LINKS } from "@/enums";
import LinkIcon from "@/components/Link-icon";

interface ContentTileProps {
    contentController: ContentController
}

function ContentTile({contentController}: ContentTileProps) {
    const summary = contentController.summary?.map((el, i) => <p key={'p' + i}
                                                                 dangerouslySetInnerHTML={{__html: el}}></p>);
    const description = contentController.description?.map((el, i) => <p className={contentController.descriptionClass}
                                                                         key={'p' + i}
                                                                         dangerouslySetInnerHTML={{__html: el}}></p>);
    const descriptionList = contentController.descriptionList?.map((li, i) => <li key={i}>{li}</li>);
    const skillsList = contentController.skills?.map(skill => <Skill key={skill} skill={skill}
                                                                     linksEnabled={contentController.skillLinksEnabled}/>);

    // const content = <div className='tile'>
    //     {contentController.header && <div className="header">{contentController.header} </div>}
    //     <div className='inner-tile'>
    //         {contentController.title && <h3>{contentController.title} <LinkIcon /></h3>}
    //         {contentController.summary && <summary>{summary}</summary>}
    //         {contentController.description && description}
    //         {contentController.descriptionList && <ul>{descriptionList}</ul>}
    //         {contentController.skills && <ol>{skillsList}</ol>}
    //     </div>
    // </div>

    if (contentController.contentLink) {
        return <a className='link-icon' href={contentController.contentLink}>
            <div className='tile'>
                {contentController.header && <div className="header">{contentController.header} </div>}
                <div className='inner-tile'>
                    {contentController.title && <h3>{contentController.title} <LinkIcon /></h3>}
                    {contentController.summary && <summary>{summary}</summary>}
                    {contentController.description && description}
                    {contentController.descriptionList && <ul>{descriptionList}</ul>}
                    {contentController.skills && <ol>{skillsList}</ol>}
                </div>
            </div>
        </a>;
    }

    return <div className='tile'>
        {contentController.header && <div className="header">{contentController.header} </div>}
        <div className='inner-tile'>
            {contentController.title && <h3>{contentController.title}</h3>}
            {contentController.summary && <summary>{summary}</summary>}
            {contentController.description && description}
            {contentController.descriptionList && <ul>{descriptionList}</ul>}
            {contentController.skills && <ol>{skillsList}</ol>}
        </div>
    </div>;
}

export default ContentTile;
