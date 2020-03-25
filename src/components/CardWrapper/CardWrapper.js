import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Card from "../Card/Card";
import Input from "../UI/Input/Input";

class CardWrapper extends Component {
    state = {
        input: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Search By Name'
                },
                value: ''
            }
        }
    }
    constructor(props) {
        super(props);
    }
    
    render () {
        let cards = this.props.users ? this.props.users.map(user => {
            return <Card user={user} />
        }) : null;

        let searchInput = <Input elementType={this.state.input.name.elementType} 
        elementConfig={this.state.input.name.elementConfig} value={this.state.input.name.value} 
        changed={this.props.inputChangedHandler} label="Search Name"/>
    
        return (
            <Aux>
                {searchInput}
                {cards}
            </Aux>
        );
    }
}

export default withErrorHandler(CardWrapper);