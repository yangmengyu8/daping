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



