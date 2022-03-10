import React from "react";
import { Route } from "react-router";
import Dogs from "../Component/dogs.jsx";
import DogById from "../Component/dogById.jsx";
import Nav from "../Component/Nav.jsx"
import LandingPage from "../Component/LandingPage.jsx"
import CreateDog from "../Component/CreateDog.jsx"
import "../App.css"
import homeDog from "../images/dogBall.gif"




const index = () => {
    
    return(
            <div className="App">
                <img className="Home_dog" src={homeDog} alt="homedog"></img>
                <Route exact path="/">
                    <LandingPage> </LandingPage> 
                </Route>
                <Route path='/home' component={Nav} />
                <Route path='/createDog' component={Nav} />

                <Route exact path="/home/:id" component={DogById}/>

                <Route exact path="/home/contact" />

                <Route exact path="/home">
                <Dogs> </Dogs>
                </Route>

                <Route path='/createDog'> <CreateDog></CreateDog> </Route>
                   
                
            </div>
    );
};
export default index;