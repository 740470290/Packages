export default (function () {
  return {
    get: function (u, c) {
      const x = new XMLHttpRequest()
      x.open('GET', u, true)
      x.send()
      x.onreadystatechange = function () {
        if (x.readyState === 4) {
          c(JSON.parse(x.response))
        }
      }
    },
    post: function (u, d, c) {
      const x = new XMLHttpRequest()
      x.open('POST', u, true)
      x.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
      let s = ''
      for (let i in d) {
        s += i + '=' + d[i] + '&'
      }
      x.send(s)
      x.onreadystatechange = function () {
        if (x.readyState === 4 && x.status === 200) {
          c(JSON.parse(x.response))
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
