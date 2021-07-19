import firebase from "../firebase/clientApp";
import Auth from '../components/Auth'
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "./dashboard";

export default function SignInScreen() {
    const [user, loading, error] = useAuthState(firebase.auth())

    if (user) {
        return (
            <>
                <Dashboard />
            </>
        )
    }
    else return (
        <>
            <Auth />
        </>
    )
}