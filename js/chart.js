//图表bar1柱状图
function getEchartsBar1 () {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('bar1'));

  // 指定图表的配置项和数据
  const option = {
    tooltip: {

    },
    grid: {
      top: "8%",
      left: "4%",
      right: "3%",
      bottom: "4%",
      // show: true, // 显示边框
      // borderColor: "#19B7F5", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ['党员大会', '支部委员会', '党小组会', '党课'],
      axisTick: {
        alignWithLabel: false,
        show: false
      },
      axisLabel: {
        interval: 0,    //强制文字产生间隔
        rotate: 0,     //文字逆时针旋转45°
        textStyle: {    //文字样式
          color: "#333",
          fontSize: 10,
          fontFamily: 'Microsoft YaHei'
        }
      },
      axisLine: {
        show: true, // 去除轴线
        lineStyle: {
          color: '#D0D0D0',
          width: 2
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: "#333" // 文本颜色
      },
      axisLine: {
        show: true, // 控制轴线
        lineStyle: {
          color: '#D0D0D0',
          width: 2
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true // 控制平衡线
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#FFC21F', '#FF5B1F'],
              ['#FFC21F', '#FF5B1F'],
              ['#FFC21F', '#FF5B1F'],
              ['#FFC21F', '#FF5B1F']
              // ['#27D7E8', '#048BF0'],
              // ['#F8774F', '#FF2020'],
              // ['#27E8AB', '#82F953']
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
      data: [200, 300, 200, 334]
    }
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

//图表bar1柱状图
function getEchartsBar2 () {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('bar2'));

  // 指定图表的配置项和数据
  const option = {
    tooltip: {

    },
    grid: {
      top: "8%",
      left: "4%",
      right: "3%",
      bottom: "4%",
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
          color: "#333",
          fontSize: 10,
          fontFamily: 'Microsoft YaHei'
        }
      },
      axisLine: {
        show: true, // 去除轴线
        lineStyle: {
          color: '#D0D0D0',
          width: 2
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: "#333" // 文本颜色
      },
      axisLine: {
        show: true, // 控制轴线
        lineStyle: {
          color: '#D0D0D0',
          width: 2
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true // 控制平衡线
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#27D7E8', '#048BF0'],
              ['#27D7E8', '#048BF0'],
              ['#27D7E8', '#048BF0'],
              ['#27D7E8', '#048BF0']
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
      data: [45, 60, 44, 26, 28, 30, 32]
    }
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}


// 图表折线图
function getEchartsLine1 () {
  // 1. 实例化对象
  var myChart = echarts.init(document.getElementById('line'));
  // 2.指定配置
  const option = {

    tooltip: {
      trigger: 'axis'
    },

    grid: {
      left: '3%',
      right: '3%',
      top: '8%',
      bottom: '5%',
      containLabel: true
    },
    color: ['#0DA0EE'],
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },

    // calculable: true,
    xAxis: {
      type: 'category',
      axisTick: { show: false },

      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: '#333',
          fontSize: '10'
        },
        lineStyle: {
          color: '#D0D0D0',
        },
        rotate: 0,
      },
      axisLine: {
        lineStyle: {
          color: '#D0D0D0',
          width: 2
        },
        show: true // 去除轴线
      },
      splitLine: {
        show: false
      },
      data: ['玛纳斯县', '呼图壁县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒县']
    },

    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: '#333',
          fontSize: '10',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#D0D0D0',
          width: 2
        },
        show: true
      },
      axisTick: {
        show: false // 去除刻度线
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(160,160,160,0.3)',
          // type: 'dashed'
        }
      },
    },
    series: [
      {
        type: 'line',
        smooth: true,
        data: [0, 312, 321, 754, 500, 830, 710, 521, 504, 0]
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}