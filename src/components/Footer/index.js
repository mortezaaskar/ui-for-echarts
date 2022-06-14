/**
 * Created by liekkas on 16/2/26.
 */
import React, { PropTypes } from 'react'
import style from './styles.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'bar',
    }
  }

  render() {
    const { text } = this.props
    return (
      <div className={style.root}>
        {text}
      </div>
    )
  }
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}
Footer.defaultProps = {
  text: 'bar',
}

export default Footer
