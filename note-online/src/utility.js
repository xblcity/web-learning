export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'

export const padLeft = (n) => {
  return n < 10 ? ('0'+n) : n
}

export const numberRange = (length, start=0) => {
  const arr =[]
  for(let i = start; i < start+length; i ++) {
    arr.push(i)
  }
  return arr
}