import React from 'react';
import { RentalCard } from './RentalCard';
import { connect } from 'react-redux';
import * as rentalActions from 'actions/rentals-actions';

class RentalList extends React.Component {

    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return <RentalCard key={index} rental={rental} />
        });
    }

    render() {
        return (
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World!</h1>
                <div className='row'>
                    {this.renderRentals()}
                </div>
            </section>
        );
    }


    componentDidMount() {
        this.props.dispatch(rentalActions.fetchRentals());
    }
}



function mapStateToProps(state) {
    return {
        rentals: state.rentals.data,
    }
}

export default connect(mapStateToProps)(RentalList);