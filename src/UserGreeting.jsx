import propTypes from 'prop-types'
function UserGreeting(props){
/*   if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h3>Please Log in to continue {props.username}</h3>
    } */
        const WelcomeMessage = <h2 className="Welcome-message">Welcome {props.username}</h2>

        const LoginPrompt = <h3 className="Login-prompt">Please Log in to continue {props.username}</h3>

        /* Using ternary operator */
        return (props.isLoggedIn ? WelcomeMessage : LoginPrompt )

}
/* Stating the prototype data type */
UserGreeting.prototype  = {
    isLoggedIn :propTypes.bool,
    username:propTypes.string
}
/* User Logged in but no username its default is Guest */
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username:"Guest"
}
export default UserGreeting