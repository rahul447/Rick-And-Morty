import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../actions/actionCreators';
import CardsWrapper from "../../components/CardWrapper/CardWrapper";

class CardListing extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount () {
        this.props.getUsers();
    }

    inputChangeHandler(event) {
        this.props.setSearchedUsers(event);
    }

    render () {
        let spinner = this.props.isLoading ? <Spinner /> : null;
        let cardsWrapper = this.props.searchedUers && this.props.searchedUers.length > 0 ? 
        <CardsWrapper users={this.props.searchedUers} 
        inputChangeHandler={(event) => this.inputChangeHandler(event)} /> : null;
        return (
            <Aux>
                {spinner}
                {cardsWrapper}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        users: state.users
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(actions.getUsers()),
        setSearchedUsers: (event) => dispatch(actions.setSearchedUsers(event)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(CardListing));