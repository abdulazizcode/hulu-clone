import React, {forwardRef} from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const base_url = "https://image.tmdb.org/t/p/original/";
const  VideoCard =forwardRef(({movie}, ref) => {
    return (
        <div ref={ref} className="videoCard" >
            <img  key={movie.id}  src={`${base_url}${ movie.backdrop_path || movie.poster_path}`} alt={movie.name}/>

            <TextTruncate
             line={1}
             element="p"
             truncateText= "_"
             text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">
                {movie.media__type && `${movie.media_type} .`}
                {movie.release_date || `${movie.first_air_date}`}
                 <ThumbUpAltIcon/> {"   "}
                {movie.vote_count}
            </p>
            
        </div>
    )
});

export default VideoCard;
