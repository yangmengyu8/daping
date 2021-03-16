//bar1柱状图
function keyData1 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar1'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {},
    grid: {
      top: "10%",
      left: "2%",
      right: "8%",
      bottom: "0%",
      // show: true, // 显示边框
      // borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      // type: 'value',
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        interval: 0,    //强制文字产生间隔
        rotate: 0,     //文字逆时针旋转45°
        textStyle: {    //文字样式
          color: "#2A9CC9",
          fontSize: 10,
          fontFamily: 'Microsoft YaHei'
        }
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        show: false
      },
      show: false
    },
    yAxis: {
      type: 'category',
      data: ["其他", "电话反应", "群众来访数", "街面巡逻数", "走访入户数"],
      axisLabel: {
        color: "#2A9CC9" // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      axisTick: {
        show: true // 去除刻度线
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#012f4a",// 分割线颜色
        }
      }
    },
    series: [{
      type: 'bar',
      //设置柱状图大小
      barWidth: 15,
      //设置柱状图渐变颜色
      itemStyle: {
        normal: {
          label: {
            formatter: "{c}",
            show: true,
            position: "right",
            textStyle: {
              fontWeight: "bolder",
              fontSize: "12",
              color: "#2A9CC9"
            }
          },
          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#488DFF', '#8FE0F7'],
              ['#488DFF', '#8FE0F7'],
              ['#488DFF', '#8FE0F7'],
              ['#488DFF', '#8FE0F7'],
              ['#488DFF', '#8FE0F7']
            ];

            var index = params.dataIndex;
            if (params.dataIndex >= colorList.length) {
              index = params.dataIndex - colorList.length;
            }

            return new echarts.graphic.LinearGradient(0, 0, 1, 0,
              [
                { offset: 0, color: colorList[index][0] },
                { offset: 1, color: colorList[index][1] }
              ]);
          }
        }
      },
      data: [10, 13, 20, 25, 40]
    }]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//bar2柱状图
