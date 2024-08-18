import ApexCharts from 'apexcharts'
import getRandomIntegerInclusive from '../functions/getRandomIntegerInclusive'

const date = new Date()
const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

const createData = () =>
  Array.from({ length: daysInMonth }, (_, i) => {
    const futureDate = new Date(date)
    futureDate.setDate(date.getDate() + i)

    const day = futureDate.getDate()
    const month = futureDate.getMonth() + 1
    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `.0${month}` : `.${month}`

    return {
      x: getRandomIntegerInclusive(0, 100),
      y: `${formattedDay}${formattedMonth}`,
    }
  })

const onlineStatisticsData = createData()
const registrationStatisticsData = createData()

const commonOptions = {
  chart: {
    type: 'area',
    height: 340,
    zoom: { enabled: false },
    toolbar: { show: false },
    parentHeightOffset: null,
  },
  stroke: {
    width: 2,
    curve: 'straight',
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.65,
      opacityTo: 0.3,
    },
  },
  dataLabels: { enabled: false },
  xaxis: {
    type: 'datey',
    axisTicks: {
      show: false,
    },
    labels: {
      style: { cssClass: 'stats__labels' },
    },
    axisBorder: {
      color: '#efeff5',
    },
  },
  yaxis: {
    stepSize: 20,
    labels: {
      style: { cssClass: 'stats__labels' },
    },
  },
  grid: {
    borderColor: '#efeff5',
  },
  markers: {
    size: 4,
    colors: ['#fff'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDasharray: 1,
    fillOpacity: 1,
    shape: 'circle',
    radius: 2,
  },
}

const chartConfigs = [
  {
    selector: '.js-chart-online-statistics',
    options: {
      ...commonOptions,
      labels: onlineStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: onlineStatisticsData.map(item => item.x) }],
      colors: ['#8D6DFF'],
      fill: { ...commonOptions.fill, colors: ['#8D6DFF'] },
      markers: { ...commonOptions.markers, strokeColors: '#8D6DFF' },
    },
  },
  {
    selector: '.js-chart-registration-statistics',
    options: {
      ...commonOptions,
      labels: registrationStatisticsData.map(item => item.y),
      series: [{ name: 'Views', data: registrationStatisticsData.map(item => item.x) }],
      colors: ['#5484FF'],
      fill: { ...commonOptions.fill, colors: ['#5484FF'] },
      markers: { ...commonOptions.markers, strokeColors: '#5484FF' },
    },
  },
]

chartConfigs.forEach(({ selector, options }) => {
  const element = document.querySelector(selector)
  if (element) {
    const chart = new ApexCharts(element, options)
    chart.render()
  }
})
