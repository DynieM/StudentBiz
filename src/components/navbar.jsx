import React from 'react';
import "./../styles/styles.css"
import homeIcon from "../assets/Logo/studentbizlogo_small.png";
// import profileIcon from "../../assets/Icons/profilepic.png";
// import InboxIcon from "../../assets/Icons/inbox.png";
const Navbar = () => {
    return (
			<div>
				<nav className="navbar">
					<h1 className="this">
						hi
					</h1>
					<div className="logo">
						<a href="#">
							<img src={homeIcon} alt="Home" />
							StudentBiz
						</a>
					</div>
					{/* <div class="rightnav">
                    <a href="#"><img src={profileIcon} alt="Home"/>
                        Profile
                    </a>
                    <a href="#"><img src={InboxIcon} alt="Home"/>
                        Inbox
                    </a>
                </div> */}
				</nav>
			</div>
		);
}

export default Navbar;