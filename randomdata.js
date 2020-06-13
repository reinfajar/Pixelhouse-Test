const argv = process.argv
const indexArr = argv[2]
const dataIndex = argv[3]
// node randomdata.js 2 3

const stringArr = ",Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf,"

const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array;
}

const randomArr = (indexArr, dataIndex) => {
  const arr = stringArr.split(',')
  for (let i = 0; i <= arr.length;i++) {
    if(arr[i] == '') {
      arr.splice( i, i+1)
      i = 0
    }
  }
  let shuffledArr = shuffle(arr)
  const result = []
  for (let i = 0; i < indexArr; i++) {
    for (let j = 0; j < dataIndex; j++){
      if(result[i] == undefined) {
        result[i] = shuffledArr[j]
      } else {
        result[i] += ` ${shuffledArr[j]}`
      }
    }
    shuffledArr.splice(0, dataIndex)
  }
  return result
}

console.log(randomArr(indexArr, dataIndex))