/**
 * Refactored Home component
 * - Modernized React imports and PropTypes
 * - Removed lodash dependency
 * - Avoided mutating arrays (no reverse side-effects)
 * - Used clearer variable names and arrow functions
 * - Small robustness improvements in tooltip formatter
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ECharts } from '../../components'
import style from './style.scss'
import robot from './projector_robot.png'

// Provinces and demo data
const PROVINCES = ['河北','河南','安徽','江苏','山东','湖北','湖南']
const data = PROVINCES.map(name => ({ name, value: Math.floor(Math.random() * 200) + 20 }))

const GEO_COORD_MAP = {
  河北: [114.48, 38.03],
  河南: [113.65, 34.76],
  安徽: [117.27, 31.86],
  江苏: [118.88, 33.04],
  山东: [117, 36.65],
  湖北: [114.31, 30.52],
  湖南: [113, 28.21],
}

const convertData = (list) => list
  .map(item => {
    const geo = GEO_COORD_MAP[item.name]
    return geo ? { name: item.name, value: geo.concat(item.value) } : null
  })
  .filter(Boolean)

const mapOption = {
  title: {
    text: '中信国安广视全国电视用户数据资产情况',
    left: 'center',
    top: 50,
    textStyle: { color: '#fff' },
  },
  textStyle: { color: '#fff' },
  tooltip: {
    trigger: 'item',
    formatter: param => {
      // param.value can be a number or an array (for scatter)
      const rawValue = Array.isArray(param.value) ? param.value[param.value.length - 1] : param.value
      const valueText = isNaN(rawValue) ? '无数据' : `${rawValue}万`
      return `${param.seriesName || ''}<br />${param.name} : ${valueText}`
    },
  },
  legend: {
    orient: 'vertical',
    y: 'top',
    x: 'right',
    data: ['pm2.5'],
    textStyle: { color: '#fff' },
  },
  geo: {
    map: 'china',
    label: { emphasis: { show: false } },
    roam: false,
    itemStyle: {
      normal: { areaColor: '#ffe57f', borderColor: '#ffffff' },
      emphasis: { areaColor: '#2a333d' },
    },
  },
  series: [
    {
      name: '用户覆盖',
      type: 'map',
      mapType: 'china',
      label: { normal: { show: true }, emphasis: { show: true } },
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#ffea00',
          borderColor: 'rgba(0, 0, 0, 0.6)',
          shadowColor: 'rgba(255, 255, 0, 1)',
          shadowBlur: 10,
          shadowOffsetX: 10,
          shadowOffsetY: 10,
          opacity: 0.8,
        },
        emphasis: { areaColor: '#ffab00' },
      },
      data,
    },
  ],
}

const pieOption = {
  color: ['#dd8668', '#91c7ae'],
  title: { show: false, text: 'Customized Pie', left: 'center', top: 20, textStyle: { color: '#ccc' } },
  tooltip: { trigger: 'item', formatter: "{a} <br/>{b} : {c} ({d}%)" },
  visualMap: { show: false, min: 80, max: 600, inRange: { colorLightness: [0, 1] } },
  series: [
    {
      name: '用户数',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 500, name: '湖南' },
        { value: 150, name: '湖北' },
        { value: 120, name: '河南' },
        { value: 235, name: '河北' },
        { value: 400, name: '江苏' },
        { value: 234, name: '山东' },
        { value: 200, name: '安徽' },
      ].sort((a, b) => a.value - b.value),
      roseType: 'angle',
      label: { normal: { textStyle: { color: 'rgba(255, 255, 255, 0.3)' } } },
      labelLine: {
        normal: {
          lineStyle: { color: 'rgba(255, 255, 255, 0.3)' },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
      },
      itemStyle: { normal: { color: '#c23531', shadowBlur: 200, shadowColor: 'rgba(0, 0, 0, 0.5)' } },
    },
  ],
}

// Bar chart data generation without mutating the original PROVINCES
const reversedProvinces = [...PROVINCES].reverse()
const d1 = [134, 120, 110, 90, 70, 60, 50]
const d2 = [134, 120, 110, 90, 70, 60, 50]
const types = ['有限电视用户数', '数字用户数']

const barData = types.map((type, idx) => ({
  name: type,
  type: 'bar',
  stack: '总量',
  itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
  barWidth: 20,
  barGap: '5%',
  barCategoryGap: '5%',
  data: (idx === 0 ? d1 : d2).map((v, i) => d1[i]),
}))

const barOption = {
  color: ['#c23531', '#40c4ff'],
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: { data: types, y: 'bottom', textStyle: { color: '#fff' } },
  grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
  xAxis: [
    {
      type: 'value',
      axisLine: { show: false, lineStyle: { color: 'rgba(255,255,255,0.8)' } },
      axisTick: { show: false },
      axisLabel: { show: false, textStyle: { color: '#314656' } },
      splitLine: { show: false },
    },
  ],
  yAxis: [
    {
      type: 'category',
      data: reversedProvinces,
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.8)' } },
      axisTick: { lineStyle: { color: 'rgba(255,255,255,0.8)' } },
      axisLabel: { textStyle: { color: 'rgba(255,255,255,0.8)' } },
      splitLine: { show: false },
    },
  ],
  series: barData,
}

class Home extends Component {
  static propTypes = {
    foo: PropTypes.string.isRequired,
    // history may be provided by react-router; keep optional
    history: PropTypes.object,
  }

  static defaultProps = {
    foo: 'Home',
  }

  // kept for potential future click handling
  onMapClick = (e) => {
    // If react-router history is available, navigate to tvOverview
    if (this.props.history && typeof this.props.history.replace === 'function') {
      this.props.history.replace('/tvOverview')
    }
    // otherwise no-op; avoid throwing errors
  }

  render() {
    return (
      <div className={style.root}>
        <img src={robot} className={style.robot} alt="robot" />

        <div className={style.bar}>
          <ECharts option={barOption} />
        </div>
      </div>
    )
  }
}

export default Home
