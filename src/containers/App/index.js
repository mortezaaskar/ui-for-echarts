/**
 * Created by liekkas on 16/2/22.
 */
import React, { PropTypes } from 'react'
import { Header, Footer } from '../../components'
import { connect } from 'react-redux'
import SnowStorm from 'react-snowstorm'

//<Footer text="@2016 All Rights Reserved 中国电信集团公司 版权所有"/>
//<SnowStorm />

const App = React.createClass({

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Header route={this.props.route}/>
        <div style={{width: '100%', height: '100%',paddingTop: '50px'}}>
          {this.props.children}
        </div>
        <Footer text="@2016 All Rights Reserved 北京神州泰岳UI设计部 版权所有"/>
      </div>
    )
  }
})

function select(state) {
  return {
    route: state.getIn(['global', 'route']),
  };
}

export default connect(select)(App)
