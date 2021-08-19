import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase/app";
import 'firebase/auth'
import styles from '../styles/Auth.module.css'

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            displayName: true
        },
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            displayName: true
        }
    ],
    signInSuccessUrl: '/dashboard',
    credentialHelper: 'none',
}

const FirebaseAuth = () => {
    return (
        <div className={styles.page}>
            <div className={styles.auth_container}>
                <h1>Sign In or Create Account</h1>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        </div>
    )
}

export default FirebaseAuth