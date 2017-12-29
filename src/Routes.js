// Routes.js
// Yuan Wang

// ============== EXTERNAL DEPENDENCIES ==============

import React from 'react';
import autoBind from 'react-autobind';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

// ============== CUSTOM MODULES ==============

import HomePage from './pages/HomePage.js'
import NotFoundPage from './pages/NotFoundPage.js'

class Routes extends React.Component {
	constructor(props) {
		super(props)
		autoBind(this)

		this.state = {
			user: null,
			error: null
	    }
	}

	render() {

		return (
			<Router {...this.props}>
				<Switch>
					<Route path="/404" component={NotFoundPage} />
					<Redirect exact from="/" to='/home' />
				    <Route path="/home/" 			component={HomePage} />
					<Redirect from="*" to='/404' />
				</Switch>
			</Router>
		)
	}
}


export default Routes;