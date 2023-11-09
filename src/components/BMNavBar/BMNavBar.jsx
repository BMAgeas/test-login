import Image		from "next/image";
import styles		from "./BMNavBar.module.scss";
import cssVariables	from "../../app/variables.module.scss";

const BMNavBar = () => {
	return (
		<nav className={`navbar ${styles.NavTag}`}>
			<div className="container-fluid">
				<a href="#" className="navbar-brand">
					<Image src="/AgeasCircleLogo.png" alt="AGLogo" width="30" height="30" className="d-inline-block align-text-top mx-3" />
					Ageas <span className="SlightlyBolder">Store</span>
				</a>
				<form className="d-flex" role="search">
					{/* <input type="search" className="form-control me-2" placeholder="Search..." style={{ backgroundColor : cssVariables.AgeasGray }} /> */}
					<input type="search" className="form-control me-2" placeholder="Search..." />
					<button className="btn btn-outline-success">Go</button>
				</form>
			</div>
		</nav>
	);
};

export default BMNavBar;