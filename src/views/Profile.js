import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/auth/LogoutButton";
function Profile() {
  const { user, isAuthenticated } = useAuth0();

  console.log("User: ", user);

  return (
    <div className="home">
      {isAuthenticated && user && (
        <>
          <h1>User profile page</h1>
          <h3>Data available after log in with your method:</h3>
          <br />
          {Object.entries(user).map(([key, value], idx) => (
            <div className="data" key={idx}>
              <span style={{ fontWeight: "bold" }}>{key}:</span>
              <span>{value}</span>
            </div>
          ))}
          <LogoutButton />
        </>
      )}
    </div>
  );
}

export default Profile;
