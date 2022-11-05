export class Draw {
  constructor(el, width = '', height = '', doc = document ? document : '', win = window ? window : '') {
    this.el = el
    if (!doc) {
      doc = { clientWidth: 500, clientHeight: 500 }
      console.error('没有自动获取到文档对象,请手动传入')
    } else if (!width && !height && win) {
      this.doc = doc
      if (!win) {
        console.error('没有自动获取到window对象,请手动传入')
      } else {
        this.win = win
        this.resize()
      }
    }
    width = width ? width : (document.documentElement.clientWidth)
    height = height ? height : (document.documentElement.clientHeight)

    this.width = width
    this.height = height

    this.el.width = width
    this.el.height = height

    this.canvas = this.el.getContext('2d')

  }
  resize () {
    // console.log(this.el)
    window.onresize = () => {
      const { clientWidth: w, clientHeight: h } = this.doc.documentElement
      // console.log(w, h, this)
      this.el.width = w
      this.el.height = h
      this.width = w
      this.height = h
      console.log(this)
      this.init()
    }
  }
}

export const $ = (str) => {
  return document.querySelector(str)
}