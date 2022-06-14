/**
 * Created by liekkas on 16/2/19.
 */
import React, { PropTypes } from 'react'
import { ECharts, Panel } from '../../components'
import style from './style.scss'
import _ from 'lodash'
import {browserHistory} from 'react-router';
import robot from './projector_robot.png'

let data = []
const provinces = ['河北','河南','安徽','江苏','山东','湖北','湖南']
_.forEach(provinces, function (province) {
  data.push({name: province, value: _.random(200) + 20})
})

var geoCoordMap = {
  '河北':[114.48,38.03],
  '河南':[113.65,34.76],
  '安徽':[117.27,31.86],
  '江苏':[118.88,33.04],
  '山东':[117,36.65],
  '湖北':[114.31,30.52],
  '湖南':[113,28.21],
};

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

const mapOption = {
  title: {
    text: '中信国安广视全国电视用户数据资产情况',
//    text: '中国电信全国4G用户数据资产情况',
//    subtext: 'data from PM25.in',
    left: 'center',
    top: 50,
    textStyle: {
      color: '#fff'
    }
  },
  textStyle: {
    color: '#fff'
  },
  tooltip : {
    trigger: 'item',
    formatter: (item) => item.seriesName + '<br />' + item.name + ':'
      + (isNaN(item.value) ? '无数据' : item.value + '万'),
  },
  legend: {
    orient: 'vertical',
    y: 'top',
    x:'right',
    data:['pm2.5'],
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    roam: false,
    itemStyle: {
      normal: {
        areaColor: '#ffe57f',
        borderColor: '#ffffff'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series : [
    {
      name: '用户覆盖',
      type: 'map',
      mapType: 'china',
      label: {
        normal: {
          show: true,
        },
        emphasis: {
          show: true
        }
      },
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
        emphasis: {
          areaColor: '#ffab00'
        }
      },
      data,
    },
//    {
//      name: '电视用户情况',
//      type: 'scatter',
//      coordinateSystem: 'geo',
//      data: convertData(data.sort(function (a, b) {
//        return b.value - a.value;
//      }).slice(0, 6)),
////      symbolSize: function (val) {
////        return val[2] / 10;
////      },
//
//      symbolSize: 12,
//      label: {
//        normal: {
//          show: false
//        },
//        emphasis: {
//          show: false
//        }
//      },
////      itemStyle: {
////        emphasis: {
////          borderColor: '#fff',
////          borderWidth: 1
////        }
////      }
//    }
  ]
}

const pieOption = {
//  backgroundColor: '#2c343c',
  color: ['#dd8668','#91c7ae'],

  title: {
    show: false,
    text: 'Customized Pie',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },

  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series : [
    {
      name:'用户数',
      type:'pie',
      radius : '55%',
      center: ['50%', '50%'],
      data:[
        {value:500, name:'湖南'},
        {value:150, name:'湖北'},
        {value:120, name:'河南'},
        {value:235, name:'河北'},
        {value:400, name:'江苏'},
        {value:234, name:'山东'},
        {value:200, name:'安徽'},
      ].sort(function(a, b) {
        return a.value - b.value
      }),
      roseType: 'angle',
      label: {
        normal: {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        }
      },
      itemStyle: {
        normal: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

let barData = []
const reProvinces = provinces.reverse()
const d1 = [134,120,110,90,70,60,50].reverse()
const d2 = [134,120,110,90,70,60,50]
const types = ['有限电视用户数','数字用户数']
for (let j = 0; j < types.length; j++) {
  let d = []
  for (let k = 0; k < reProvinces.length; k++) {
    d.push(d1[k])
  }

  barData.push({
    name: types[j],
    type:'bar',
    stack: '总量',
    itemStyle : { normal: {label : {show: true, position: 'insideRight'}} },
    barWidth: 20,
    barGap: '5%',
    barCategoryGap: '5%',
    data:d
  })
}

const barOption = {
  color: ['#c23531','#40c4ff'],
//  color: ['#ffc400','#14e715'],

//  color: ['#dd8668','#91c7ae'],
  tooltip : {
    trigger: 'axis',
//    formatter: "{a} <br/>{b} : {c} ({d}万)",
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data:['有限电视用户数','数字用户数'],
    y: 'bottom',
    textStyle: {
      color: '#fff'
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.8)',
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.8)',
        }
      },
      axisLabel: {
        show: false,
        textStyle: {
          color: '#314656',
        }
      },
      splitLine: {
        show: false,
      },
    }
  ],
  yAxis : [
    {
      type : 'category',
      data : provinces.reverse(),
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.8)',
        }
      },
      axisTick: {
        lineStyle: {
          color: 'rgba(255,255,255,0.8)',
        }
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,0.8)',
        }
      },
      splitLine: {
        show: false,
      },
    }
  ],
  series : barData
};

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapType: 'china',
    }
  }

  onMapClick(e) {
    console.log('>>> 我靠',e)
    this.props.history.replaceState(null, '/tvOverview');

//    browserHistory.push('/tvOverview');
  }

  render() {
    const { foo } = this.props
    return (
      <div className={style.root}>
        <img src={robot} className={style.robot}/>

        <div className={style.bar}>
          <ECharts option={barOption}/>
        </div>

      </div>
    )
  }
}

Home.propTypes = {
  foo: PropTypes.string.isRequired,
}
Home.defaultProps = {
  foo: 'Home',
}

export default Home
