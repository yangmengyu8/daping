
//bar1柱状图
function keyData1 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('bar1'));
  // 指定图表的配置项和数据
  option = {
    tooltip: {},
    grid: {
      top: "0%",
      left: "10%",
      right: "7%",
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
              ['#11ABE4', '#11ABE4'],
              ['#11ABE4', '#11ABE4'],
              ['#11ABE4', '#11ABE4'],
              ['#11ABE4', '#11ABE4'],
              ['#11ABE4', '#11ABE4'],
              ['#11ABE4', '#11ABE4'],
              ['#11ABE4', '#11ABE4'],
              ['#11ABE4', '#11ABE4']
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
      data: [8, 10, 12, 14, 16, 18, 20]
    }]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
//pie饼状图
function keyData2 (data) {

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('pie'));

  // 指定图表的配置项和数据
  option = {
    title: {
      //text: '实时旋转饼图'  
    },
    series: [
      {
        type: 'pie',
        zlevel: 1,
        silent: true,
        /*
        radius
        饼图的半径。可以为如下类型：
        number：直接指定外半径值。
        string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
        Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
        */
        radius: ['98%', '97%'],
        hoverAnimation: false,
        color: "rgba(88,142,197,0.5)",
        // animation:false,    //charts3 no
        label: {
          normal: {
            show: false
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [1]
      },
      {
        type: 'pie',
        zlevel: 2,
        silent: true,
        radius: ['90%', '91%'],
        startAngle: 50,
        hoverAnimation: false,
        // animation:false,    //charts3 no
        label: {
          normal: {
            show: false
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: _pie2()
      },
      {
        type: 'pie',
        zlevel: 3,
        silent: true,
        radius: ['88%', '87%'],
        label: {
          normal: {
            show: false
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: _pie2()
      },
      {
        type: 'pie',
        zlevel: 4,
        silent: true,
        radius: ['84%', '83%'],
        startAngle: 50,
        label: {
          normal: {
            show: false
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: _pie3()
      },
      {
        type: 'pie',
        zlevel: 5,
        silent: true,
        radius: ['80%', '78%'],
        color: ["#fc8d89", "#46d3f3", "rgba(203,203,203,.2)"],
        startAngle: 50,
        hoverAnimation: false,
        // animation:false,    //charts3 no
        label: {
          normal: {
            show: false
          },
        },
        data: [50, 20, 40]
      },
      {
        name: "",
        type: 'gauge',
        splitNumber: 30, //刻度数量
        min: 0,
        max: 100,
        radius: '73%', //图表尺寸
        center: ['50%', '50%'],
        startAngle: 90,
        endAngle: -269.9999,
        axisLine: {
          show: false,
          lineStyle: {
            width: 0,
            shadowBlur: 0,
            color: [
              [1, '#0dc2fe']
            ]
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: 'auto',
            width: 2
          },
          length: 20,
          splitNumber: 5
        },
        splitLine: {
          show: true,
          length: 32,
          lineStyle: {
            color: 'auto',
          }
        },
        axisLabel: {
          show: false
        },
        pointer: { //仪表盘指针
          show: 0,
        },
        detail: {
          show: 0,
        },
      },
      {
        name: '统计',
        type: 'gauge',
        splitNumber: 30, //刻度数量
        min: 0,
        max: 100,
        radius: '68%', //图表尺寸
        center: ['50%', '50%'],
        startAngle: 90,
        endAngle: -269.9999,
        axisLine: {
          show: true,
          lineStyle: {
            width: 0,
            shadowBlur: 0,
            color: [
              [0, '#0dc2fe'],
              [1, '#0dc2fe']
            ]
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#0dc2fe',
            width: 2
          },
          length: 20,
          splitNumber: 5
        },
        splitLine: {
          show: true,
          length: 20,
          lineStyle: {
            color: '#0dc2fe',
          }
        },
        axisLabel: {
          show: false
        },
        pointer: { //仪表盘指针
          show: 0,
        },
        detail: {
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 2,
          offsetCenter: [0, '0%'], // x, y，单位px
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: '#fff',
            fontSize: 30,
          },
          show: true,
          formatter: '{value}'
        },
        data: [2021]
      },
      {
        type: 'pie',
        zlevel: 20,
        silent: true,
        radius: ['60%', '59%'],
        hoverAnimation: false,
        color: '#2dc0c9',
        // animation:false,
        data: [1],
        labelLine: {
          normal: {
            show: false
          }
        }
      },
      {
        name: '中间环形图',
        type: 'pie',
        radius: ['35%', '55%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        itemStyle: {
          normal: {
            color: '#80ADD2',
            borderColor: '#3D4268',
          }
        },
        label: {
          normal: {
            formatter: '{b|{b}}\n{hr|}\n{c|{c}}',
            rich: {
              b: {
                fontSize: 14,
                align: 'left',
                padding: 4
              },
              hr: {
                borderColor: '#CCCCCC',
                width: '100%',
                borderWidth: 2,
                height: 0
              },
              c: {
                fontSize: 14,
                align: 'center',
                padding: 4,
              }
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '14',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 70,
            length2: 50,
          }
        },
        data: [
          {
            value: 27,
            name: '三务公开',
            itemStyle: {
              color: '#BCFDF7'
            }
          },
          {
            value: 27,
            name: '主题党日',
            itemStyle: {
              color: '#56CCFF'
            }
          },
          {
            value: 27,
            name: '支部党员大会',
            itemStyle: {
              color: '#6875F5'
            }
          },
          {
            value: 27,
            name: '党建研究',
            itemStyle: {
              color: '#67FF9A'
            }
          },
          {
            value: 27,
            name: '社区大党委',
            itemStyle: {
              color: '#B3D465'
            }
          },
          {
            value: 27,
            name: '办实事好事',
            itemStyle: {
              color: '#7557ED'
            }
          },
          {
            value: 27,
            name: '工作例会',
            itemStyle: {
              color: '#C858ED'
            }
          },
          {
            value: 27,
            name: '村集体经济',
            itemStyle: {
              color: '#01EF97'
            }
          }
        ]
      },
    ]
  };

  // function _pie1 () {
  //   let dataArr = [];
  //   for (var i = 0; i < 8; i++) {

  //     dataArr.push({
  //       name: (i + 1).toString(),
  //       value: 20,
  //       itemStyle: {
  //         normal: {
  //           color: "rgba(88,142,197,0.4)",
  //           borderWidth: 0,
  //           borderColor: "rgba(0,0,0,0)"
  //         }
  //       }
  //     })

  //   }
  //   return dataArr

  // }

  function _pie2 () {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        dataArr.push({
          name: (i + 1).toString(),
          value: 25,
          itemStyle: {
            normal: {
              color: "rgba(88,142,197,0.5)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      } else {
        dataArr.push({
          name: (i + 1).toString(),
          value: 20,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      }

    }
    return dataArr

  }

  function _pie3 () {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
      if (i % 2 === 0) {
        dataArr.push({
          name: (i + 1).toString(),
          value: 25,
          itemStyle: {
            normal: {
              color: "rgb(126,190,255)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      } else {
        dataArr.push({
          name: (i + 1).toString(),
          value: 20,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      }

    }
    return dataArr

  }



  //鼠标事件：'click'，'dblclick'，'mousedown'，'mouseup'，'mouseover'，'mouseout'，'globalout'。

  myChart.on('mouseover', function (params) {
    stopTimer();
  });

  myChart.on('mouseout', function (params) {
    startTimer();
  });


  var timer;

  function doing () {
    // let option = myChart.getOption();
    option.series[1].startAngle = option.series[1].startAngle - 1;
    option.series[3].startAngle = option.series[3].startAngle - 1;
    option.series[4].startAngle = option.series[4].startAngle - 1;
    // option.series[5].startAngle = option.series[5].startAngle - 1;
    // option.series[6].data[0].value = option.series[6].data[0].value + 1;
    myChart.setOption(option);

  }

  function startTimer () {

    timer = setInterval(doing, 100);

  }

  function stopTimer () {

    clearInterval(timer);

    xzTimer = null;

  }

  setTimeout(startTimer, 500);


  //4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}









