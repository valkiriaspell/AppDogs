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
        <div>   <ul className="pages">
        <button className="Paged_numbers">1</button>
        <button className="Paged_numbers">2</button>
        <button className="Paged_numbers">3</button>
        <button className="Paged_numbers">4</button>
        <button className="Paged_numbers">5</button>
        <button className="Paged_numbers">6</button>
        <button className="Paged_numbers">7</button>
        <button className="Paged_numbers">8</button>
        <button className="Paged_numbers">9</button>          
        <button className="Paged_numbers">10</button>          
        <button className="Paged_numbers">11</button>          
        <button className="Paged_numbers">12</button>          
        <button className="Paged_numbers">13</button>          
        <button className="Paged_numbers">14</button>        
    </ul>
      <div className='dogsContainer'>
        {this.props.dogs?.map((dog) => (
          <DogCard
            key={dog.id}            
            name={dog.name}
            height={dog.height}
            weight={dog.weight}
            life_span={dog.life_span}
            temperament={dog.temperament}
            image={dog.image}
          />
        ))}
      </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({ dogs: state.dogs });

export const mapDispatchToProps = (dispatch) => {
  return { getAllDogs: () => dispatch(getAllDogs()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);