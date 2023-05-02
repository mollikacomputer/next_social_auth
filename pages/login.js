import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
    const {data:session} = useSession();
  if (session) {
    return (
      <div>
        <p>
          Welcome, {session.user.name}, {session.user.email}
        </p>
        <button className="btn" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p> You are not Login </p>
        <button className="btn" onClick={() => signIn("facebook")}>
          LogIn with Facebook
        </button>
        
        <button className="btn" onClick={() => signIn("google")}>
          LogIn with Google
        </button>

      </div>
    );
  }
};

export default login;
