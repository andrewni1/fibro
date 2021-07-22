import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'
import Link from 'next/link'

export default function Dashboard() {
  const [user, loading, error] = useAuthState(firebase.auth());
  
  const onSubmit = async event => {
    firebase.auth().signOut()
  }

  if (user) {
    return (
        <>
            <h2>{user.displayName}</h2>
            <h2>{user.email}</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/inventory">
                  <a>Inventory</a>
                </Link>
              </li>
              <li>
                <Link href="/bots">
                  <a>Bots</a>
                </Link>
              </li>
              <li>
                <Link href="/expenses">
                  <a>Expenses</a>
                </Link>
              </li>
            </ul>
            <form onSubmit={onSubmit}>
              <button type="submit">Sign-out</button>
            </form>
        </>
    )
  }
  else return (
      <>
          <Auth />
      </>
  )
}