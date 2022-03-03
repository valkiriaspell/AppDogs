import React, { Component } from 'react';
import './dogCard.css';
// import { connect } from 'react-redux';
// import { deleteDog, DELETE_DOG } from '../../redux/actions';
// import { Link } from 'react-router-dom';


export class DogCard extends Component {
    
    render() {
        var divStyle = {  backgroundImage: 'url(' + this.props.image + ')',  width: '300px'}

        return (
            <div className='Card'>
                {/* <Link to={`/dogs/${this.props.id}`}><h3>{this.props.name}</h3></Link> */}
                <div className='imgDog' style={divStyle}> </div>
                <div className="dogCard">
            <table>
            <thead>
            <tr>
            <th colspan="3"><strong>{this.props.name}</strong></th>
             </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Weight min:</td>
                    <td>{this.props.weight.slice(0,2)} Kg.</td>
                </tr>
                <tr>
                    <td>Weight max:</td>
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
                <button className='btnSeeDog'>See more</button>
                </div>
            </div>
            
        );
    };
};

// export const mapDispatchToProps = {deleteHouse}  ;

export default DogCard;