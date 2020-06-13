const argv = process.argv
const customSort = argv[2] //'asc' //'desc'
//node sort.js asc/desc

const numeric= [10, 9, 102, 66, 5421 , 1, 0]
const string= ["Wulan","Raharjo","Widya","Yuda","Cinta","Iskandar","Hidayat","Kusuma","Indah","Jusuf"]
const alphanumeric= ["Wulan","Raharjo","Widya",10,9,102,66,5421,1,0,"Yuda","Cinta","Iskandar","Hidayat","Kusuma","Indah","Jusuf"]

const separate = (arr, customSort) => {
  let number = []
  let string = []
  for (let i = 0;i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      number = [...number, arr[i]]
    } else if (typeof arr[i] == 'string') {
      string = [...string, arr[i]]
    }
  }
  if (customSort == 'asc') {
    return [...number, ...string]
  } else if (customSort == 'desc') {
    return [...string, ...number]
  }
}

const sort = (arr, customSort) => {
  let result = separate(arr, customSort)
    for (let i = 0; i < result.length - 1; i++){
      for (let j = i; j < result.length; j++) {
        if (customSort == 'asc') {
          if (result[i] > result[j]){
            [result[i], result[j]] = [result[j], result[i]]
          }
        } else if (customSort == 'desc') {
          if (result[i] < result[j]){
            [result[i], result[j]] = [result[j], result[i]]
          }
        }
      }
    }
  return result.join(', ')
}
console.log('=============numeric=============')
console.log(sort(numeric, customSort))
console.log('=============string==============')
console.log(sort(string, customSort))
console.log('============alphanumeric==========')
console.log(sort(alphanumeric, customSort))