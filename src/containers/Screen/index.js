/**
 * Created by liekkas on 16/2/26.
 */
import React, { PropTypes } from 'react'
import { SideNav } from '../../components'
import style from './style.scss'
import _ from 'lodash'
import fetch from 'isomorphic-fetch';
import { Loader } from 'react-loaders';
import { LOADING_STYLE, REST_API_BASE_URL } from '../../config';

class Screen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    const bind = this
    this.setState({loading: true})
    fetch(REST_API_BASE_URL + '/screen')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        bind.setState({loading: false,datas: json,images: json[0].images})
      }).catch(function(ex) {
        console.log('parsing failed', ex);
      });
  }

  onProjectChanged(e) {
    console.log(e)
    const { datas } = this.state
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].name === e) {
        this.setState({ images: datas[i].images })
        break
      }
    }
  }

  render() {
    const { loading, datas, images } = this.state

    return (
      <div className={style.root}>
        {
          loading
            ? <Loader type={LOADING_STYLE} active={true} />
            : <div className={style.container}>
                <SideNav datas={datas} onChanged={(e) => this.onProjectChanged(e)}/>
                <div className={style.right}>
                  {
                    images.map(({name,url},index) =>
                      <div key={index} className={style.img} >
                        <img src={url} alt={url} onClick={() => window.open(url)} width="100%" height="100%"/>
                        <div>{name}</div>
                      </div>
                    )
                  }
                </div>
              </div>
        }
      </div>
    )
  }
}

export default Screen
