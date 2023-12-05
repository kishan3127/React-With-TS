import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
function Header() {
  let auth = useAuth();
  let navigate = useNavigate();

  return !auth.user ? (
    <p>Not Logged In</p>
  ) : (
    <p>
      Welcome {auth.user}! {JSON.stringify(auth)}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
export default Header;
