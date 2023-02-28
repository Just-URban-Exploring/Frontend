
import styles from "../../css/LandingPage.module.css";
import { useNavigate } from "react-router-dom";


// export const Logout = () => {
// const [isLoggedin, setIsLoggedin] = useState(false);

// const logout = () => {
// 	localStorage.removeItem('token');
// 	setIsLoggedin(false);
// };

// return (
// 		<>
// 			<h1>User is logged in</h1>
// 			<button onClickCapture={logout}>logout user</button>
// 		</>
// 		)}

export const Logout = () => {

  const navigate = useNavigate();

	return(
		<div className={styles.container}>
			<h1>Du bist ausgeloggt. Alles Gute bis zum nächsten Mal!</h1>
			<button onClick={() => navigate('/')}>Home</button>
		</div>
	)
}


