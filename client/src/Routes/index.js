import React from "react";
import { Route, Switch } from "react-router";
import Dogs from "../Component/dogs.jsx";
import Nav from "../Component/Nav.jsx"



const index = ({ dog }) => {
    // console.log(dog)
    return(
            <div className="App">
                <Nav path='/' component={Nav} />
                <Switch >
                <Route exact path="/"> 
                <Dogs></Dogs></Route>
                    {/* <Route exact path='/main' />
                    <Route path='/main/create_dog' />
                    <Route path='/main/detail/:id' /> */}
                </Switch>
            </div>
    );
};
export default index;