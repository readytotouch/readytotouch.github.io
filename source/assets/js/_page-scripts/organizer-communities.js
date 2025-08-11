import chartCommonOptions from '../common/chart/components/chartCommonOptions.js'
import createData from '../common/chart/components/createData.js'
import chart from '../common/chart/index.js'

const pageViewsStatisticsData = createData(0, 30)

const communitiesType = document.querySelector('.js-communities-statistics').dataset.type
const chartColors = {
  go: '#00B6CE',
  rust: '#EE8700',
  scala: '#1C1F29',
  elixir: '#7B5AEC',
  clojure: '#4A79FF',
}

const chartConfigs = [
  {
    selector: '.js-communities-statistics',
    options: {
      ...chartCommonOptions,
      chart: { ...chartCommonOptions.chart, height: 254 },
      labels: pageViewsStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: pageViewsStatisticsData.map(item => item.x) }],
      colors: [chartColors[communitiesType]],
      fill: { ...chartCommonOptions.fill, colors: [chartColors[communitiesType]] },
      markers: { ...chartCommonOptions.markers, strokeColors: chartColors[communitiesType] },
      yaxis: { ...chartCommonOptions.yaxis, stepSize: 10 },
    },
  },
]

chart(chartConfigs)
