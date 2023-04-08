
import { Link, Route, Routes } from "react-router-dom"
import Sidebar from "../../Sidebar/sidebar.component"
import styles from "./signup.module.scss"
import { useSigninHook } from "../SignIn/signin.hook"
import { useSignUpHook } from "./signup.hook"
export default function SignUp(){

    const {handleSignUp} = useSignUpHook();
    return (
        <div className={styles.container}>
            <div className={styles.signinForm}>
                <div className={styles.logo}>
                    <img className={styles.logo} src="/logo512.png" alt="" />
                </div>
                <h1>Start a Dialogue!</h1>
                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder="Enter your userId"/>
                    <input type="text" placeholder="Enter your name"/>
                    <input type="password" placeholder="Enter your password"/>
                    <input type="password" placeholder="Re-enter your password"/>
                    <button type="submit">SignUp</button>
                </form>
                <span>New here?  
                    <Link to={"/"} style={{color:"green"}}>SignIn</Link></span>
            </div>
        </div>
    )
}