import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase/app";
import 'firebase/auth'

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
        <div>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    )
}

export default FirebaseAuth