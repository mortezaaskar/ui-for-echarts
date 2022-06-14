import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

export default class Root extends React.Component {
  get content () {
    return (
      <Router history={this.props.history}>
        {this.props.route}
      </Router>
    )
  }

  get devTools() {
    if (__DEV__) {
      const DevTools = require('./DevTools').default
      return <DevTools />
    } else {
      return null
    }
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div>
          {this.content}
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  route: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
