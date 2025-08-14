import getRandomIntegerInclusive from '../../../functions/getRandomIntegerInclusive.js'

export default (min, max) => {
  const date = new Date()
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  return Array.from({ length: daysInMonth }, (_, i) => {
    const futureDate = new Date(date)
    futureDate.setDate(date.getDate() + i)

    const day = futureDate.getDate()
    const month = futureDate.getMonth() + 1
    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `.0${month}` : `.${month}`

    return {
      x: getRandomIntegerInclusive(min, max),
      y: `${formattedDay}${formattedMonth}`,
    }
  })
}
