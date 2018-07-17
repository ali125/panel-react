import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {get_user} from './actions';
import Dashboard from './components/pages/Dashboard';

class RouterComponent extends Component {
    render() {
        this.props.get_user();
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {};
}

export default connect(mapStateToProps, {get_user})(RouterComponent);