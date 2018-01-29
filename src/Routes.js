// Routes.js
// Yuan Wang

// ============== EXTERNAL DEPENDENCIES ==============

import React from 'react';
import autoBind from 'react-autobind';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

// ============== CUSTOM MODULES ==============

import HomePage from './pages/HomePage.js'
import NotFoundPage from './pages/NotFoundPage.js'
import TeamPage from './pages/TeamPage.js'
import AccessDeniedPage from './pages/AccessDeniedPage.js'
import CareersPage from './pages/CareersPage.js'
import ContactPage from './pages/ContactPage.js'
import SponsorPage from './pages/SponsorPage.js'
import FisheriesPage from './pages/FisheriesPage.js'
import MissionPage from './pages/MissionPage.js'
import ComingSoonPage from './pages/ComingSoonPage.js'

let __DEV__ = true

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

    if (__DEV__) {
      return (
        <Router {...this.props}>
          <Switch>
            <Route path="/404" component={NotFoundPage} />
            <Redirect exact from="/" to='/home' />
            <Route path="/home/"            component={HomePage} />
            <Route path="/team/"            component={ComingSoonPage} />
            <Route path="/research/"            component={ComingSoonPage} />
            <Route path="/careers/"            component={ComingSoonPage} />
            <Route path="/contact/"            component={ContactPage} />
            <Route path="/sponsor/"            component={ComingSoonPage} />
            <Route path="/mission/"            component={ComingSoonPage} />
            <Route path="/fisheries/"            component={ComingSoonPage} />

            <Redirect from="*" to='/404' />
          </Switch>
        </Router>


      )
    }

    return (
      <Router {...this.props}>
        <Switch>
          <Route path="/404" component={NotFoundPage} />
          <Redirect exact from="/" to='/home' />
          <Route path="/home/"            component={HomePage} />
          <Route path="/team/"            component={TeamPage} />
          <Route path="/research/"            component={AccessDeniedPage} />
          <Route path="/careers/"            component={CareersPage} />
          <Route path="/contact/"            component={ContactPage} />
          <Route path="/sponsor/"            component={SponsorPage} />
          <Route path="/mission/"            component={MissionPage} />
          <Route path="/fisheries/"            component={FisheriesPage} />

          <Redirect from="*" to='/404' />
        </Switch>
      </Router>
    )
  }
}


export default Routes;