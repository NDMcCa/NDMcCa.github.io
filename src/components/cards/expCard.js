import './card.css';

export default function ExpCard (props){
    return (
    <div className="card" key={props.key}>
        <img src={require(`${props.img}`)}  alt="none"/>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>{props.tags}</p>
        <a className="card--button" href={props.link}>See More</a>
    </div>
    )
}
