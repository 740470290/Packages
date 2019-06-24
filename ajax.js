export default (function () {
  const f = 'http://172.17.14.250/api'
  return {
    get: function (u, c) {
      let x = new XMLHttpRequest()
      x.open('GET', f + u, true)
      x.withCredentials = true
      x.send()
      x.onreadystatechange = function () {
        if (x.readyState === 4) {
          c(JSON.parse(x.response))
          x = null
        }
      }
    },
    post: function (u, d, c) {
      let x = new XMLHttpRequest()
      x.open('POST', f + u, true)
      x.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
      let s = ''
      for (let i in d) {
        s += i + '=' + d[i] + '&'
      }
      x.send(s)
      x.onreadystatechange = function () {
        if (x.readyState === 4 && x.status === 200) {
          c(JSON.parse(x.response))
          x = null
        }
      }
    },
    jsonp: function (u, c) {
      const n = 'jsonp' + Math.random().toString().slice(2)
      const s = document.createElement('script')
      const h = document.head
      s.src = u + (u.includes('?') ? '&' : '?') + 'cb=' + n
      h.appendChild(s)
      window[n] = function (r) {
        c(r)
        delete window[n]
        h.removeChild(s)
      }
    }
  }
})()
