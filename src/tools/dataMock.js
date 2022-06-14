/**
 * Created by liekkas on 16/2/27.
 */
import _ from 'lodash'
import dateFormat from 'dateFormat'
import style from './style.scss'

export function mockData(type, unit, num = 10) {
  var base = +new Date(2015, 10, 20);
  var oneDay = 24 * 3600 * 1000;
  var date = [];

  var data = [_.random(150)];

  for (var i = 1; i < num; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
    data.push((_.random(1) - 0.4) * 20 + data[i - 1]);
  }

  const labels = [];
  const datas = [];
  for (var ii = 1; ii <= num; ii++) {
    labels.push('2015年' + ii + '月');
    datas.push(_.random(100));
  }

  return {
//    backgroundColor: 'rgba(0,0,0,0.5)',
//    textStyle: {
//      color: '#fff',
//    },
    title: {
      show: false,
      x: 'center',
      text: '用户数',
    },
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        animation: false
      }
    },
    legend: {
      top: 'bottom',
      data: ['意向']
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        dataView: {show: false, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      },
      iconStyle: {
        normal: {
//          color: '#ffffff',
          borderColor: '#fff',
        },
        emphasis: {
          borderColor: '#FFAA00',
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: date,
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
            color: '#fff',
          }
        },
        splitLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        max: 500,
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
            color: '#fff',
          }
        },
      }
    ],
//    dataZoom: {
//      type: 'inside',
//      start: 60,
//      end: 80
//    },
    series: [
      {
        name: '用户数',
        type: 'line',
//        smooth: true,
//        symbol: 'none',
//        stack: 'a',
        areaStyle: {
          normal: {}
        },
        data: data,
        markPoint : {
          data : [
            {type : 'max', name: '最大值'},
            {type : 'min', name: '最小值'}
          ]
        },
        markLine : {
          data : [
            {type : 'average', name: '平均值'}
          ],
//          lineStyle: {
//            normal: {
//              color: '#a2f78d'
//            }
//          }
        },
      }
    ]
  }
}

export function mockData2(type, unit, num = 10) {
  var base = +new Date(2015, 10, 20);
  var oneDay = 24 * 3600 * 1000;
  var date = [];

  var data = [100 + _.random(200)];
  var data1 = [_.random(100)];

  for (var i = 1; i < num; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
    data.push((_.random(1) - 0.4) * 20 + data[i - 1]);
    data1.push((_.random(1) - 0.4) * 20 + data1[i - 1]);
  }

  const labels = [];
  const datas = [];
  for (var ii = 1; ii <= num; ii++) {
    labels.push('2015年' + ii + '月');
    datas.push(_.random(100));
  }

  return {
//    backgroundColor: 'rgba(0,0,0,0.5)',
//    textStyle: {
//      color: '#fff',
//    },
    color: ['#c23531','#a2f78d'],
    title: {
      show: false,
      x: 'center',
      text: '用户数',
    },
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        animation: false
      },
    },
    legend: {
      top: 10,
      y: 'top',
      data: ['使用时长','户均使用时长'],
      textStyle: {
        color: '#fff'
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        dataView: {show: false, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      },
      iconStyle: {
        normal: {
//          color: '#ffffff',
          borderColor: '#fff',
        },
        emphasis: {
          borderColor: '#FFAA00',
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: date,
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
            color: '#fff',
          }
        },
        splitLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        max: 500,
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
            color: '#fff',
          }
        },
      }
    ],
//    dataZoom: {
//      type: 'inside',
//      start: 60,
//      end: 80
//    },
    series: [
      {
        name: '使用时长',
        type: 'line',
//        smooth: true,
//        symbol: 'none',
//        stack: 'a',
//        areaStyle: {
//          normal: {}
//        },
        data: data,
//        markPoint : {
//          data : [
//            {type : 'max', name: '最大值'},
//            {type : 'min', name: '最小值'}
//          ]
//        },
//        markLine : {
//          data : [
//            {type : 'average', name: '平均值'}
//          ]
//        },
      },
      {
        name: '户均使用时长',
        type: 'line',
//        smooth: true,
//        symbol: 'none',
//        stack: 'a',
//        areaStyle: {
//          normal: {}
//        },
        data: data1,
//        markPoint : {
//          data : [
//            {type : 'max', name: '最大值'},
//            {type : 'min', name: '最小值'}
//          ]
//        },
//        markLine : {
//          data : [
//            {type : 'average', name: '平均值'}
//          ]
//        },
      }
    ]
  }
}

