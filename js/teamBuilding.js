
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
          // barBorderRadius: [8, 8, 8, 8],

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
        name: '志愿者服务次数',
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
        name: '下沉干部服务次数',
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

    },
    legend: {
      // orient: 'vertical',
      left: 'right',
      textStyle: {    //文字样式
        color: "#2A9CC9",
        fontSize: 10,
        fontFamily: 'Microsoft YaHei'
      }
    },
    grid: {
      top: "15%",
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
        name: '志愿者服务次数',
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
        name: '下沉干部服务次数',
        type: 'bar',
        barWidth: 10,
        // barGap: '50%',
        //设置柱状图渐变颜色
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#EC7A09" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#F7AD32" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#FEC951" // 100% 处的颜色
            }], false)
          }
        },
        data: [45, 23, 34, 45, 12, 34, 25]
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
//bar4柱状图
function keyData4 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar4'));

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
      data: ["女", "男"],
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
              ['#F86022', '#FFA250'],
              ['#00B9FD', '#00E9FF']
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
//bar5柱状图
function keyData5 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar5'));

  // 指定图表的配置项和数据
  option = {
    tooltip: {},
    grid: {
      top: "0%",
      left: "2%",
      right: "5%",
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
          fontSize: 2,
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
      data: ["60岁以上", "51-60岁", "36-50岁", "35岁一下"],
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
      barWidth: 8,
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
              ['#00B9FD', '#00E9FF'],
              ['#00B9FD', '#00E9FF'],
              ['#00B9FD', '#00E9FF'],
              ['#00B9FD', '#00E9FF']
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
      data: [3, 11, 4, 14]
    }]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//bar5柱状图
function keyData6 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar6'));

  // 指定图表的配置项和数据
  option = {
    // backgroundColor: '#031245',
    "textStyle": {
      "color": "#c0c3cd",
      "fontSize": 12
    },
    "toolbox": {
      "show": false,
      "feature": {
        "saveAsImage": {
          "backgroundColor": "#031245"
        },
        "restore": {}
      },
      "iconStyle": {
        "borderColor": "#c0c3cd"
      }
    },
    "color": ["#63caff", "#49beff", "#03387a", "#03387a", "#03387a", "#6c93ee", "#a9abff", "#f7a23f", "#27bae7", "#ff6d9d", "#cb79ff", "#f95b5a", "#ccaf27", "#38b99c", "#93d0ff", "#bd74e0", "#fd77da", "#dea700"],
    "grid": {
      "containLabel": true,
      "left": 0,
      "right": 0,
      "bottom": 0,
      "top": 30
    },
    "xAxis": {
      "nameTextStyle": {
        "color": "#c0c3cd",
        "padding": [0, 0, -10, 0],
        "fontSize": 12
      },
      "axisLabel": {
        "color": "#c0c3cd",
        "fontSize": 12,
        "interval": 0
      },
      "axisTick": {
        "lineStyle": {
          "color": "#384267",
          "width": 1
        },
        "show": true
      },
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "color": "#384267",
          "width": 1,
          "type": "dashed"
        },
        "show": true
      },
      "data": ["汉族", "回族", "哈萨克族", "维吾尔族", "其他族"],
      "type": "category"
    },
    "yAxis": {
      "nameTextStyle": {
        "color": "#c0c3cd",
        "padding": [0, 0, -10, 0],
        "fontSize": 12
      },
      "axisLabel": {
        "color": "#c0c3cd",
        "fontSize": 12
      },
      "axisTick": {
        "lineStyle": {
          "color": "#384267",
          "width": 1
        },
        "show": true
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "#384267",
          "type": "dashed"
        }
      },
      "axisLine": {
        "lineStyle": {
          "color": "#384267",
          "width": 1,
          "type": "dashed"
        },
        "show": true
      },
      "name": ""
    },
    "series": [{
      "data": [5, 8, 6, 4, 7],
      "type": "bar",
      "barMaxWidth": "auto",
      "barWidth": 20,
      "itemStyle": {
        "color": {
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "type": "linear",
          "global": false,
          "colorStops": [{
            "offset": 0,
            "color": "#0b9eff"
          }, {
            "offset": 1,
            "color": "#63caff"
          }]
        }
      },
      "label": {
        "show": true,
        "position": "top",
        "distance": 10,
        "color": "#fff"
      }
    }, {
      "data": [1, 1, 1, 1, 1, 1, 1, 1],
      "type": "pictorialBar",
      "barMaxWidth": "20",
      "symbol": "diamond",
      "symbolOffset": [0, "50%"],
      "symbolSize": [20, 15]
    }, {
      "data": [5, 8, 6, 4, 7],
      "type": "pictorialBar",
      "barMaxWidth": "20",
      "symbolPosition": "end",
      "symbol": "diamond",
      "symbolOffset": [0, "-50%"],
      "symbolSize": [20, 12],
      "zlevel": 2
    }, {
      "data": [5, 8, 6, 4, 7],
      "type": "bar",
      "barMaxWidth": "auto",
      "barWidth": 20,
      "barGap": "-100%",
      "zlevel": -1
    }, {
      "data": [1, 1, 1, 1, 1, 1, 1, 1],
      "type": "pictorialBar",
      "barMaxWidth": "20",
      "symbol": "diamond",
      "symbolOffset": [0, "50%"],
      "symbolSize": [20, 15],
      "zlevel": -2
    }, {
      "data": [5, 8, 6, 4, 7],
      "type": "pictorialBar",
      "barMaxWidth": "20",
      "symbolPosition": "end",
      "symbol": "diamond",
      "symbolOffset": [0, "-50%"],
      "symbolSize": [20, 12],
      "zlevel": -1
    }],
    "tooltip": {
      "trigger": "axis",
      "show": false
    }
  }

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
    legend: {
      // orient: 'vertical',
      left: 'right',
      top: 10,
      textStyle: {    //文字样式
        color: "#2A9CC9",
        fontSize: 10,
        fontFamily: 'Microsoft YaHei'
      }
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
        name: '微心愿积分集合',
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
        name: '服务积分总数',
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
        name: '总积分',
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
    ]
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
  var salvProName = ["疫情防控总数", "值班值守总数", "治安巡逻总数", "政策宣讲总数", "志愿服务总数", "扶贫帮困总数", "环境治理总数", "应急救援总数", "医疗救援总数", "心理辅助总数", "化解纠纷总数", "行为劝导总数", "联户联防总数", "其他"];
  var salvProValue = [25, 35, 17, 19, 20, 35, 19, 40, 30, 20, 19, 35, 30, 55];
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
          color: 'rgba(57,82,131,0.5)',
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





