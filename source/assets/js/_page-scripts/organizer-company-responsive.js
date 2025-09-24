import chartCommonOptions from '../common/chart/components/chartCommonOptions.js'
import createData from '../common/chart/components/createData.js'
import chart from '../common/chart/index.js'

const pageViewsStatisticsData = createData(0, 30)

const chartConfigs = [
  {
    selector: '.js-page-views-statistics',
    options: {
      ...chartCommonOptions,
      chart: { ...chartCommonOptions.chart, height: 254 },
      labels: pageViewsStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: pageViewsStatisticsData.map(item => item.x) }],
      colors: ['#5484FF'],
      fill: { ...chartCommonOptions.fill, colors: ['#5484FF'] },
      markers: { ...chartCommonOptions.markers, strokeColors: '#5484FF' },
      yaxis: { ...chartCommonOptions.yaxis, stepSize: 10 },
    },
  },
]

chart(chartConfigs)
