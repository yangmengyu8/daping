
// 3D柱状图
function workNum () {
  var city = ['呼图壁县', '玛纳斯县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒哈萨克自治州'];
  var event = ['支委会', '支部党员大会', '主题党日',
    '党课'];
  var data1 = [{ name: '支委会', value: [0, 0, 5] }, { name: '支部党员大会', value: [0, 1, 4] },
  { name: '主题党日', value: [0, 2, 8] }, { name: '党课', value: [0, 3, 7] }]
  var data2 = [{ name: '支委会', value: [1, 0, 5] }, { name: '支部党员大会', value: [1, 1, 6] },
  { name: '主题党日', value: [1, 2, 8] }, { name: '党课', value: [1, 3, 7] }]
  var data3 = [{ name: '支委会', value: [2, 0, 5] }, { name: '支部党员大会', value: [2, 1, 3] },
  { name: '主题党日', value: [2, 2, 8] }, { name: '党课', value: [2, 3, 7] }]
  var data4 = [{ name: '支委会', value: [3, 0, 5] }, { name: '支部党员大会', value: [3, 1, 7] },
  { name: '主题党日', value: [3, 2, 8] }, { name: '党课', value: [3, 3, 7] }]
  var data5 = [{ name: '支委会', value: [4, 0, 5] }, { name: '支部党员大会', value: [4, 1, 2] },
  { name: '主题党日', value: [4, 2, 8] }, { name: '党课', value: [4, 3, 7] }]
  var data6 = [{ name: '支委会', value: [5, 0, 5] }, { name: '支部党员大会', value: [5, 1, 1] },
  { name: '主题党日', value: [5, 2, 8] }, { name: '党课', value: [5, 3, 7] }]
  var data7 = [{ name: '支委会', value: [6, 0, 5] }, { name: '支部党员大会', value: [6, 1, 3] },
  { name: '主题党日', value: [6, 2, 8] }, { name: '党课', value: [6, 3, 7] }]
  // 1. 实例化对象
  const myChart = echarts.init(document.getElementById('bar'));
  // 2.指定配置
  const option = {
    tooltip: {},
    legend: {
      // data: ['呼图壁县', '玛纳斯县', '昌吉市', '阜康市', '吉木萨尔县', '奇台县', '木垒哈萨克自治州'],
      orient: 'vertical',
      left: 'left',
    },
    // visualMap: {
    //   show: false,
    //   max: 20,
    //   inRange: {
    //     color: ['#313695', '#00b0f0', '#fee090', '#f20071']
    //     // color: ['#313695', '#00b0f0', '#fee090', '#f20071', '#da323a', '#e78e00', '#fee090']
    //   }
    // },
    // 2021-3-15
    xAxis3D: {
      type: 'category',
      splitLine: {
        show: false // 控制平衡线
      },
      name: '',
      data: city
    },
    yAxis3D: {
      type: 'category',
      splitLine: {
        show: false // 控制平衡线
      },
      name: '',
      data: event
    },
    zAxis3D: {
      type: 'value',
      name: '',
      splitLine: {
        show: false // 控制平衡线
      }
    },
    // 2021-3-15
    grid3D: {
      top: -10,
      left: 0,
      show: true,
      width: '100%',
      height: '100%',
      boxWidth: 220,
      boxDepth: 80,
      boxHeight: 70,
      environment: 'auto',
      viewControl: {
        // projection: 'orthographic',
        //自动旋转
        autoRotate: false,
        beta: 15,
        alpha: 50,

        //控制场景平移旋转
        // alpha: 10,
        // minAlpha: 10,
        // maxAlpha: 10,
        // minBeta: 10,
        // maxBeta: 10
      },
      light: {
        main: {
          intensity: 1,
          //阴影
          // shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      }
    },
    // 2021-3-15
    series: [{
      name: '呼图壁县',
      type: 'bar3D',
      data: data1,
      shading: 'lambert',
      itemStyle: { color: '#fd4665' },
      label: {
        fontSize: 16,
        borderWidth: 1
      },

      emphasis: {
        label: {
          fontSize: 20,
          color: '#900',
        },
        itemStyle: {
          color: '#900'
        }
      }
    }, {
      name: '玛纳斯县',
      type: 'bar3D',
      data: data2,
      shading: 'lambert',
      itemStyle: { color: '#fc9f47' },
      label: {
        fontSize: 16,
        borderWidth: 1
      },

      emphasis: {
        label: {
          fontSize: 20,
          color: '#900',
        },
        itemStyle: {
          color: '#900'
        }
      }
    }, {
      name: '昌吉市',
      type: 'bar3D',
      data: data3,
      shading: 'lambert',
      itemStyle: { color: '#fcde47' },
      label: {
        fontSize: 16,
        borderWidth: 1
      },

      emphasis: {
        label: {
          fontSize: 20,
          color: '#900',
        },
        itemStyle: {
          color: '#900'
        }
      }
    }, {
      name: '阜康市',
      type: 'bar3D',
      data: data4,
      shading: 'lambert',
      itemStyle: { color: '#d1ff6f' },
      label: {
        fontSize: 16,
        borderWidth: 1
      },

      emphasis: {
        label: {
          fontSize: 20,
          color: '#900',
        },
        itemStyle: {
          color: '#900'
        }
      }
    }, {
      name: '吉木萨尔县',
      type: 'bar3D',
      data: data5,
      shading: 'lambert',
      itemStyle: { color: '#70ffe2' },
      label: {
        fontSize: 16,
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20,
          color: '#900',
        },
        itemStyle: {
          color: '#900'
        }
      }
    }, {
      name: '奇台县',
      type: 'bar3D',
      data: data6,
      shading: 'lambert',
      itemStyle: { color: '#70cbff' },
      label: {
        fontSize: 16,
        borderWidth: 1
      },

      emphasis: {
        label: {
          fontSize: 20,
          color: '#900',
        },
        itemStyle: {
          color: '#900'
        }
      }
    }, {
      name: '木垒哈萨克自治州',
      type: 'bar3D',
      data: data7,
      shading: 'lambert',
      itemStyle: { color: '#9270ff' },
      label: {
        fontSize: 16,
        borderWidth: 1
      },

      emphasis: {
        label: {
          fontSize: 20,
          color: '#900',
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



