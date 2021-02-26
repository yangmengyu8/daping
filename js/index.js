
// 趋势图
// function workNum () {
//   const data1 = [320, 332, 301, 334];
//   const data2 = [220, 182, 191, 234];
//   const data3 = [150, 232, 201, 154];
//   // 1. 实例化对象
//   const myChart = echarts.init(document.getElementById('bar'));
//   // 2.指定配置
//   const option = {
//     color: ['#79E8EF', '#F9691B', '#5D9AE2'],
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       }
//     },
//     legend: {
//       orient: 'vertical',
//       left: 'right',

//     },
//     grid: {
//       left: '0%',
//       right: '0%',
//       bottom: '2%',
//       top: '10%',
//       containLabel: true
//     },
//     calculable: true,
//     xAxis: [
//       {
//         type: 'category',
//         data: ['第一季度', '第二季度', '第三季度', '第四季度'],
//         axisLine: {
//           show: true, // 去除轴线
//           lineStyle: {
//             color: '#19B7F5'
//           }
//         },
//         axisTick: {
//           alignWithLabel: false,
//           show: false
//         },
//         splitLine: {
//           show: false
//         }
//       }
//     ],
//     yAxis: [
//       {
//         type: 'value',
//         axisLine: {
//           show: true, // 控制轴线
//           lineStyle: {
//             color: '#19B7F5'
//           }
//         },
//         axisTick: {
//           show: false // 控制刻度线
//         },
//         splitLine: {
//           show: false // 控制平衡线
//         },
//       },
//     ],
//     series: [
//       {
//         name: '党务',
//         type: 'bar',
//         barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
//         barCategoryGap: '50%',/*多个并排柱子设置柱子之间的间距*/
//         data: data1
//       },
//       {
//         name: '村务',
//         type: 'bar',
//         barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
//         barCategoryGap: '50%',/*多个并排柱子设置柱子之间的间距*/
//         data: data2
//       },
//       {
//         name: '财务',
//         type: 'bar',
//         barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
//         barCategoryGap: '50%',/*多个并排柱子设置柱子之间的间距*/
//         data: data3
//       },
//     ]
//   };
//   // 3. 把配置给实例对象
//   myChart.setOption(option);
//   // 4. 让图表跟随屏幕自动的去适应
//   window.addEventListener("resize", function () {
//     myChart.resize();
//   });
// }

// 3D柱状图
function workNum () {
  var city = ['呼图壁县', '玛纳斯县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒哈萨克自治州'];
  var event = ['支委会', '支部党员大会', '主题党日',
    '党课'];
  var data = [[0, 0, 5], [0, 1, 1], [0, 2, 8], [0, 3, 7], [0, 4, 6], [0, 5, 5], [0, 6, 10],
  [1, 0, 7], [1, 1, 2], [1, 2, 1], [1, 3, 2], [1, 4, 4], [1, 5, 5], [1, 6, 6],
  [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 5], [2, 4, 3], [2, 5, 4], [2, 6, 8],
  [3, 0, 7], [3, 1, 3], [3, 2, 1], [3, 3, 2], [3, 4, 3], [3, 5, 4], [3, 6, 5]];
  // 1. 实例化对象
  const myChart = echarts.init(document.getElementById('bar'));
  // 2.指定配置
  const option = {
    tooltip: {},
    legend: {
      data: ['支委会', '支部党员大会', '主题党日',
        '党课']
    },
    visualMap: {
      show: false,
      max: 20,
      inRange: {
        color: ['#313695', '#00b0f0', '#fee090', '#f20071']
        // color: ['#313695', '#00b0f0', '#fee090', '#f20071', '#da323a', '#e78e00', '#fee090']
      }
    },
    xAxis3D: {
      type: 'category',
      data: city
    },
    yAxis3D: {
      type: 'category',
      data: event
    },
    zAxis3D: {
      type: 'value'
    },
    grid3D: {
      top: -30,
      boxWidth: 200,
      boxDepth: 80,
      viewControl: {
        // projection: 'orthographic'
        //自动旋转
        autoRotate: true,
        beta: 10,

        //控制场景平移旋转
        // alpha: 10, 
        // minAlpha: 10,
        // maxAlpha: 10,
        // minBeta: 10,
        // maxBeta: 10
      },
      light: {
        main: {
          intensity: 1.2,
          //阴影
          // shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      }
    },
    series: [{
      name: '数据',
      type: 'bar3D',
      data: data.map(function (item) {
        return {
          value: [item[1], item[0], item[2]],
        }
      }),
      shading: 'lambert',

      label: {
        fontSize: 16,
        borderWidth: 1
      },

      emphasis: {
        label: {
          fontSize: 20,
          color: '#900',
          show: false
        },
        itemStyle: {
          color: '#900'
        }
      }
    }]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}



