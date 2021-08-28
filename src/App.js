
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';


function App() {

    const adminUser = {

        email: "ramavhalemurendeni@gmail.com",
        password: "ramavhale97"

    }

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {

        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {

            console.Log("Your Logged in");


            setUser({
                name: details.name,
                email: details.email
            })

        }
        else {
            console.log("Please check details and try again");
            setError("Please check details and try again");
        }

    }



    const Logout = () => {
        setUser({ name: "", email: "" });

    }


    return (<div className="App">

        {(user.email !== "") ?
            (< div className="welcome" >
                < h2 > welcome,  < span > {user.name} </span></h2 >
                < button onClick={Logout} > Logout </button>
            </div >
            )
            : (<LoginForm Login={Login} error={error} />)
        }
    </div>);


}


export default App;