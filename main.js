const app = Vue.createApp({
  data() {
    return {
      color: '#202',
      rgbaCard: true,
      hslaCard: false,
      hexaCard: false,
      rgba: {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      },
      hsla: {
        h: 0,
        s: 0,
        l: 0,
        a: 0,
      },
      rgbaVal: 'rgba(0, 0, 0, 0)',
      hslaVal: 'hsla(0, 0%, 0%, 0)',
      hexaVal: '#00000000',
    
    }
  },
  methods: {
    rgbaOn(){
      this.hslaCard = this.hexaCard = false
      this.rgbaCard = true
      
    },
    hslaOn() {
      this.rgbaCard = this.hexaCard = false
      this.hslaCard = true
    },
    hexaOn() {
      this.rgbaCard = this.hslaCard = false
      this.hexaCard = true
      this.hexaUpdateVal()
    },
    rgbUpdateVal() {
      this.rgbaVal = `rgba(${this.rgba.r}, ${this.rgba.g}, ${this.rgba.b}, ${this.rgba.a})`
    },
    hslaUpdateVal() {
      this.hslaVal = `hsla(${this.hsla.h}, ${this.hsla.s}%, ${this.hsla.l}%, ${this.hsla.a})`
    },
    hexaUpdateVal() {
      // todo: add statements for 0 values
      let rHex = parseInt(this.rgba.r)
      let gHex = parseInt(this.rgba.g)
      let bHex = parseInt(this.rgba.b)
      let aHex = parseFloat(this.rgba.a)
      // red
      if (rHex === 0){
        rHex = '00'
      } else {
        rHex = parseInt(rHex).toString(16)
      }
      // green
      if (gHex === 0) {
        gHex = '00'
      } else {
        gHex = parseInt(gHex).toString(16)
      }
      // blue
      if (bHex === 0) {
        bHex = '00'
      } else {
        bHex = parseInt(bHex).toString(16)
      }
      // alpha
      if (aHex === 1) {
        // if alpha is 1, remove it
        aHex = ''
      } else if (aHex === 0) {
        aHex = '00'
      }
      else {
        // multiply decimal alpha by 255 to get 0 - 255 range, then convert to hex
        aHex = Math.floor(this.rgba.a * 255).toString(16)
      }

      // console.log(aHex)
      this.hexaVal = `#${rHex}${gHex}${bHex}${aHex}`.toUpperCase()
      // console.log(this.hexaVal)
    }
   
  },
  computed: {
    createSatBgString() {
      return `linear-gradient(90deg, hsl(${this.hsla.h}, 0%, ${this.hsla.l}%), hsl(${this.hsla.h}, 100%, 50%))`
    },
    createAlphaBgString() {
      return `linear-gradient(to right, transparent, hsl(${this.hsla.h}, ${this.hsla.s}%, ${this.hsla.l}%))`
    }
  }
})

app.mount('#app')