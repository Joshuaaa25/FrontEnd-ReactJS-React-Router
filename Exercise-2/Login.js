// create button login
function LoginButton(props) {
    return (
        <buttton onClick={props.onClick}>
            Login
        </buttton>
    );
}

//create button logout
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}