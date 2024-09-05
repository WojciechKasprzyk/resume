import { ContentController } from "../interfaces";

interface ContentTileProps {
    contentController: ContentController
}

function ContentTile({contentController}: ContentTileProps) {
    const description = contentController.description?.map((el, i) => <p className={contentController.descriptionClass} key={'p'+i} dangerouslySetInnerHTML={{__html: el}}></p>);
    const descriptionList = contentController.descriptionList?.map((li, i) => <li key={i}>{li}</li>);
    const skillsList = contentController.skills?.map(skill => <li className="skill" key={skill}>{skill}</li>);

    return (
        <div className='tile'>
            {contentController.header           && <div className="header">{contentController.header}</div>}
            {contentController.title            && <h3>{contentController.title}</h3>}
            {contentController.description      && description}
            {contentController.descriptionList  && <ul>{descriptionList}</ul>}
            {contentController.skills           && <ol>{skillsList}</ol>}
        </div>
    )
}

export default ContentTile;
