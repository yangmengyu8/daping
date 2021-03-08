
//bar1柱状图
function keyData1 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar1'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {

    },
    grid: {
      top: "15%",
      left: "0%",
      right: "3%",
      bottom: "0%",
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
          color: '#08416B'
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
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true, // 控制平衡线
        lineStyle: {
          color: '#08416B'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          // barBorderRadius: [8, 8, 8, 8],

          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF']
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
      data: [5, 13, 17, 11, 7, 15, 12]
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
    tooltip: {

    },
    grid: {
      top: "15%",
      left: "0%",
      right: "3%",
      bottom: "0%",
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
          color: '#08416B'
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
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true, // 控制平衡线
        lineStyle: {
          color: '#08416B'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          // barBorderRadius: [8, 8, 8, 8],

          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF']
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
      data: [5, 13, 17, 11, 7, 15, 12]
    }
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

    },
    grid: {
      top: "15%",
      left: "0%",
      right: "3%",
      bottom: "0%",
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
          color: '#08416B'
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
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true, // 控制平衡线
        lineStyle: {
          color: '#08416B'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          // barBorderRadius: [8, 8, 8, 8],

          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF']
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
      data: [5, 13, 17, 11, 7, 15, 12]
    }
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
      top: "15%",
      left: "0%",
      right: "3%",
      bottom: "2%",
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
          color: '#08416B'
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
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true, // 控制平衡线
        lineStyle: {
          color: '#08416B'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          // barBorderRadius: [8, 8, 8, 8],

          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF']
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
      data: [5, 13, 17, 11, 7, 15, 12]
    }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//bar5柱状图
function keyData5 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar5'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {

    },
    grid: {
      top: "15%",
      left: "0%",
      right: "3%",
      bottom: "2%",
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
          color: '#08416B'
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
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true, // 控制平衡线
        lineStyle: {
          color: '#08416B'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          // barBorderRadius: [8, 8, 8, 8],

          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF']
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
      data: [5, 13, 17, 11, 7, 15, 12]
    }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//bar6柱状图
function keyData6 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar6'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {

    },
    grid: {
      top: "15%",
      left: "0%",
      right: "3%",
      bottom: "0%",
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
          color: '#08416B'
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
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true, // 控制平衡线
        lineStyle: {
          color: '#08416B'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          // barBorderRadius: [8, 8, 8, 8],

          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF']
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
      data: [5, 13, 17, 11, 7, 15, 12]
    }
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//bar7柱状图
function keyData7 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar7'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {

    },
    grid: {
      top: "15%",
      left: "0%",
      right: "3%",
      bottom: "0%",
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
          color: '#08416B'
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
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true, // 控制平衡线
        lineStyle: {
          color: '#08416B'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          // barBorderRadius: [8, 8, 8, 8],

          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF']
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
      data: [5, 13, 17, 11, 7, 15, 12]
    }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//bar8柱状图
function keyData8 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar8'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {

    },
    grid: {
      top: "15%",
      left: "0%",
      right: "3%",
      bottom: "0%",
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
          color: '#08416B'
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
        show: false, // 控制轴线
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisTick: {
        show: false // 控制刻度线
      },
      splitLine: {
        show: true, // 控制平衡线
        lineStyle: {
          color: '#08416B'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          // barBorderRadius: [8, 8, 8, 8],

          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF'],
              ['#1967FF', '#52D2FF']
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
      data: [5, 13, 17, 11, 7, 15, 12]
    }
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}





