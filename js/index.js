// 立即执行函数，防止变量污染 (function() {})();

// 趋势图
function workNum () {
  const data1 = [320, 332, 301, 334];
  const data2 = [220, 182, 191, 234];
  const data3 = [150, 232, 201, 154];
  // 1. 实例化对象
  const myChart = echarts.init(document.getElementById('bar'));
  // 2.指定配置
  const option = {
    color: ['#79E8EF', '#F9691B', '#5D9AE2'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      orient: 'vertical',
      left: 'right',

    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '2%',
      top: '10%',
      containLabel: true
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['第一季度', '第二季度', '第三季度', '第四季度'],
        axisLine: {
          show: true, // 去除轴线
          lineStyle: {
            color: '#19B7F5'
          }
        },
        axisTick: {
          alignWithLabel: false,
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: true, // 控制轴线
          lineStyle: {
            color: '#19B7F5'
          }
        },
        axisTick: {
          show: false // 控制刻度线
        },
        splitLine: {
          show: false // 控制平衡线
        },
      },
    ],
    series: [
      {
        name: '党务',
        type: 'bar',
        barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
        barCategoryGap: '50%',/*多个并排柱子设置柱子之间的间距*/
        data: data1
      },
      {
        name: '村务',
        type: 'bar',
        barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
        barCategoryGap: '50%',/*多个并排柱子设置柱子之间的间距*/
        data: data2
      },
      {
        name: '财务',
        type: 'bar',
        barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
        barCategoryGap: '50%',/*多个并排柱子设置柱子之间的间距*/
        data: data3
      },
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

// 3.主方法
// function workNum () {
//   const elId = 'bar'
//   const legends = ['第一季度', '第二季度', '第三季度', '第四季度'];
//   const hbData = [320, 332, 301, 334];
//   const meterData = [220, 182, 191, 234];
//   const phaseData = [150, 232, 201, 154];
//   // 绘制左侧面
//   const wid = 20;
//   const w1 = Math.sin(Math.PI / 6) * wid; //4
//   const w2 = Math.sin(Math.PI / 3) * wid; // 6.8
//   const snapHeight = wid / 4;
//   const CubeLeft = echarts.graphic.extendShape({
//     shape: {
//       x: 0,
//       y: 0
//     },
//     buildPath: function (ctx, shape) {
//       // 会canvas的应该都能看得懂，shape是从custom传入的
//       const xAxisPoint = shape.xAxisPoint
//       const c0 = [shape.x, shape.y - 2]
//       const c1 = [shape.x - w2, shape.y - w1 + snapHeight - 2]
//       const c2 = [shape.x - w2, xAxisPoint[1] - w1 + snapHeight - 2]
//       const c3 = [shape.x, xAxisPoint[1] - 2]
//       ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
//     }
//   })
//   // 绘制右侧面
//   const CubeRight = echarts.graphic.extendShape({
//     shape: {
//       x: 0,
//       y: 0
//     },
//     buildPath: function (ctx, shape) {
//       const xAxisPoint = shape.xAxisPoint
//       const c1 = [shape.x, shape.y - 2]
//       const c2 = [shape.x, xAxisPoint[1] - 2]
//       const c3 = [shape.x + w1, xAxisPoint[1] - w2 + snapHeight - 2]
//       const c4 = [shape.x + w1, shape.y - w2 + snapHeight - 2]
//       ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
//     }
//   })
//   // 绘制顶面
//   const CubeTop = echarts.graphic.extendShape({
//     shape: {
//       x: 0,
//       y: 0
//     },
//     buildPath: function (ctx, shape) {
//       const c1 = [shape.x, shape.y - 2]
//       const c2 = [shape.x + w1, shape.y - w2 + snapHeight - 2] //右点
//       const c3 = [shape.x - w2 + w1, shape.y - w1 - w2 + + snapHeight * 2 - 2]
//       const c4 = [shape.x - w2, shape.y - w1 + snapHeight - 2]
//       ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
//     }
//   })
//   // 注册三个面图形
//   echarts.graphic.registerShape('CubeLeft', CubeLeft)
//   echarts.graphic.registerShape('CubeRight', CubeRight)
//   echarts.graphic.registerShape('CubeTop', CubeTop)

//   let option = {
//     legend: {
//       data: ['户变关系识别完成度', '电表资产识别完成度', '电表相位识别完成度'],
//       selectedMode: false
//     },
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       },
//       formatter: function (params) {
//         let item = '';
//         item += params[0].name + '<br>'
//         $(params).each(function (idx, itm) {
//           item += itm.seriesName + ':' + itm.value + '<br>'
//         });
//         return item;
//       }
//     },
//     grid: {
//       left: '5%',
//       right: '5%',
//       top: '15%',
//       bottom: '10%',
//       containLabel: true
//     },
//     xAxis: {
//       type: 'category',
//       data: legends,
//       axisLine: {
//         show: true,
//         lineStyle: {
//           color: '#AAA'
//         }
//       },
//       axisTick: {
//         show: false,
//         length: 9,
//         alignWithLabel: true,
//         lineStyle: {
//           color: '#AAA'
//         }
//       },
//       axisLabel: {
//         fontSize: 20
//       }
//     },
//     yAxis: {
//       name: '识别完成度/%',
//       type: 'value',
//       nameTextStyle: {
//         color: '#707e98'
//       },
//       axisLine: {
//         show: true,
//         lineStyle: {
//           color: '#AAA'
//         }
//       },
//       axisLabel: {
//         color: '#AAA'
//       }
//     },
//     series: [{
//       name: "户变关系识别完成度",
//       type: 'custom',
//       renderItem: (params, api) => {
//         const location = api.coord([api.value(0), api.value(1)])
//         location[0] = location[0] + wid * (-2);
//         const xlocation = api.coord([api.value(0), 0]);
//         xlocation[0] = xlocation[0] + wid * (-2);
//         return {
//           type: 'group',
//           children: [{
//             type: 'CubeLeft',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#55B6F8'
//               },
//               {
//                 offset: 1,
//                 color: '#55B6F8'
//               }
//               ])
//             }
//           }, {
//             type: 'CubeRight',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#55B6F8'
//               },
//               {
//                 offset: 1,
//                 color: '#55B6F8'
//               }
//               ])
//             }
//           }, {
//             type: 'CubeTop',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#55B6F8'
//               },
//               {
//                 offset: 1,
//                 color: '#55B6F8'
//               }
//               ])
//             }
//           }]
//         }
//       },
//       color: '#55B6F8',
//       data: hbData
//     }, {
//       name: "电表资产识别完成度",
//       type: 'custom',
//       renderItem: (params, api) => {
//         const location = api.coord([api.value(0), api.value(1)]);
//         location[0] = location[0] + wid * 0;
//         const xlocation = api.coord([api.value(0), 0]);
//         xlocation[0] = xlocation[0] + wid * 0;
//         return {
//           type: 'group',
//           children: [{
//             type: 'CubeLeft',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#FB8C91'
//               },
//               {
//                 offset: 1,
//                 color: '#FB8C91'
//               }
//               ])
//             }
//           }, {
//             type: 'CubeRight',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#FB8C91'
//               },
//               {
//                 offset: 1,
//                 color: '#FB8C91'
//               }
//               ])
//             }
//           }, {
//             type: 'CubeTop',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#FB8C91'
//               },
//               {
//                 offset: 1,
//                 color: '#FB8C91'
//               }
//               ])
//             }
//           }]
//         }
//       },
//       color: '#FB8C91',
//       data: meterData
//     }, {
//       name: "电表相位识别完成度",
//       type: 'custom',
//       renderItem: (params, api) => {
//         const location = api.coord([api.value(0), api.value(1)]);
//         location[0] = location[0] + wid * 2;
//         const xlocation = api.coord([api.value(0), 0]);
//         xlocation[0] = xlocation[0] + wid * 2;
//         return {
//           type: 'group',
//           children: [{
//             type: 'CubeLeft',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#36D6D7'
//               },
//               {
//                 offset: 1,
//                 color: '#36D6D7'
//               }
//               ])
//             }
//           }, {
//             type: 'CubeRight',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#36D6D7'
//               },
//               {
//                 offset: 1,
//                 color: '#36D6D7'
//               }
//               ])
//             }
//           }, {
//             type: 'CubeTop',
//             shape: {
//               api,
//               xValue: api.value(0),
//               yValue: api.value(1),
//               x: location[0],
//               y: location[1],
//               xAxisPoint: xlocation
//             },
//             style: {
//               fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#36D6D7'
//               },
//               {
//                 offset: 1,
//                 color: '#36D6D7'
//               }
//               ])
//             }
//           }]
//         }
//       },
//       color: '#36D6D7',
//       data: phaseData
//     }]
//   }

//   _WOO.c.drawEchart(elId, option);
// }


