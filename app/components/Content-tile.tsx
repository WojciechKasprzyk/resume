import { ContentController } from "../interfaces";

interface ContentTileProps {
    contentController: ContentController
}

function ContentTile({contentController}: ContentTileProps) {
    const descriptionList = contentController.descriptionList?.map((li, i) => <li key={i}>{li}</li>);
    const skillsList = contentController.skills?.map(skill => <li className="skill" key={skill}>{skill}</li>);

    return (
        <div>
            <div className="header">{contentController.header}</div>
            <h3>{contentController.title}</h3>
            <p>{contentController.description}</p>
            {contentController.descriptionList && <ul>{descriptionList}</ul>}
            {contentController.skills && <ol>{skillsList}</ol>}
        </div>
    )
}

export default ContentTile;
