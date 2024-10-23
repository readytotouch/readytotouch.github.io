import chartCommonOptions from '../common/chart/components/chartCommonOptions'
import createData from '../common/chart/components/createData'
import chart from '../common/chart'

const pageViewsStatisticsData = createData(0, 30)
const subscribersStatisticsData = createData(0, 40)

const chartConfigs = [
  {
    selector: '.js-page-views-statistics',
    options: {
      ...chartCommonOptions,
      chart: { ...chartCommonOptions.chart, height: 254 },
      labels: pageViewsStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: pageViewsStatisticsData.map(item => item.x) }],
      colors: ['#8D6DFF'],
      fill: { ...chartCommonOptions.fill, colors: ['#8D6DFF'] },
      markers: { ...chartCommonOptions.markers, strokeColors: '#8D6DFF' },
      yaxis: { ...chartCommonOptions.yaxis, stepSize: 10 },
    },
  },
  {
    selector: '.js-page-vacancy-views-statistics',
    options: {
      ...chartCommonOptions,
      chart: { ...chartCommonOptions.chart, height: 360 },
      labels: pageViewsStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: pageViewsStatisticsData.map(item => item.x) }],
      colors: ['#8D6DFF'],
      fill: { ...chartCommonOptions.fill, colors: ['#8D6DFF'] },
      markers: { ...chartCommonOptions.markers, strokeColors: '#8D6DFF' },
      yaxis: { ...chartCommonOptions.yaxis, stepSize: 10 },
    },
  },
  {
    selector: '.js-subscribers-statistics',
    options: {
      ...chartCommonOptions,
      chart: { ...chartCommonOptions.chart, height: 254 },
      labels: subscribersStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: subscribersStatisticsData.map(item => item.x) }],
      colors: ['#5484FF'],
      fill: { ...chartCommonOptions.fill, colors: ['#5484FF'] },
      markers: { ...chartCommonOptions.markers, strokeColors: '#5484FF' },
      yaxis: { ...chartCommonOptions.yaxis, stepSize: 10 },
    },
  },
]

chart(chartConfigs)
