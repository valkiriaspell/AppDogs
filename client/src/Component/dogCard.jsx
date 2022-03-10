import React, { Component } from 'react';
import './dogCard.css';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class DogCard extends Component {
    render() {
        
        var divStyle = {  backgroundImage: 'url(' + this.props.image + ')',  width: '300px'}
        return (
            <div className='Card'>
                <Link to={`/home/${this.props.id}`}><div className='imgDog' style={divStyle}> </div></Link>
                
                <div className="dogCard">
            <table id="dog">
            <thead>
            <tr>
            <th colSpan="3"><strong>{this.props.name}</strong></th>
             </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Min Weight:</td>
                    <td>{this.props.weight.slice(0,2)} Kg.</td>
                </tr>
                <tr>
                    <td>Max Weight:</td>
                    <td>{this.props.weight.slice(-2)} Kg.</td>
                </tr>
                <tr>
                    <td>Temperament:</td>
                    <td>{this.props.temperament}</td>
                </tr>
                {/* <p>Height: {this.props.height}</p> */}          
                
                {/* <p>Life_span: {this.props.life_span}</p>  */}
                </tbody>                               
            </table>
            <Link to={`/home/${this.props.id}`}><button className='btnSeeDog'>See more</button></Link>
                </div>
            </div>
            
        );
    };
};



export default DogCard;