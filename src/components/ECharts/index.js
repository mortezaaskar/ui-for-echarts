/**
 * Created by liekkas on 16/2/19.
 */
import React, { PropTypes } from 'react'
import echarts from 'echarts'
import { Loader } from 'react-loaders'
import { LOADING_STYLE, MAPDATA_API_BASE_URL } from '../../config'
import fetch from 'isomorphic-fetch'
import { generateOption } from './convertOptions'
import { getInitOption } from './initOptions'
import _ from 'lodash'
import china from './china.json'
import shallowEqual from 'react-pure-render/shallowEqual';

echarts.registerMap('china', china)

class ECharts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: _.uniqueId(new Date().getMilliseconds() + 'ECharts'),
      remoteLoading: false,
      remoteUrlChanged: false,
      option: {},
    }
  }

  componentWillMount() {
    this._getData(this, this.props)
  }

  componentDidMount() {
    const { id, option } = this.state
    const { config } = this.props
    const chart = echarts.init(document.getElementById(id))
    chart.on(config.eventType, config.eventHandler);
    chart.setOption(option)
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('>>> PBECharts:componentWillReceiveProps', this.props, nextProps, nextState);
    if (!_.isEqual(this.props.option, nextProps.option)) {
      this.setState({option: nextProps.option})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('>>> PBECharts:shouldComponentUpdate', this.props.theme, nextProps, nextState);
    return !_.isEqual(this.props.option, nextProps.option)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('>>> PBECharts:componentWillUpdate', nextProps, nextState);
    //this._getData(this, nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('>>> PBECharts:componentDidUpdate', this.state.option);
    const chart = echarts.init(document.getElementById(this.state.id));
    chart.setOption(this.state.option);
  }

  componentWillUnmount() {
    const chart = echarts.init(document.getElementById(this.state.id))
    chart.dispose()
  }

  _getData(bind, props) {
    const { config } = props

    if (this.props.hasOwnProperty('option')) {
      this.setState({ option: this.props.option })
      return
    }

    //根据type获取初始配置
    const initOption = getInitOption(config.type)
    //console.log('>>> PBECharts:_getData:', config)
    //local是同步获取,remote是通过远程api异步获取
    if (config.mode === 'remote') {
      this.setState({ remoteLoading: true })
      if (config.hasOwnProperty('remoteDataUrl')) {
        fetch(config.remoteDataUrl)
          .then(function (response) {
            return response.json()
          })
          .then(function (result) {
            const convert = _.merge(initOption, generateOption(result, config.type))
            //console.log('>>> PBECharts:fetch', result, convert)
            bind.setState({ option: convert, remoteLoading: false })
            return result
          })
          .catch(function (ex) {
            console.log(ex)
          })
      }
    } else {
      this.setState({
        option: config.hasOwnProperty('localData')
          ? _.merge(initOption, generateOption(config.localData, config.type))
          : initOption, remoteLoading: false
      })
    }
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>
        <div id={this.state.id} style={{ width: '100%', height: '100%' }} />
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          bottom: '100%',
          backgroundColor: 'rgba(33,33,33,0.4)',
          display: this.state.remoteLoading ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Loader type={LOADING_STYLE} active={true} />
        </div>
      </div>
    )
  }
}

/**
 * config包括:
 *   type: 图表类型
 *   mode: 数据来源模式 {local|remote} 本地还是远程
 *   localData: 直接传数据
 *   remoteUrl: 传数据REST接口进来
 *
 * option 如果直接设置Option则会覆盖上面的设置
 */
ECharts.propTypes = {
  config: PropTypes.object.isRequired,
  option: PropTypes.object,
}

const legend = [];
for (var ii = 1; ii <= 3; ii++) {
  legend.push('类别' + ii);
}

const data = [];
for (var i = 1; i <= 7; i++) {
  var obj = { label: i + '号' };
  for (var i2 = 0; i2 < 3; i2++) {
    obj[legend[i2]] = _.random(100);
  }
  data.push(obj);
}

ECharts.defaultProps = {
  config: {
    type: 'bar',
    mode: 'local',
    localData: {
      title: '图表标题',
      subTitle: '从1号到7号',
      legend,
      data,
      unit: '单位',
    }
  }
}

export default ECharts
