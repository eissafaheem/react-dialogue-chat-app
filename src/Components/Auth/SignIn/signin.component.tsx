
import { Link, Route, Routes } from "react-router-dom"
import Sidebar from "../../Sidebar/sidebar.component"
import styles from "./signin.module.scss"
import { useSigninHook as useSigninHook } from "./signin.hook"
export default function Signin(){

    const { signInHandler } = useSigninHook()
    return (
        <div className={styles.container}>
            <div className={styles.signinForm}>
                <div className={styles.logo}>
                    <img className={styles.logo} src="/logo512.png" alt="" />
                </div>
                <h1>Welcome to have a Dialogue!</h1>
                <form onSubmit={signInHandler}>
                    <input type="text" placeholder="Enter your userId"/>
                    <input type="password" placeholder="Enter your password"/>
                    <button type="submit">Signin</button>
                </form>
                <span>New here? 
                    <Link to={"/signup"} style={{color:"green"}}>SignUp</Link></span>
            </div>
        </div>
    )
}