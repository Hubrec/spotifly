import './Track.css';

type TrackProps = {
    title: string;
    number: number;
    imgLink: string;
    spotifyLink: string;
}

function Track(props: TrackProps) {

    return (
        <div className="track">
            <a 
                href={props.spotifyLink}
                className='track__link'
            >
                <div 
                    className='track__container'
                >
                    <img 
                        className='track__image'
                        src={props.imgLink}
                    ></img>
                    <p>{props.number}. {props.title}</p>
                </div>
            </a>
        </div>
    );
}

export default Track;