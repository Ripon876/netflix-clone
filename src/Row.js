import React,{useState,useEffect} from 'react';
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer  from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original";


function Row({title,fetchUrl,largRow}) {

	const [movies,setMovies] = useState([]);
	const [trailerUrl,setTrailerUrl] = useState('');

useEffect(function() {

 async function fetchData(){
 const request = await axios.get(fetchUrl);

 setMovies(request.data.results)
return request;
 }
fetchData();
},[fetchUrl])

const opts = {
	height: "390",
	width: "100%",
	playVars : { 
		autoplay : 1,
		}
}
 

function handleTrailer(movie) {
     if (trailerUrl) {
         setTrailerUrl('');
     } else {


         movieTrailer(movie?.title || "")
             .then(url => {

                   if (url) {
                     const urlParam = new URL(url);
                     setTrailerUrl(urlParam.searchParams.get("v"))
                     console.log(trailerUrl)
                  }
                })
             .catch(error => console.log(error))

     }
}


	return (
		<div className="row">
			<h2> { title } </h2>

			<div className={`${largRow ? "largeposterimage row-posters " : "row-posters"}`} >
			{ movies.map(movie => ( 
				<img 
				key={movie.id}
				onClick={() => handleTrailer(movie)}
				className="row-poster"  
				src={`${baseUrl}${largRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
				/>
			))}
			</div>
		{ trailerUrl && <YouTube videoId={trailerUrl}  opts={opts} /> }	
		{/*{`${trailerUrl ? trailerUrl : "row-posters"}`}*/}
		</div> 
	)
}

export default Row;