import './Artist.css';

type ArtistProps = {
    name: string;
    number: number;
    imgLink: string;
    spotifyLink: string;
}

function Artist(props: ArtistProps) {

    return (
        <div className="artist">
            <a 
                href={props.spotifyLink}
                className='artist__link'
            >
                <div 
                    className='artist__container'
                >
                    <img 
                        className='artist__image'
                        src={props.imgLink}
                    ></img>
                    <p>{props.number}. {props.name}</p>
                </div>
            </a>
        </div>
    );

}

export default Artist;