function keyData2 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar2'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {
      // trigger: 'axis',
      // axisPointer: { // 坐标轴指示器，坐标轴触发有效
      //   type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      // }
    },
    legend: {
      // orient: 'vertical',
      left: 'center',
      top: 5,
      textStyle: {    //文字样式
        color: "#2A9CC9",
        fontSize: 10,
        fontFamily: 'Microsoft YaHei'
      }
    },
    grid: {
      top: "15%",
      left: "2%",
      right: "0%",
      bottom: "0%",
      // show: true, // 显示边框
      // borderColor: "#19B7F5", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ['玛纳斯县', '呼图壁县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒县'],
      axisPointer: {
        type: 'shadow'
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [
            '#1b4765',
            'rgba(100, 100, 100, 0)'
            // 'rgba(123,19,19,0.3)',
            // 'rgba(100,100,100,0.3)'
          ]
        }
      },
      axisTick: {
        alignWithLabel: false,
        show: false
      },
      axisLabel: {
        interval: 0,    //强制文字产生间隔
        rotate: 0,     //文字逆时针旋转45°
        textStyle: {    //文字样式
          color: "#2A9CC9",
          fontSize: 10,
          fontFamily: 'Microsoft YaHei'
        }
      },
      axisLine: {
        show: true, // 去除轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: "#2A9CC9" // 文本颜色
      },
      axisLine: {
        show: true, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: false // 控制平衡线
      }
    },
    series: [
      {
        name: '执法类总数',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#02A7E0" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#01C8EC" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#00E4F7" // 100% 处的颜色
            }], false)
          }
        },
        data: [25, 18, 33, 13, 24, 30, 25]
      },
      {
        name: '违章违建',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#FFB855" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#FF743C" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#FF2D2D" // 100% 处的颜色
            }], false)
          }
        },
        data: [35, 13, 24, 20, 22, 30, 25]
      },
      {
        name: '环境污染',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#03FCB9" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#25FCCC" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#60F7EB" // 100% 处的颜色
            }], false)
          }
        },
        data: [22, 13, 29, 25, 12, 26, 15]
      },
      {
        name: '安全生成',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#FF8C4D" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#FF5566" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#FF3E70" // 100% 处的颜色
            }], false)
          }
        },
        data: [26, 36, 21, 32, 23, 18, 33]
      },
      {
        name: '市容环卫',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#FE5EB7" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#F13EDA" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#E020F7" // 100% 处的颜色
            }], false)
          }
        },
        data: [18, 23, 14, 25, 13, 16, 26]
      },
      {
        name: '卫生防疫',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#893FF0" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#9159F4" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#9B7DFA" // 100% 处的颜色
            }], false)
          }
        },
        data: [19, 24, 16, 17, 14, 16, 27]
      },
      {
        name: '其他',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#F59834" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#FDB33C" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#FFBE4E" // 100% 处的颜色
            }], false)
          }
        },
        data: [17, 22, 23, 22, 10, 11, 21]
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//bar3柱状图
function keyData3 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar3'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {
      // trigger: 'axis',
      // axisPointer: { // 坐标轴指示器，坐标轴触发有效
      //   type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      // }
    },
    legend: {
      // orient: 'vertical',
      left: 'center',
      top: 5,
      textStyle: {    //文字样式
        color: "#2A9CC9",
        fontSize: 10,
        fontFamily: 'Microsoft YaHei'
      }
    },
    grid: {
      top: "15%",
      left: "2%",
      right: "0%",
      bottom: "2%",
      // show: true, // 显示边框
      // borderColor: "#19B7F5", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ['玛纳斯县', '呼图壁县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒县'],
      axisPointer: {
        type: 'shadow'
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [
            '#1b4765',
            'rgba(100, 100, 100, 0)'
            // 'rgba(123,19,19,0.3)',
            // 'rgba(100,100,100,0.3)'
          ]
        }
      },
      axisTick: {
        alignWithLabel: false,
        show: false
      },
      axisLabel: {
        interval: 0,    //强制文字产生间隔
        rotate: 0,     //文字逆时针旋转45°
        textStyle: {    //文字样式
          color: "#2A9CC9",
          fontSize: 10,
          fontFamily: 'Microsoft YaHei'
        }
      },
      axisLine: {
        show: true, // 去除轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: "#2A9CC9" // 文本颜色
      },
      axisLine: {
        show: true, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: false // 控制平衡线
      }
    },
    series: [
      {
        name: '群众诉求困难类',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#02A7E0" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#01C8EC" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#00E4F7" // 100% 处的颜色
            }], false)
          }
        },
        data: [25, 20, 53, 23, 34, 40, 35]
      },
      {
        name: '生成问题',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#FFB855" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#FF743C" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#FF2D2D" // 100% 处的颜色
            }], false)
          }
        },
        data: [45, 23, 34, 45, 12, 34, 25]
      },
      {
        name: '生活问题',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#03FCB9" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#25FCCC" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#60F7EB" // 100% 处的颜色
            }], false)
          }
        },
        data: [22, 13, 29, 25, 12, 26, 15]
      },
      {
        name: '政策问题',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#FF8C4D" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#FF5566" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#FF3E70" // 100% 处的颜色
            }], false)
          }
        },
        data: [26, 36, 21, 32, 23, 18, 33]
      },
      {
        name: '社会问题',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#FE5EB7" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#F13EDA" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#E020F7" // 100% 处的颜色
            }], false)
          }
        },
        data: [28, 33, 24, 35, 22, 24, 35]
      },
      {
        name: '其他',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#893FF0" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#9159F4" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#9B7DFA" // 100% 处的颜色
            }], false)
          }
        },
        data: [19, 24, 16, 17, 14, 16, 27]
      },
    ]
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//line折线图
function echartsline (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('line'));

  // 指定图表的配置项和数据
  const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
  const xData = ['2020年01月', '2020年02月', '2020年03月', '2020年04月', '2020年05月', '2020年06月']
  option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'none',
      textStyle: {
        color: '#9BCBDE'
      },
      padding: [10, 10],
      extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0)'
    },
    grid: {
      top: '15%',
      bottom: '10%',
      right: '2%'
    },
    xAxis: [{
      type: 'category',
      data: xData,
      axisLine: {
        lineStyle: {
          color: 'rgba(107,107,107,0.37)', //x轴颜色
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 1,
        textStyle: {
          color: '#9BCBDE' //坐标轴字颜色
        },
        margin: 15
      },
      boundaryGap: false
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(107,107,107,0.37)', //y轴颜色
        }
      },
      axisLabel: {
        textStyle: {
          color: '#9BCBDE'
        }
      },
      splitLine: {
        show: false
      }
    }],
    series: [{
      name: '',
      type: 'line',
      data: [10, 10, 30, 12, 15, 3],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 3,
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: '#0893EF'
        },
        {
          offset: 1,
          color: '#26D5E8'
        }
        ]),
        shadowColor: 'rgba(158,135,255, 0)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        normal: {
          color: colorList[0],
          borderColor: colorList[0]
        }
      }
    }]
  };

  // let chart = document.getElementById('chart-panel');
  // let myChart = echarts.init(chart)
  // let i = 0
  // setInterval(function () {
  //   console.log(i)
  //   i = i === xData.length ? 0 : i + 1
  //   myChart.dispatchAction({
  //     type: 'showTip',
  //     seriesIndex: 0,  // 显示第几个series
  //     dataIndex: i // 显示第几个数据
  //   });
  // }, 1000)

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
// pie饼状图
function echartsPie () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('pie'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%'
    },
    series: [{
      name: '',
      type: 'pie',
      radius: ['65%', '30%'],
      center: ['48%', '60%'],
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{b}:{c}%'
        },
      },
      labelLine: {
        normal: {
          length: 15,
          length: 45,
        }
      },
      data: [{
        value: 20,
        name: '基本满意',
        itemStyle: {
          color: '#4FBDFB'
        }
      }, {
        value: 2,
        name: '不满意',
        itemStyle: {
          color: '#F82440'
        }
      },
      {
        value: 5,
        name: '满意',
        itemStyle: {
          color: '#01EF97'
        }
      }
      ]
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
// pie2饼状图
function echartsPie2 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('pie2'));

  // 指定图表的配置项和数据
  let angle = 0; //角度，用来做简单的动画效果的
  let value = 55;
  var timerId;
  option1 = {
    title: {
      text: '{a|' + value + '}{c|%}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 16,
            color: '#EF8D11'
          },

          c: {
            fontSize: 16,
            color: '#EF8D11',
            // padding: [5,0]
          }
        }
      }
    },

    series: [
      // 紫色
      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
              startAngle: (0 + angle) * Math.PI / 180,
              endAngle: (90 + angle) * Math.PI / 180
            },
            style: {
              stroke: "#8383FA",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5", //紫点
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
          let point = getCirlPoint(x0, y0, r, (90 + angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#8450F9", //绿
              fill: "#8450F9"
            },
            silent: true
          };
        },
        data: [0]
      },
      // 蓝色

      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
              startAngle: (180 + angle) * Math.PI / 180,
              endAngle: (270 + angle) * Math.PI / 180
            },
            style: {
              stroke: "#4386FA",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      },
      {
        name: "ring5", // 蓝色
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
          let point = getCirlPoint(x0, y0, r, (180 + angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#4386FA", //绿
              fill: "#4386FA"
            },
            silent: true
          };
        },
        data: [0]
      },

      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
              startAngle: (270 + -angle) * Math.PI / 180,
              endAngle: (40 + -angle) * Math.PI / 180
            },
            style: {
              stroke: "#0CD3DB",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      },
      // 橘色

      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
              startAngle: (90 + -angle) * Math.PI / 180,
              endAngle: (220 + -angle) * Math.PI / 180
            },
            style: {
              stroke: "#FF8E89",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
          let point = getCirlPoint(x0, y0, r, (90 + -angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#FF8E89", //粉
              fill: "#FF8E89"
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5", //绿点
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
          let point = getCirlPoint(x0, y0, r, (270 + -angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#0CD3DB", //绿
              fill: "#0CD3DB"
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: '吃猪肉频率',
        type: 'pie',
        radius: ['52%', '40%'],
        silent: true,
        clockwise: true,
        startAngle: 90,
        z: 0,
        zlevel: 0,
        label: {
          normal: {
            position: "center",

          }
        },
        data: [{
          value: value,
          name: "",
          itemStyle: {
            normal: {
              color: { // 完成的圆环的颜色
                colorStops: [{
                  offset: 0,
                  color: '#A098FC' // 0% 处的颜色
                },
                {
                  offset: 0.3,
                  color: '#4386FA' // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: '#4FADFD' // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: '#0CD3DB' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#646CF9' // 100% 处的颜色
                }
                ]
              },
            }
          }
        },
        {
          value: 100 - value,
          name: "",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: "#173164"
            }
          }
        }
        ]
      },
      {
        name: '吃猪肉频率',
        type: 'pie',
        radius: ['32%', '35%'],
        silent: true,
        clockwise: true,
        startAngle: 270,
        z: 0,
        zlevel: 0,
        label: {
          normal: {
            position: "center",

          }
        },
        data: [{
          value: value,
          name: "",
          itemStyle: {
            normal: {
              color: { // 完成的圆环的颜色
                colorStops: [{
                  offset: 0,
                  color: '#00EDF3' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#646CF9' // 100% 处的颜色
                }]
              },
            }
          }
        },
        {
          value: 100 - value,
          name: "",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: "#173164"
            }
          }
        }
        ]
      },

    ]
  };

  //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
  function getCirlPoint (x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
    return {
      x: x1,
      y: y1
    }
  }

  function draw () {
    angle = angle + 3
    myChart.setOption(option1, true)
    //window.requestAnimationFrame(draw);
  }
  if (timerId) {
    clearInterval(timerId);
  }
  timerId = setInterval(function () {
    //用setInterval做动画感觉有问题
    draw()
  }, 100);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// pie2饼状图
