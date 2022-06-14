/**
 * Created by liekkas on 16/2/22.
 */
import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import style from './style.scss'
import dsplogo from './logo.png'

const datas = [
//  { name: '首页', key: 'home' },
  { name: 'PC端', key: 'home' },
  { name: '手机端', key: 'mobile' },
  { name: '大屏', key: 'screen' },
  { name: '素材', key: 'asset' },
]

class Header extends React.Component {
  render() {
    return (
      <div className={style.root}>
        <img src={dsplogo} />
        <ui className={style.menu}>
          {
            datas.map(({name, key}, index) =>
              <li key={index} className={ this.props.route.indexOf(key) > -1 ? style.active : null }>
                {
                  key === 'home'
                  ? <IndexLink to="/">{name}</IndexLink>
                  : <Link to={'/' + key}>{name}</Link>
                }
              </li>
            )
          }
        </ui>
      </div>
    )
  }
}

Header.propTypes = {
  route: PropTypes.string.isRequired,
}

export default Header