export function mockData3(type, unit, num = 10) {
  var base = +new Date(2015, 10, 20);
  var oneDay = 24 * 3600 * 1000;
  var date = [];

  var data = [_.random(300)];
  var data1 = [_.random(150)];

  for (var i = 1; i < num; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
    data.push((_.random(1) - 0.4) * 20 + data[i - 1]);
    data1.push((_.random(1) - 0.4) * 20 + data1[i - 1]);
  }

  const labels = [];
  const datas = [];
  for (var ii = 1; ii <= num; ii++) {
    labels.push('2015年' + ii + '月');
    datas.push(_.random(100));
  }

  return {
//    backgroundColor: 'rgba(0,0,0,0.5)',
//    textStyle: {
//      color: '#fff',
//    },
    color: ['#c23531','#a2f78d'],
    title: {
      show: false,
      x: 'center',
      text: '用户数',
    },
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        type : 'shadow'
      }
    },
    legend: {
      top: 10,
      y: 'top',
      data: ['直播','点播'],
      textStyle: {
        color: '#fff'
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        dataView: {show: false, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      },
      iconStyle: {
        normal: {
//          color: '#ffffff',
          borderColor: '#fff',
        },
        emphasis: {
          borderColor: '#FFAA00',
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: date,
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
            color: '#fff',
          }
        },
        splitLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
//        max: 500,
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
            color: '#fff',
          }
        },
      }
    ],
//    dataZoom: {
//      type: 'inside',
//      start: 60,
//      end: 80
//    },
    series: [
      {
        name: '直播',
        type: 'bar',
//        smooth: true,
//        symbol: 'none',
//        stack: 'a',
//        areaStyle: {
//          normal: {}
//        },
        data: data,
//        markPoint : {
//          data : [
//            {type : 'max', name: '最大值'},
//            {type : 'min', name: '最小值'}
//          ]
//        },
//        markLine : {
//          data : [
//            {type : 'average', name: '平均值'}
//          ]
//        },
      },
      {
        name: '点播',
        type: 'bar',
//        smooth: true,
//        symbol: 'none',
//        stack: 'a',
//        areaStyle: {
//          normal: {}
//        },
        data: data1,
//        markPoint : {
//          data : [
//            {type : 'max', name: '最大值'},
//            {type : 'min', name: '最小值'}
//          ]
//        },
//        markLine : {
//          data : [
//            {type : 'average', name: '平均值'}
//          ]
//        },
      },
//      {
//        name:'使用时长',
//        type:'pie',
////        radius : [30, 110],
//        right : ['10%', 200],
//        roseType : 'area',
//        data:[
//          {value:12566, name:'直播 - 使用时长'},
//          {value:12002, name:'直播 - 户均使用时长'},
//          {value:8900, name:'点播 - 使用时长'},
//          {value:7800, name:'点播 - 户均使用时长'},
//        ]
//      }
    ]
  }
}
export function mockData4(type, unit, num = 10) {
  return {
    color: ['#c23531','#a2f78d'],
    title : {
      show: false,
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      orient: 'vertical',
      left: 'left',
      data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
      {
        name:'使用时长',
        type:'pie',
        radius : [0, '50%'],
        center : ['25%', 150],
//        roseType : 'area',
        data:[
          {value:12566, name:'直播（12566分钟）'},
          {value:8900, name:'点播（8900分钟）'},
        ]
      },
      {
        name:'户均使用时长',
        type:'pie',
        radius : [0, '50%'],
        center : ['75%', 150],
//        roseType : 'area',
        data:[
          {value:6800, name:'直播（680分钟）'},
          {value:5400, name:'点播（540分钟）'},
        ]
      }
    ]
  };
}

export function mockTableHeader(kpis) {
  let result = [{
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    className: style.header,
  }]
  for (let i = 0; i < kpis.length; i++) {
    result.push({
      title: kpis[i].label,
      dataIndex: kpis[i].value,
      key: kpis[i].value,
      className: style.header,
    })
  }
  return result
}

export function mockTable(kpis, num = 100) {
  let result = []
  for (let i = 0; i < num; i++) {
    let item = {date: '2016-02-27'}
    _.forEach(kpis, function (kpi) {
      if (kpi.label.indexOf('率') > -1) {
        item[kpi.value] = _.random(100) + '%'
      } else {
        item[kpi.value] = _.random(500)
      }
    })
    result.push(item)
  }
  return result
}
