exports.isValidDate = date => {
  const isValidRegexDate = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/i.test(date)
  if (!isValidRegexDate) return false
  return new Date(date).toISOString().slice(0, 10) === date
}

exports.isValidDateLowestCurrent = date => {
  return new Date(date) > new Date()
}
