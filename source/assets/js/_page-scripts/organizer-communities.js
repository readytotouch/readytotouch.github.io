import chartCommonOptions from '../common/chart/components/chartCommonOptions'
import createData from '../common/chart/components/createData'
import chart from '../common/chart'

const pageViewsStatisticsData = createData(0, 30)

const chartConfigs = [
  {
    selector: '.js-page-views-statistics',
    options: {
      ...chartCommonOptions,
      chart: { ...chartCommonOptions.chart, height: 254 },
      labels: pageViewsStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: pageViewsStatisticsData.map(item => item.x) }],
      colors: ['#00B6CE'],
      fill: { ...chartCommonOptions.fill, colors: ['#00B6CE'] },
      markers: { ...chartCommonOptions.markers, strokeColors: '#00B6CE' },
      yaxis: { ...chartCommonOptions.yaxis, stepSize: 10 },
    },
  },
]

chart(chartConfigs)
