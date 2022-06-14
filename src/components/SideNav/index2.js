/**
 * Created by liekkas on 16/2/23.
 */
import React, { PropTypes } from 'react'
import style from './style.scss'
import { Link } from 'react-router'
import { Accordion, AccordionItem } from 'react-sanfona'
import '../../../vendors/react-sanfona.css'

class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: props.datas[0].projects[0].name
    }
  }

  onChanged(project) {
    if (project !== this.state.project) {
      this.props.onChanged(project)
      this.setState({project})
    }
  }

  render() {
    const { datas } = this.props
    const { project } = this.state

    return (
      <div className={style.root}>
        <Accordion>
          {
            datas.map(({kind, projects}, i) =>
              <AccordionItem title={kind} key={i}>
                <ui className={style.menu}>
                  {
                    projects.map(({name, key}, index) =>
                      <li key={index} className={ project === name ? style.active : null }>
                        {
                          project === name
                            ? <span className="zmdi zmdi-arrow-right zmdi-hc-lg"
                                    style={{
                                      position: 'absolute',
                                      marginLeft: '6px',
                                      marginTop: '11px',
                                    }}/>
                            : null
                        }
                        <a onClick={ () => this.onChanged(name)}>&nbsp;&nbsp;{name}</a>
                      </li>
                    )
                  }
                </ui>
              </AccordionItem>
            )
          }
        </Accordion>
      </div>
    )
  }
}

SideNav.propTypes = {
  datas: PropTypes.array.isRequired,
  onChanged: PropTypes.func.isRequired,
}

export default SideNav
