import _ from 'lodash'

//-------------------- 设置组件初始化数据 --------------------
export function getInitOption(type) {
  switch (type) {
    case 'bar':
    case 'line':
      return getInitLineBarChart(type)
    case 'pie':
      return getInitPieChart()
    case 'scatter':
      return getInitScatterChart()
    case 'map':
      return getInitMapChart()
    case 'gauge':
      return getInitGaugeChart()
    case 'parallel':
      return getInitParallelChart()
    case 'heatmap':
      return getInitHeatChart()
    default:
      return getInitPieChart()
  }
}

//柱图/线图
function getInitLineBarChart(type) {
  return {
//    backgroundColor: '#333333',
    title: {
      text: '某指标一周情况',
      x:'center',
    },
    tooltip: {
      formatter: (item) => item.name + item.seriesName + ':' + item.value + '%',
    },
    legend: {
      top: 'bottom',
      data: ['收视率'],
    },
    grid: {
      //height: '60%',
      //width: '80%',
      //y: 50,
      left: '15%',
      //right: '10%',
    },
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      axisLabel: {
        formatter: '{value}%'
      },
    },
    series: [{
      name: '收视率',
      type,
      data: [1.6, 1.5, 1.3, 1.5, 1.2, 0.8, 1.8]
    }]
  }
}
//饼图/环图
function getInitPieChart() {
  return {
//    backgroundColor: '#333333',
    title : {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
          {value:335, name:'直接访问'},
          {value:310, name:'邮件营销'},
          {value:234, name:'联盟广告'},
          {value:135, name:'视频广告'},
          {value:1548, name:'搜索引擎'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}

const dataAll = [
  [
    [10.0, 8.04],
    [8.0, 6.95],
    [13.0, 7.58],
    [9.0, 8.81],
    [11.0, 8.33],
    [14.0, 9.96],
    [6.0, 7.24],
    [4.0, 4.26],
    [12.0, 10.84],
    [7.0, 4.82],
    [5.0, 5.68]
  ]
];

const markLineOpt = {
  animation: false,
  label: {
    normal: {
      formatter: 'y = 0.5 * x + 3',
      textStyle: {
        align: 'right'
      }
    }
  },
  lineStyle: {
    normal: {
      type: 'solid'
    }
  },
  data: [[{
    coord: [0, 3],
    symbol: 'none'
  }, {
    coord: [20, 13],
    symbol: 'none'
  }]]
};

//散点图
function getInitScatterChart() {
  return {
    title: {
      text: '某种关系呈现',
      x: 'center',
      y: 0
    },
    grid: {

    },
    tooltip: {
      //formatter: '{a} - {b} 时长: {c}'
    },
    xAxis: [
      {gridIndex: 0, min: 0, max: 20}
    ],
    yAxis: [
      {gridIndex: 0, min: 0, max: 15}
    ],
    series: [
      {
        name: '年龄',
        type: 'scatter',
        xAxisIndex: [0],
        yAxisIndex: [0],
        data: dataAll[0],
        markLine: markLineOpt
      }
    ]
  }
}

//仪表盘
function getInitGaugeChart() {
  return {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}%"
    },
    series : [
      {
        name:'业务指标',
        type:'gauge',
        detail : {formatter:'{value}%'},
        data:[{value: 50, name: '完成率'}]
      }
    ]
  }
}

//地图
function getInitMapChart() {
  return {
    title : {
      text: '全国故障投诉情况',
      subtext: '2016年1月18号',
      left: 'center'
    },
    tooltip : {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data:['白天','晚上']
    },
    visualMap: {
      min: 0,
      max: 2500,
      left: 'left',
      top: 'bottom',
      text:['高','低'],           // 文本，默认为数值文本
      calculable : true
    },
    series : [
      {
        name: '白天',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle:{
          normal:{label:{show:true}},
          emphasis:{label:{show:true}}
        },
        data:[
          {name: '北京',value: Math.round(Math.random() * 1000)},
          {name: '天津',value: Math.round(Math.random() * 1000)},
          {name: '上海',value: Math.round(Math.random() * 1000)},
          {name: '重庆',value: Math.round(Math.random() * 1000)},
          {name: '河北',value: Math.round(Math.random() * 1000)},
          {name: '河南',value: Math.round(Math.random() * 1000)},
          {name: '云南省',value: Math.round(Math.random() * 1000)},
          {name: '辽宁',value: Math.round(Math.random() * 1000)},
          {name: '黑龙江',value: Math.round(Math.random() * 1000)},
          {name: '湖南',value: Math.round(Math.random() * 1000)},
          {name: '安徽',value: Math.round(Math.random() * 1000)},
          {name: '山东',value: Math.round(Math.random() * 1000)},
          {name: '新疆',value: Math.round(Math.random() * 1000)},
          {name: '江苏',value: Math.round(Math.random() * 1000)},
          {name: '浙江',value: Math.round(Math.random() * 1000)},
          {name: '江西',value: Math.round(Math.random() * 1000)},
          {name: '湖北',value: Math.round(Math.random() * 1000)},
          {name: '广西',value: Math.round(Math.random() * 1000)},
          {name: '甘肃',value: Math.round(Math.random() * 1000)},
          {name: '山西',value: Math.round(Math.random() * 1000)},
          {name: '内蒙古',value: Math.round(Math.random() * 1000)},
          {name: '陕西',value: Math.round(Math.random() * 1000)},
          {name: '吉林',value: Math.round(Math.random() * 1000)},
          {name: '福建',value: Math.round(Math.random() * 1000)},
          {name: '贵州',value: Math.round(Math.random() * 1000)},
          {name: '广东',value: Math.round(Math.random() * 1000)},
          {name: '青海',value: Math.round(Math.random() * 1000)},
          {name: '西藏',value: Math.round(Math.random() * 1000)},
          {name: '四川',value: Math.round(Math.random() * 1000)},
          {name: '宁夏',value: Math.round(Math.random() * 1000)},
          {name: '海南',value: Math.round(Math.random() * 1000)},
          {name: '台湾',value: Math.round(Math.random() * 1000)},
          {name: '香港',value: Math.round(Math.random() * 1000)},
          {name: '澳门',value: Math.round(Math.random() * 1000)}
        ]
      },
      {
        name: '晚上',
        type: 'map',
        mapType: 'china',
        itemStyle:{
          normal:{label:{show:true}},
          emphasis:{label:{show:true}}
        },
        data:[
          {name: '北京',value: Math.round(Math.random() * 1000)},
          {name: '天津',value: Math.round(Math.random() * 1000)},
          {name: '上海',value: Math.round(Math.random() * 1000)},
          {name: '重庆',value: Math.round(Math.random() * 1000)},
          {name: '河北',value: Math.round(Math.random() * 1000)},
          {name: '安徽',value: Math.round(Math.random() * 1000)},
          {name: '新疆',value: Math.round(Math.random() * 1000)},
          {name: '浙江',value: Math.round(Math.random() * 1000)},
          {name: '江西',value: Math.round(Math.random() * 1000)},
          {name: '山西',value: Math.round(Math.random() * 1000)},
          {name: '内蒙古',value: Math.round(Math.random() * 1000)},
          {name: '吉林',value: Math.round(Math.random() * 1000)},
          {name: '福建',value: Math.round(Math.random() * 1000)},
          {name: '广东',value: Math.round(Math.random() * 1000)},
          {name: '西藏',value: Math.round(Math.random() * 1000)},
          {name: '四川',value: Math.round(Math.random() * 1000)},
          {name: '宁夏',value: Math.round(Math.random() * 1000)},
          {name: '香港',value: Math.round(Math.random() * 1000)},
          {name: '澳门',value: Math.round(Math.random() * 1000)}
        ]
      }
    ]
  }
}

const data1 = [
  ['1月18号',0.32,0.49,2000,3,"良"],
  ['1月19号',0.25,0.31,1800,2,"良"],
  ['1月20号',0.56,0.72,4200,5,"优"],
  ['1月21号',0.33,0.43,2100,3,"良"],
  ['1月22号',0.42,0.56,3200,4,"良"],
  ['1月23号',0.82,1.28,8600,8,"优"],
  ['1月24号',0.74,1.32,7500,7,"优"],
];

const data2 = [
  ['1月18号',0.34,0.36,3000,3,"良"],
  ['1月19号',0.72,0.70,7800,7,"优"],
  ['1月20号',0.36,0.45,4200,3,"良"],
  ['1月21号',0.63,0.78,6800,6,"优"],
  ['1月22号',0.32,0.42,3300,3,"良"],
  ['1月23号',0.90,1.56,10000,9,"优"],
  ['1月24号',0.52,0.82,7500,5,"优"],
];

const schema = [
  {name: 'date', index: 0, text: '日期'},
  {name: '52', index: 1, text: '52城收视率'},
  {name: 'all', index: 1, text: '全国网收视率'},
  {name: 'weibo', index: 2, text: '微博热度'},
  {name: 'baidu', index: 3, text: '百度指数'},
  {name: '等级', index: 7, text: '等级'}
];

const lineStyle = {
  normal: {
    width: 1,
    opacity: 0.5
  }
};

function getInitParallelChart() {
  return {
    title: {
      text: '1月份第3周卫视对比情况',
      left: 'center',
      padding: 8,
    },
    legend: {
      bottom: 30,
      data: ['湖南卫视', '浙江卫视'],
      itemGap: 20,
      textStyle: {
        color: '#fff',
        fontSize: 14
      }
    },
    tooltip: {
      padding: 10,
      backgroundColor: '#222',
      borderColor: '#777',
      borderWidth: 1,
      formatter (obj) {
        var value = obj[0].value;
        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
          + obj[0].seriesName + ' ' + value[0] + '日期：'
          + value[5]
          + '</div>'
          + schema[1].text + '：' + value[1] + '<br>'
          + schema[2].text + '：' + value[2] + '<br>'
          + schema[3].text + '：' + value[3] + '<br>'
          + schema[4].text + '：' + value[4] + '<br>'
          ;
      }
    },
    // dataZoom: {
    //     show: true,
    //     orient: 'vertical',
    //     parallelAxisIndex: [0]
    // },
    parallelAxis: [
      {dim: 0, name: schema[0].text, inverse: true, type: 'category', data: ['1月18号', '1月19号', '1月20号', '1月21号', '1月22号', '1月23号', '1月24号'], nameLocation: 'start'},
      {dim: 1, name: schema[1].text},
      {dim: 2, name: schema[2].text},
      {dim: 3, name: schema[3].text},
      {dim: 4, name: schema[4].text},
      {dim: 5, name: schema[5].text,
        type: 'category', data: ['良', '优']}
    ],
    //visualMap: {
    //  show: true,
    //  min: 0,
    //  max: 5,
    //  dimension: 2,
    //  inRange: {
    //    color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
    //    // colorAlpha: [0, 1]
    //  }
    //},
    parallel: {
      left: '8%',
      right: '8%',
      top: 80,
      bottom: 80,
      parallelAxisDefault: {
        type: 'value',
        name: '52',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
          color: '#fff',
          fontSize: 12
        },
        axisLine: {
          lineStyle: {
            color: '#aaa'
          }
        },
        axisTick: {
          lineStyle: {
            color: '#777'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      }
    },
    series: [
      {
        name: '湖南卫视',
        type: 'parallel',
        lineStyle,
        data: data1
      },
      {
        name: '浙江卫视',
        type: 'parallel',
        lineStyle,
        data: data2
      },
    ]
  }
}

const tvs = ['湖南卫视', '浙江卫视', '江苏卫视',
  '东方卫视', '北京卫视', '山东卫视','安徽卫视'].reverse();

const days = [];

for (let i = 1; i <= 31; i++) {
  days.push(i + '号');
}

const data = [];
_.forEach(tvs, function (item, index) {
  for (let i = 0; i < 31; i++) {
    data.push([i, index, _.random(1,10)] || '-');
  }
});

function format() {
  return 'bb';
};

function getInitHeatChart() {
  return {
    title: {
      text: '2016年1月份几大卫视热度情况',
      left: 'center',
      padding: 12,
    },
    tooltip: {
      trigger: 'value',
      position: 'top',
      formatter: (item) => item.name + item.seriesName + ':' + item.value[2] + '级',
    },
    animation: false,
    grid: {
      height: '60%',
      width: '80%',
      y: 50,
      left: '14%',
      //right: '10%',
    },
    xAxis: {
      type: 'category',
      data: days
    },
    yAxis: {
      type: 'category',
      data: tvs
    },
    visualMap: {
      min: 1,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10
    },
    series: [{
      name: '收视热度',
      type: 'heatmap',
      data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }
}
