

//bar1柱状图
function keyData1 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar1'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {},
    grid: {
      top: "5%",
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
      data: ["女性", "男性"],
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
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: "#00B9FD" // 0% 处的颜色
          }, {
            offset: 0.6,
            color: "#00D5FE" // 60% 处的颜色
          }, {
            offset: 1,
            color: "#00E9FF" // 100% 处的颜色
          }], false)
        }
      },
      data: [10, 13]
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
      data: ['研究生', '本科', '大专', '中专', '高中及以下'],
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
      data: [5, 13, 17, 11, 7]
    }
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// pie饼状图
function keyData3 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('pie'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    title: {
      text: 31 + "人",
      top: '52%',
      textAlign: "center",
      left: "47%",
      textStyle: {
        color: '#00E3FF',
        fontSize: 20,
        fontWeight: '500'
      }
    },
    series: [{
      name: '民族',
      type: 'pie',
      radius: ['75%', '50%'],
      center: ['48%', '60%'],
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
        name: '维吾尔族',
        itemStyle: {
          color: '#60C1C3'
        }
      }, {
        value: 20,
        name: '汉族',
        itemStyle: {
          color: '#2FFAFF'
        }
      },
      {
        value: 5,
        name: '哈萨克族',
        itemStyle: {
          color: '#5DA2E1'
        }
      },
      {
        value: 6,
        name: '回族',
        itemStyle: {
          color: '#1171A9'
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

// bar3柱状图
function keyData4 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar3'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {
      // trigger: 'axis',
      // axisPointer: {
      //   type: 'shadow'
      // }
    },
    grid: {
      top: "0%",
      left: "4%",
      right: "3%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisTick: {
        alignWithLabel: false,
        show: false,
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
      type: 'category',
      data: ['木垒县', '奇台县', '吉木萨尔县', '阜康市', '昌吉市', '呼图壁县', '玛纳斯县'],
      axisLabel: {
        color: "#2A9CC9", // 文本颜色
      },
      axisLine: {
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        },

      },
      axisTick: {
        show: false, // 控制刻度线
      },
      splitLine: {
        show: false // 控制平衡线,
      },
    },
    series: [
      {
        name: '党课',
        type: 'bar',
        barWidth: 4,
        barCategoryGap: '50%',
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            barBorderRadius: [8, 8, 8, 8],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#0C2548" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#1D7997" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#00E9FF" // 100% 处的颜色
            }], false)
          }
        },
        data: [25, 20, 53, 23, 34, 34, 35]
      },
      {
        name: '主题党日',
        type: 'bar',
        barWidth: 4,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            barBorderRadius: [8, 8, 8, 8],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#0C2548" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#2088A6" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#00E9FF" // 100% 处的颜色
            }], false)
          }
        },
        data: [45, 23, 34, 45, 12, 34, 25]
      },
      {
        name: '支部党员大会',
        type: 'bar',
        barWidth: 4,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            barBorderRadius: [8, 8, 8, 8],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#0C2548" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#368586" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#69FCD1" // 100% 处的颜色
            }], false)
          }
        },
        data: [25, 13, 34, 25, 32, 14, 15]
      },
      {
        name: '支委会',
        type: 'bar',
        barWidth: 4,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            barBorderRadius: [8, 8, 8, 8],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#0C2548" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#7F5C40" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#EA9038" // 100% 处的颜色
            }], false)
          }
        },
        data: [35, 23, 24, 35, 22, 14, 45]
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

// bar4柱状图
function keyData5 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar4'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {
      // trigger: 'axis',
      // axisPointer: {
      //   type: 'shadow'
      // }
    },
    grid: {
      top: "0%",
      left: "4%",
      right: "3%",
      bottom: "6%",
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisTick: {
        alignWithLabel: false,
        show: false,
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
      type: 'category',
      data: ['木垒县', '奇台县', '吉木萨尔县', '阜康市', '昌吉市', '呼图壁县', '玛纳斯县'],
      axisLabel: {
        color: "#2A9CC9", // 文本颜色
      },
      axisLine: {
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        },

      },
      axisTick: {
        show: false, // 控制刻度线
      },
      splitLine: {
        show: false // 控制平衡线,
      },
    },
    series: [
      {
        name: '党课',
        type: 'bar',
        barWidth: 4,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            barBorderRadius: [8, 8, 8, 8],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#0C2548" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#1D7997" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#00E9FF" // 100% 处的颜色
            }], false)
          }
        },
        data: [25, 20, 53, 23, 34, 34, 35]
      },
      {
        name: '主题党日',
        type: 'bar',
        barWidth: 4,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            barBorderRadius: [8, 8, 8, 8],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#0C2548" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#2088A6" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#00E9FF" // 100% 处的颜色
            }], false)
          }
        },
        data: [45, 23, 34, 45, 12, 34, 25]
      },
      {
        name: '支部党员大会',
        type: 'bar',
        barWidth: 4,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            barBorderRadius: [8, 8, 8, 8],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#0C2548" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#368586" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#69FCD1" // 100% 处的颜色
            }], false)
          }
        },
        data: [25, 13, 34, 25, 32, 14, 15]
      },
      {
        name: '支委会',
        type: 'bar',
        barWidth: 4,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            barBorderRadius: [8, 8, 8, 8],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: "#0C2548" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#7F5C40" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#EA9038" // 100% 处的颜色
            }], false)
          }
        },
        data: [35, 23, 24, 35, 22, 14, 45]
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



