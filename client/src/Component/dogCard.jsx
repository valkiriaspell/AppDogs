import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { deleteDog, DELETE_DOG } from '../../redux/actions';
// import { Link } from 'react-router-dom';

export class DogCard extends Component {

    render() {

        return (
            <div className="dogCard">
                {/* <Link to={`/dogs/${this.props.id}`}><h3>{this.props.name}</h3></Link> */}
                <div className='imgDog'><img src={this.props.image} alt="main-img"></img></div>
                <p>height: {this.props.name}</p>
                <p>weight: {this.props.weight}</p>
                <p>life_span: {this.props.life_span}</p>                
                <p>temperament: {this.props.temperament}</p>                
                {/* <button onClick={() => this.props.deleteHouse(this.props.id)}>X</button> */}
            </div>
        );
    };
};

// export const mapDispatchToProps = {deleteHouse}  ;

export default DogCard;