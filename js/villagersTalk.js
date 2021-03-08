//bar1柱状图
function keyData1 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar1'));

  // 指定图表的配置项和数据
  var xData2 = ["当月", "一个月", "二个月", "三个月"];
  var data1 = [4, 3, 2, 3];
  var data2 = [];
  for (let i = 0; i < data1.length; i++) {
    data2.push(Math.max(...data1))
  }
  option = {
    tooltip: {
      trigger: 'item',
    },
    grid: {
      // left: "8%",
      // right: "8%",
      // bottom: "6%",
      top: "8%",
    },
    xAxis: {
      data: xData2,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
        margin: 20, //刻度标签与轴线之间的距离。
      },

    },
    yAxis: {
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
      }
    },
    series: [
      {//三个最低下的圆片
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [35, 25],
        "symbolOffset": [0, 10],
        "z": 12,
        itemStyle: {
          opacity: 1,
          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#2543AA', '#112073'],
              ['#C63DCB', '#C230B9'],
              ['#E9666E', '#8A304A'],
              ['#F99F5F', '#F99F5F']
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
        },
        "data": [1, 1, 1, 1]
      },


      //下半截柱状图
      {
        name: '2020',
        type: 'bar',
        barWidth: 35,
        barGap: '-100%',
        itemStyle: {//lenged文本
          opacity: .7,
          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#2543AA', '#112073'],
              ['#C63DCB', '#C230B9'],
              ['#E9666E', '#8A304A'],
              ['#F99F5F', '#F99F5F']
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
        },

        data: data1
      },

      { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
        type: 'bar',
        barWidth: 35,
        barGap: '-100%',
        stack: '广告',
        itemStyle: {
          color: 'transparent'
        },
        data: data1
      },

      {
        "name": "", //头部
        "type": "pictorialBar",
        "symbolSize": [35, 25],
        "symbolOffset": [0, -10],
        "z": 12,
        "symbolPosition": "end",
        itemStyle: {
          color: '#163F7A',
          opacity: 1,
        },
        "data": data2
      },

      {
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [35, 25],
        "symbolOffset": [0, -10],
        "z": 12,
        itemStyle: {
          opacity: 1,
          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: function (params) {
            //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
            var colorList = [
              ['#2543AA', '#112073'],
              ['#C63DCB', '#C230B9'],
              ['#E9666E', '#8A304A'],
              ['#F99F5F', '#F99F5F']
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
        },
        "symbolPosition": "end",
        "data": data1
      },

      {
        type: 'bar',
        barWidth: 35,
        barGap: '-100%',
        z: 0,
        itemStyle: {
          color: '#163F7A',
          opacity: .7,
        },

        data: data2
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
//bar2柱状图
function keyData2 (data) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar2'));

  // 指定图表的配置项和数据
  var sourceBar = {
    "itemData": ['玛纳斯县', '呼图壁县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒县'],
    "seriesData": [30, 25, 15, 20, 16, 12, 26]
  }
  var itemData = sourceBar.itemData;
  var seriesData = sourceBar.seriesData;
  var color = ['#00b9f6', '#38a97d', '#004eff', '#17c7e7', '#4e85ea', '#e49be9',
    '#078d9d', '#eca52a', '#ef9544', '#ea3b3b', '#97DCC2', '#D3EF75', '#CB7185', '#EBA8A0']
  var data = {};
  for (var k in itemData) {
    data[itemData[k]] = seriesData[k];
  }

  var xAxisData = [];
  var dataArr = [];
  for (var i in data) {
    xAxisData.push(i);
    dataArr.push(data[i]);
  }

  option = {
    grid: {
      top: '15%',
      left: '5%',
      right: '6%',
      bottom: '8%',
      containLabel: true
    },
    tooltip: {
      show: "true",
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        shadowStyle: {
          color: 'rgba(112,112,112,0)',
        },
      },
      formatter: function (params) {
        return params[0].name + '：' + params[0].value + '人';
      },
      backgroundColor: 'rgba(0,0,0,0.7)', // 背景
      padding: [8, 10], //内边距
      extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    xAxis: [{
      show: true,
      name: '来源',
      nameTextStyle: {
        fontSize: 14,
        fontFamily: 'Microsoft YaHei',
        color: '#fff'
      },
      type: 'category',
      nameLocation: 'end',
      nameGap: 8,
      axisLabel: {
        fontSize: 16,
        fontFamily: 'Microsoft YaHei',
        color: "#fff",
        interval: 0,
        margin: 16,
        formatter: function (params) {
          if (params.length > 6) {
            params = params.substr(0, 6) + "...";
          } else {
            params = params;

          }
          return params;
        }
      },
      axisLine: {
        show: true,
        symbol: ['none', 'arrow'],
        lineStyle: {
          color: '#05edfc'
        }
      },
      data: xAxisData
    }, {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: xAxisData
    }, {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: xAxisData
    }],
    yAxis: {
      type: 'value',
      name: '数量',
      nameTextStyle: {
        fontSize: 14,
        fontFamily: 'Microsoft YaHei',
        color: '#fff'
      },
      minInterval: 1,
      nameLocation: 'end',
      nameGap: 10,
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        fontSize: 12,
        fontFamily: 'Arial',
        color: "#fff"
      },
      axisLine: {
        show: true,
        symbol: ['none', 'arrow'],
        lineStyle: {
          color: '#05edfc'
        }
      }
    },
    series: [{
      type: 'bar',
      stack: 1,
      xAxisIndex: 0,
      barWidth: 10,
      barGap: 5,
      z: 2,
      data: function () {
        var itemArr = [];
        for (var i = 1; i < (dataArr.length + 1); i++) {
          var item = {
            value: dataArr[i - 1],
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[translateColor(i) * 2 - 2]
                }, {
                  offset: 1,
                  color: color[translateColor(i) * 2 - 1]
                }]),
              }
            }
          };
          itemArr.push(item);
        }
        return itemArr;
      }()
    },
    {
      type: 'scatter',
      stack: 1,
      symbolOffset: [0, 0], //相对于原本位置的偏移量
      label: {
        normal: {
          show: false,
        }
      },
      xAxisIndex: 2,
      symbolSize: 10,
      z: 2,
      data: function () {
        var itemArr = [];
        for (var i = 1; i < (dataArr.length + 1); i++) {
          var item = {
            value: 0,
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[translateColor(i) * 2 - 2]
                }, {
                  offset: 1,
                  color: color[translateColor(i) * 2 - 1]
                }]),
              }
            }
          };
          itemArr.push(item);
        }
        return itemArr;
      }()
    },
    {
      type: 'bar',
      xAxisIndex: 1,
      barGap: '140%',
      data: dataArr,
      barWidth: 22,
      itemStyle: {
        normal: {
          barBorderRadius: 50,
          color: '#0e2147'
        }
      },
      z: 1
    },
    {
      type: 'bar',
      xAxisIndex: 2,
      barWidth: 30,
      barGap: 1,
      z: 0,
      data: function () {
        var itemArr = [];
        for (var i = 1; i < (dataArr.length + 1); i++) {
          var item = {
            value: dataArr[i - 1],
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[translateColor(i) * 2 - 2]
                }, {
                  offset: 1,
                  color: color[translateColor(i) * 2 - 1]
                }]),
              }
            }
          };
          itemArr.push(item);
        }
        return itemArr;
      }()
    },
    {
      type: 'scatter',
      hoverAnimation: false,
      xAxisIndex: 2,
      symbolOffset: [0, 0], //相对于原本位置的偏移量
      symbolSize: 30,
      z: 2,
      data: function () {
        var itemArr = [];
        for (var i = 1; i < (dataArr.length + 1); i++) {
          var item = {
            value: 0,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[translateColor(i) * 2 - 2]
                }, {
                  offset: 1,
                  color: color[translateColor(i) * 2 - 1]
                }]),
              }
            }
          };
          itemArr.push(item);
        }
        return itemArr;
      }()
    }
    ]
  };

  function translateColor (index) {
    if (index > 7) {
      return translateColor(index - 7)
    }
    return index
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
      // name: "村数",
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
        // name: '解答、办结数',
        type: 'bar',
        barWidth: "30%",
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
    legend: {
      // orient: 'vertical',
      bottom: 0,
      textStyle: {    //文字样式
        color: "#2A9CC9",
        fontSize: 10,
        fontFamily: 'Microsoft YaHei'
      }
    },
    series: [{
      name: '',
      type: 'pie',
      radius: ['65%', '50%'],
      center: ['48%', '48%'],
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{b}:{c}%'
        },
      },
      labelLine: {
        normal: {
          length: 35,
        }
      },
      data: [{
        value: 2,
        name: '当月',
        itemStyle: {
          color: '#00AEFF'
        }
      }, {
        value: 20,
        name: '1个月',
        itemStyle: {
          color: '#F769AB'
        }
      },
      {
        value: 5,
        name: '2个月',
        itemStyle: {
          color: '#F16869'
        }
      },
      {
        value: 6,
        name: '3个月',
        itemStyle: {
          color: '#FCCA4C'
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




