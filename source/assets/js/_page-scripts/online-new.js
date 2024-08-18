import chartCommonOptions from '../common/chart/components/chartCommonOptions'
import createData from '../common/chart/components/createData'
import chart from '../common/chart'

const onlineStatisticsData = createData(0, 100)
const registrationStatisticsData = createData(0, 100)

const chartConfigs = [
  {
    selector: '.js-chart-online-statistics',
    options: {
      ...chartCommonOptions,
      height: 340,
      labels: onlineStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: onlineStatisticsData.map(item => item.x) }],
      colors: ['#8D6DFF'],
      fill: { ...chartCommonOptions.fill, colors: ['#8D6DFF'] },
      markers: { ...chartCommonOptions.markers, strokeColors: '#8D6DFF' },
    },
  },
  {
    selector: '.js-chart-registration-statistics',
    options: {
      ...chartCommonOptions,
      height: 340,
      labels: registrationStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: registrationStatisticsData.map(item => item.x) }],
      colors: ['#5484FF'],
      fill: { ...chartCommonOptions.fill, colors: ['#5484FF'] },
      markers: { ...chartCommonOptions.markers, strokeColors: '#5484FF' },
    },
  },
]

chart(chartConfigs)
