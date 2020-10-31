import React from 'react'
import "./MovieCard.css"
import Stars from "simple-rating-stars";
import { FaPlay } from "react-icons/fa"
import{Link} from "react-router-dom"

function MovieCard({title, posterUrl, rate}) {
	const CardRating = () => {
		let stars = 0;
		const outOf = 5;
		return (
		  <>
			 <div className="stars">      
			<Stars 
			  stars={stars + rate}
			  outOf={outOf}
			  full={"#ffb703"}
			  empty={"#FFFFFF"}
			  stroke={"#ffb703"}
			/></div>
		  </>
		);
	  };
	return (
    <>
            <div className="product-grid6 col-md-3 col-sm-6">
                <div className="product-image6">
                        <img className="pic-1" alt="moviePoster" src={posterUrl}/>
                                   </div>
                <div className="product-content">
    <h3 className="title">{title}</h3>
                    <div className="price"><CardRating/>
                       
                    </div>
                </div>
                <ul className="social">
                    <li><Link to={`/${title}`} data-tip="Discover" key={title}  >
                <FaPlay style={{cursor: "pointer"}}  className="play"  /></Link></li>
                </ul>
            </div>
         </>
);
}
export default MovieCard;