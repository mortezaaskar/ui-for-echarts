/**
 * 根据源数据用于生成echarts option json数据
 * Created by liekkas on 16/1/25.
 */
import _ from 'lodash';

function textStyle(color = '#fff', fontSize = '12', fontStyle = 'normal', fontWeight = 'normal', fontFamily = 'sans-serief') {
  return { color, fontSize, fontStyle, fontWeight, fontFamily };
}

function title(obj) {
  return {
    text: obj.title || '',
    subtext: obj.subTitle || '',
  }
}

/**
 * 线/柱图
 * @param obj
 * @param type
 */
function generateLineBarOption(obj, type) {
  const labels = _.map(obj.data, 'label');
  const series = [];
  _.forEach(obj.legend, function (item) {
    const datas = _.map(obj.data, item);
    series.push({
      name: item,
      type,
      data: datas,
    })
  });

  return {
    title: title(obj),
    legend: {data: obj.legend},
    tooltip: {
      formatter: (item) => item.name + '-' + item.seriesName + ' : ' + (item.value || 0) + obj.unit,
    },
    xAxis: {
      data: labels,
    },
    yAxis: {
      axisLabel: {
        formatter: '{value}' + obj.unit,
      }
    },
    series,
  }
}
/**
 * 饼图
 * @param obj
 * @param type
 */
function generatePieOption(obj, type) {
  const legend = _.map(obj.data, 'name');

  return {
    title: title(obj),
    legend: {data: legend},
    series: {
      name: obj.category,
      type,
      data: obj.data,
    },
  }
}

/**
 * 根据后台传过来的json对象生成echarts适用的对象
 * 注意:每个echarts组件都有一套示例数据,采用本地模式时就只呈现示例数据,如果是远程模式,则用远程的数据替换掉本地模式的数据
 * 但是外观之类的继续沿用本地模式的设置.
 */
export function generateOption(obj, type) {
  switch (type) {
    case 'bar':
    case 'line':
      return generateLineBarOption(obj,type);
    case 'pie':
      return generatePieOption(obj,type);
    default:
      return {};
  }
}
