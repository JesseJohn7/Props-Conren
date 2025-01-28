/* Conditional rendering allows you to control what gets rendered in your application based on certain conditions */

import UserGreeting from "./UserGreeting.jsx"

function App() {

return(
  <>
    <UserGreeting isLoggedIn ={true}  username = "Billionare Dev"/>
  </>
)
  
}

export default App
