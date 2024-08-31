import ApexCharts from 'apexcharts'

export default chartConfigs => {
  chartConfigs.forEach(({ selector, options }) => {
    const element = document.querySelector(selector)
    if (element) {
      const chart = new ApexCharts(element, options)
      chart.render()
    }
  })
}
