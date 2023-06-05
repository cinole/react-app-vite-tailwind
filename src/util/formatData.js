import BigNumber from 'bignumber.js'
import moment from 'moment'
import numeral from 'numeral'

const format = 'DD MMM YYYY, HH:mm a'

export const tsTime = (data) =>
  parseInt(Date.parse(moment.utc(data).format(format)))

export const parseNumberEther = (data) =>
  new BigNumber(data).dividedBy(10 ** 18).toNumber(10)

export const formatNumberFloat = (value) => {
  return value?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') || ''
}

export const parseBoolean = (data) => {
  if (data === 'false') {
    return false
  }

  if (data === 'true') {
    return true
  }
}

export const countMod = (data) => {
  if (!data) return 1
  const count = data.toString().split('.')[1]?.length || 0
  return count
}

export const threeDots = (
  str,
  n = 13,
  frontChars = 6,
  backChars = 3,
  separator = '...'
) => {
  if (!str) return ''

  const sep = separator || '...'
  const sepLen = sep.length
  if (str.length < n - sepLen) {
    return str
  }
  return str.substr(0, frontChars) + sep + str.substr(str.length - backChars)
}

export const formatNumber = (number, rate, key) => {
  const typeEmty = 0
  if (BigNumber(number).isEqualTo(0)) {
    return key === 'usd' ? '$0' : typeEmty
  }

  if (rate) {
    number = BigNumber(number).times(rate).toNumber()
  }
  if (BigNumber(number).lt(0.00001)) {
    number = 0
  }

  let format = '0,000.[000]'
  if (number > 10000) format = '0.[000]a'
  if (number < 1) format = '0.[000]'

  if (key === 'long') {
    format = '0,000.[00]'
    if (number < 1) format = '0.[00000]'
  }

  if (key === 'usd') {
    format = '$(0.[00])'
    if (number > 1000) format = '$(0.[0]a)'
    if (number < 1) format = '$(0.[0000])'
  }

  if (key === 'usd-long') {
    format = '$(0,000.[00])'
    if (number < 1) format = '$(0.[0000])'
  }

  if (key === 'percent') format = '(0.[00])%'
  if (key === 'percent-short') format = '(0)%'

  return numeral(number).format(format).toUpperCase()
}

export const numberUnitFormat = (num, digits = 3) => {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break
    }
  }
  return (
    (num / si[i].value).toFixed(digits).replace(rx, '$1') + ' ' + si[i].symbol
  )
}
