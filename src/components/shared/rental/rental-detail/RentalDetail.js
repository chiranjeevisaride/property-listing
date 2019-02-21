import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as rentalActions from 'actions/rentals-actions';

export class RentalDetail extends Component {
    render() {
        const rental = this.props.rental;
        if(rental.id) {
            return (
                <div>
                    <p>I am rental details component</p>
                    <p>{rental.title}</p>
                    <p>{rental.city}</p>
                    <p>{rental.state}</p>
                    <p>{rental.description}</p>
                </div>
            );
        } else {
            return (
                <h2>Loading....</h2>
            );
        }
    }

    componentDidMount() {
        const rentalId = parseInt(this.props.match.params.id);
        this.props.dispatch(rentalActions.fectchRentalById(rentalId));
    }
}


function mapStateToProps(state) {
    return {
        rental: state.rental.data,
    }
}

export default connect(mapStateToProps)(RentalDetail);