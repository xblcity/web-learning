export default (str) => {
  // let arr = str.split(/\s/g)
  let arr = str.match(/[\w']+/g)
  let result = arr.map(item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}
