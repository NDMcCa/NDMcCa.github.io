import './card.css';

function WatchCard (props){
    return (
        <div className='w_card'>
            <img src={require(`${props.img}`)}  alt="none"/>
            {/* <button className="w_card--button">See More</button> */}
        </div>
    )
}

export default WatchCard;