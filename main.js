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
      hexaVal: '#000000',
    
    }
  },
  methods: {
    rgbaOn(){
      this.hslaCard = this.hexaCard = false;
      this.rgbaCard = true;
      
    },
    hslaOn() {
      this.rgbaCard = this.hexaCard = false;
      this.hslaCard = true;
    },
    hexaOn() {
      this.rgbaCard = this.hslaCard = false;
      this.hexaCard = true;
    },
    rgbUpdateVal() {
      this.rgbaVal = `rgba(${this.rgba.r}, ${this.rgba.g}, ${this.rgba.b}, ${this.rgba.a})`;
    },
    hslaUpdateVal() {
      this.hslaVal = `hsla(${this.hsla.h}, ${this.hsla.s}%, ${this.hsla.l}%, ${this.hsla.a})`;
    },
   
  },
  computed: {
    createSatBgString() {
      return `linear-gradient(90deg, hsl(${this.hsla.h}, 0%, ${this.hsla.l}%), hsl(${this.hsla.h}, 100%, 50%))`;
    },
    createAlphaBgString() {
      return `linear-gradient(to right, transparent, hsl(${this.hsla.h}, ${this.hsla.s}%, ${this.hsla.l}%))`;
    }
  }
})

app.mount('#app')