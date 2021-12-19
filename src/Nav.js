import React,{useState,useEffect} from 'react'
import "./Nav.css"

function Nav() {

	const [show, handleShow] = useState(false)

useEffect(() => {
	
window.addEventListener("scroll",function(){
	if(window.scrollY > 100){
		handleShow(true)
	}else{
		handleShow(false)
	};
	return () =>{
		window.removeEventListener("scroll");
	}
})


}, [])

	return (
		<div className={`nav ${show && "nav-black"} `}>
			<img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
			<img className="nav-avatar" src="https://www.freeiconspng.com/uploads/icon-user-blue-symbol-people-person-generic--public-domain--21.png" alt="Netflix Logo" />
		</div>
	)
}

export default Nav;