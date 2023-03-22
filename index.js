var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    var app = {};
    var option;

    option = {
  series: [
    {
      name: 'Indicator',
      type: 'gauge',
      min: -40,
      max: 120,
      detail: {
        formatter: '{value} °C'
      },

      data: [
        {
          value: 62,
          name: 'Temperature °C',
          detail: {
            show: true,
            fontSize: 18
          }
        }
      ],

      center: ['50%', '50%'],
      radius: '50%',
      startAngle: 220,
      endAngle: -40,
      splitNumber: 16,
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [0.31, '#2e9cf0'],
            [0.72, '#2ef08c'],
            [1, '#fd666d']
          ]
        }
      },

      progress: {
        clip: true,
        itemStyle: {
          borderColor: 'rgba(0, 97, 253, 1)',
          borderWidth: 4
        }
      },

      splitLine: {
        show: true,
        length: '10%'
      },

      axisTick: {
        length: 10
      },

      axisLabel: {
        distance: 20,
        fontStyle: 'italic',
        fontFamily: 'monospace',
        fontSize: 15
      },
      
      pointer: {
        show: true,
        length: '90%',
        itemStyle: {
          color: 'rgba(226, 21, 21, 1)'
        }
      },

      anchor: {
        show: true,
        showAbove: true,
        size: 6,
        keepAspect: false,
        itemStyle: {
          color: 'rgba(211, 211, 211, 1)'
        }
      }
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);