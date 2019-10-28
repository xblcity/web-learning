// 随机生成16进制色
function randomHexString() {
  const colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"
  const colorArray = colorValue.split(',')
  let color = ''
  for (let i = 0; i < 6; i++) {
    color += colorArray[Math.floor(Math.random() * 16)]
  }
  return color
}
// 去列表最小高度下标
function getMinPic(list) {
  let minIndex = 0
  for (let i = 0; i < list.length; i++) {
    // 由于是
    if (list[minIndex].offsetHeight > list[i].offsetHeight) {
      minIndex = i
    }
  }
  return minIndex
}

// picList节点
let picList = []
let container = document.querySelector('.container')
function createHTML() {
  let divTag = document.createElement("div")
  divTag.className = 'pic-box'
  divTag.innerHTML = `<img src="http://via.placeholder.com/100x${Math.floor((Math.random() * 200 + 50))}/${randomHexString()}/${randomHexString()}" class='pic'></img>`
  return divTag
}
function insertHTML() {
  for (let i = 0; i < 6; i++) {
    let currentPic = createHTML()
    container.append(currentPic)
    picList = [...picList, currentPic]
  }
}

// 排列
const rowLength = 3
function arrange() {
  // let rowList = []
  // for (let i = 0; i < rowLength; i++) {
  //   rowList = [...rowList, picList[i]]
  // }
  let pointer = getMinPic(picList.slice(0, 3)) // 最小高度元素下标

  for (let i = rowLength; i < picList.length; i++) {
    picList[i].style.position = 'absolute'
    picList[i].style.left = `${picList[pointer].offsetLeft}px`
    picList[i].style.top = `${picList[pointer].offsetTop + picList[i].offsetHeight}px`

    picList[pointer].offsetTop = picList[pointer].offsetTop + picList[i].offsetHeight

    pointer = getMinPic(picList.slice(rowLength, i + rowLength))
    console.log(i, pointer)
  }
}

createHTML()
insertHTML()
setTimeout(arrange, 3000)