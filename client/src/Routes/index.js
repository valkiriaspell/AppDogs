import React from "react";
import { Route, Switch } from "react-router";
import Dogs from "../Component/dogs.jsx";
import DogById from "../Component/dogById.jsx";
import Nav from "../Component/Nav.jsx"
import LandingPage from "../Component/LandingPage.jsx"
import CreateDog from "../Component/CreateDog.jsx"




const index = ({ dog }) => {
    // console.log(dog)
    return(
            <div className="App">
                
                <Route exact path="/">
                    <LandingPage> </LandingPage> 
                </Route>
                <Route path='/home' component={Nav} />
                <Route exact path="/home"> 
                <Dogs></Dogs></Route>
                <Route path="/home/:id" component={DogById}/>
                <Route path='/home/createDog'> <CreateDog></CreateDog> </Route>
                    {/* <Route exact path='/main' />
                    <Route path='/main/create_dog' />
                    <Route path='/main/detail/:id' /> */}
                
            </div>
    );
};
export default index;