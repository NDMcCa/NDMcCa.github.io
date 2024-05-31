import './card.css';

export default function ProjectCard (props){
    return (
    <div className="card" key={props.key}>
        {/* <img src={require(`${props.img}`)}  alt="none"/> */}
        <div className="card--content">
            <h2>{props.title}</h2>
        </div>
        {/* <div className="card--content">
            <p>{props.content}</p>
        </div> */}
        <div className="card--content">
            <p>{props.tags}</p>
        </div>
        <div className="card--button--container">
                <a className="card--button" href={props.link}>See More</a>
        </div>
    </div>
    )
}