function echartsPie3 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('pie3'));

  // 指定图表的配置项和数据
  let angle = 0; //角度，用来做简单的动画效果的
  let value = 45;
  var timerId;
  option2 = {
    title: {
      text: '{a|' + value + '}{c|%}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 16,
            color: '#29EEF3'
          },

          c: {
            fontSize: 16,
            color: '#29EEF3',
            // padding: [5,0]
          }
        }
      }
    },

    series: [
      // 紫色
      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
              startAngle: (0 + angle) * Math.PI / 180,
              endAngle: (90 + angle) * Math.PI / 180
            },
            style: {
              stroke: "#8383FA",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5", //紫点
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
          let point = getCirlPoint(x0, y0, r, (90 + angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#8450F9", //绿
              fill: "#8450F9"
            },
            silent: true
          };
        },
        data: [0]
      },
      // 蓝色

      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
              startAngle: (180 + angle) * Math.PI / 180,
              endAngle: (270 + angle) * Math.PI / 180
            },
            style: {
              stroke: "#4386FA",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      },
      {
        name: "ring5", // 蓝色
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
          let point = getCirlPoint(x0, y0, r, (180 + angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#4386FA", //绿
              fill: "#4386FA"
            },
            silent: true
          };
        },
        data: [0]
      },

      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
              startAngle: (270 + -angle) * Math.PI / 180,
              endAngle: (40 + -angle) * Math.PI / 180
            },
            style: {
              stroke: "#0CD3DB",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      },
      // 橘色

      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
              startAngle: (90 + -angle) * Math.PI / 180,
              endAngle: (220 + -angle) * Math.PI / 180
            },
            style: {
              stroke: "#FF8E89",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
          let point = getCirlPoint(x0, y0, r, (90 + -angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#FF8E89", //粉
              fill: "#FF8E89"
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5", //绿点
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
          let point = getCirlPoint(x0, y0, r, (270 + -angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#0CD3DB", //绿
              fill: "#0CD3DB"
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: '吃猪肉频率',
        type: 'pie',
        radius: ['52%', '40%'],
        silent: true,
        clockwise: true,
        startAngle: 90,
        z: 0,
        zlevel: 0,
        label: {
          normal: {
            position: "center",

          }
        },
        data: [{
          value: value,
          name: "",
          itemStyle: {
            normal: {
              color: { // 完成的圆环的颜色
                colorStops: [{
                  offset: 0,
                  color: '#A098FC' // 0% 处的颜色
                },
                {
                  offset: 0.3,
                  color: '#4386FA' // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: '#4FADFD' // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: '#0CD3DB' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#646CF9' // 100% 处的颜色
                }
                ]
              },
            }
          }
        },
        {
          value: 100 - value,
          name: "",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: "#173164"
            }
          }
        }
        ]
      },
      {
        name: '吃猪肉频率',
        type: 'pie',
        radius: ['32%', '35%'],
        silent: true,
        clockwise: true,
        startAngle: 270,
        z: 0,
        zlevel: 0,
        label: {
          normal: {
            position: "center",

          }
        },
        data: [{
          value: value,
          name: "",
          itemStyle: {
            normal: {
              color: { // 完成的圆环的颜色
                colorStops: [{
                  offset: 0,
                  color: '#00EDF3' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#646CF9' // 100% 处的颜色
                }]
              },
            }
          }
        },
        {
          value: 100 - value,
          name: "",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: "#173164"
            }
          }
        }
        ]
      },

    ]
  };

  //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
  function getCirlPoint (x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
    return {
      x: x1,
      y: y1
    }
  }

  function draw () {
    angle = angle + 3
    myChart.setOption(option2, true)
    //window.requestAnimationFrame(draw);
  }
  if (timerId) {
    clearInterval(timerId);
  }
  timerId = setInterval(function () {
    //用setInterval做动画感觉有问题
    draw()
  }, 100);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}





