
//bar1柱状图
function keyData1 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar1'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {

    },
    grid: {
      top: "8%",
      left: "4%",
      right: "3%",
      bottom: "10%",
      // show: true, // 显示边框
      // borderColor: "#19B7F5", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ['玛纳斯县', '呼图壁县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒县'],
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
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          barBorderRadius: [8, 8, 8, 8],
          label: {
            formatter: "{c}",
            show: true,
            position: "top",
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
              ['#00E9FF', '#00B9FD'],
              ['#00E9FF', '#00B9FD'],
              ['#00E9FF', '#00B9FD'],
              ['#00E9FF', '#00B9FD'],
              ['#00E9FF', '#00B9FD'],
              ['#00E9FF', '#00B9FD'],
              ['#00E9FF', '#00B9FD']
            ];

            var index = params.dataIndex;
            if (params.dataIndex >= colorList.length) {
              index = params.dataIndex - colorList.length;
            }

            return new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                { offset: 0, color: colorList[index][0] },
                { offset: 1, color: colorList[index][1] }
              ]);
          }
        }
      },
      data: [5, 13, 17, 11, 7, 10, 8]
    }
  };


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
    tooltip: {},
    grid: {
      top: "15%",
      left: "2%",
      right: "5%",
      bottom: "1%",
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
      data: ['玛纳斯县', '呼图壁县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒县'],
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
              ['#E32D2D', '#FF5858'],
              ['#E57410', '#FEA95D'],
              ['#FFB256', '#FFE76F'],
              ['#4CF6AD', '#7FF1CF'],
              ['#7E6DFF', '#A99EFF'],
              ['#336ECF', '#5E9AFC'],
              ['#468CFF', '#8FE0F7']
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
      data: [10, 13, 8, 7, 6, 5, 8]
    }]
  }

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
  var salvProName = ["村委监督岗责任", "富婆帮困岗责任", "科技推广岗责任", "文体娱乐岗责任", "民族团结岗责任", "政策宣讲岗责任"];
  var salvProValue = [25, 35, 17, 19, 20, 15];
  var salvProMax = [];//背景按最大值
  for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(Math.max(...salvProValue))
  }
  option = {
    tooltip: {

    },
    // backgroundColor: "#003366",
    grid: {
      left: '2%',
      right: '0%',
      bottom: '0%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#2A9CC9'
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: salvProName
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      // axisLabel: {
      //   textStyle: {
      //     color: '#2A9CC9',
      //     fontSize: '10'
      //   },
      // },
      data: salvProValue
    }],
    series: [{
      name: '总数',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          // label: {
          //   formatter: "{c}",
          //   show: true,
          //   position: "right",
          //   textStyle: {
          //     fontWeight: "bolder",
          //     fontSize: "12",
          //     color: "#2A9CC9"
          //   }
          // },
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: "#0060FF" // 0% 处的颜色
          }, {
            offset: 0.6,
            color: "#066CFE" // 60% 处的颜色
          }, {
            offset: 1,
            color: "#117AFC" // 100% 处的颜色
          }], false)
        }
      },
      barWidth: 10,
      data: salvProValue
    },
    {
      name: '背景',
      type: 'bar',
      barWidth: 10,
      barGap: '-100%',
      data: salvProMax,
      itemStyle: {
        normal: {
          // color: 'rgba(57,82,131,0.5)',
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: "#53A8ED" // 0% 处的颜色
          }, {
            offset: 0.6,
            color: "#2CD5EE" // 60% 处的颜色
          }, {
            offset: 1,
            color: "#0DF2EE" // 100% 处的颜色
          }], false)
        }
      },
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
//bar4柱状图
function keyData4 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar4'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {

    },
    grid: {
      top: "8%",
      left: "4%",
      right: "3%",
      bottom: "10%",
      // show: true, // 显示边框
      // borderColor: "#19B7F5", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ['玛纳斯县', '呼图壁县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒县'],
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
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          barBorderRadius: [8, 8, 8, 8],
          label: {
            formatter: "{c}",
            show: true,
            position: "top",
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
              ['#FF6156', '#F7BB30'],
              ['#FF6156', '#F7BB30'],
              ['#FF6156', '#F7BB30'],
              ['#FF6156', '#F7BB30'],
              ['#FF6156', '#F7BB30'],
              ['#FF6156', '#F7BB30'],
              ['#FF6156', '#F7BB30']
            ];

            var index = params.dataIndex;
            if (params.dataIndex >= colorList.length) {
              index = params.dataIndex - colorList.length;
            }

            return new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                { offset: 0, color: colorList[index][0] },
                { offset: 1, color: colorList[index][1] }
              ]);
          }
        }
      },
      data: [5, 13, 17, 11, 7, 10, 8]
    }
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
// pie1柱状图
function keyData5 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('pie1'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}"
    },

    series: [
      {
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        data: [
          { value: 50, name: '已挂牌', itemStyle: { color: '#0195F3' } },
          { value: 20, name: '未挂牌', itemStyle: { color: '#C004F8' } }
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        //饼状图的外围标签
        label: {
          normal: {
            textStyle: {
              color: '#ffffff'
            }
          }
        },
        //指向外围标签的线条
        labelLine: {
          normal: {
            // lineStyle: {
            //   color: 'rgba(0, 0, 255, 0.3)'
            // },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            //具体决定了饼状图每一份的颜色显示
            color: '#FFA07A',
            //饼状图阴影，值越大阴影亮度越高
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
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

// pi2饼状图
function keyData6 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('pie2'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}'
    },
    series: [{
      name: '',
      type: 'pie',
      radius: ['65%', '35%'],
      center: ['48%', '50%'],
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{b}:{c}'
        },
      },
      labelLine: {
        normal: {
          length: 35,
        }
      },
      data: [{
        value: 2,
        name: '不满意',
        itemStyle: {
          color: '#F82440'
        }
      }, {
        value: 20,
        name: '满意',
        itemStyle: {
          color: '#4FBDFB'
        }
      },
      {
        value: 5,
        name: '基本满意',
        itemStyle: {
          color: '#E19537'
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




