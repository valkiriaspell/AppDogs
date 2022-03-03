import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllDogs } from "../Redux/actions.js";
import DogCard from "./dogCard.jsx";
import './dogs.css'


export class Dogs extends Component {
    
  componentDidMount() {
    this.props.getAllDogs();
  }
  render() {
    return (
      <div className='dogsContainer'>
        <h1>Perros</h1>
        {/* <img src={image} alt="main-img"></img> */}
        <h3>Dogs</h3>
        {this.props.dogs?.map((dog) => (
          <DogCard
            key={dog.id}            
            name={dog.name}
            height={dog.height}
            weight={dog.weight}
            temperament={dog.temperament}
            image={dog.image}
          />
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({ dogs: state.dogs });

export const mapDispatchToProps = (dispatch) => {
  return { getAllDogs: () => dispatch(getAllDogs()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);