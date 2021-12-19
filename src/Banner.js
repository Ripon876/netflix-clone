import React,{useState,useEffect} from 'react'
import axios from "./axios";
import requests from "./requests";
import "./Banner.css"
const baseUrl = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState([]);


useEffect(function(){
async function fetchData(){
const request = await axios.get(requests.fetchNetflixOrginals);
setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
return request;

}
fetchData();
},[])

const headerStyle = {
  backgroundImage: 'url(' + baseUrl + movie?.backdrop_path + ')',
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "448px",
  objextFit: "contain"
};
console.log(movie)

function truncate(str,num) {
	return str?.length > num ? str.substr(0,num-1) + "..." : str;
}

	return (
			<header className="banner" style={headerStyle}>
				<div className="banner-contents">
					
					<h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
					
					<div className="banner-buttons">
						<button className="banner-button">Play</button>
						<button className="banner-button">My list</button>
					</div>
					<p className="banner-description"> { truncate(movie?.overview,150)  }</p>
				</div>
				<div className="banner-fadebottom"></div>
			</header>
	)
}

export default Banner;