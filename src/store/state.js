let defaultCity = '上海'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log('读取城市失败')
}

export default {
  city: defaultCity
}
