/**
 * Created by liekkas on 16/2/19.
 */
import React, { PropTypes } from 'react'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div>
        {foo}
      </div>
    )
  }
}

About.propTypes = {
  foo: PropTypes.string.isRequired,
}
About.defaultProps = {
  foo: 'About',
}

export default About
