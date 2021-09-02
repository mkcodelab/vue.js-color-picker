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
      let bars = document.querySelectorAll('.rangebar');
      // use destructuring
      let r = bars[0].value;
      let g = bars[1].value;
      let b = bars[2].value;
      let a = bars[3].value;
      let rgba = `rgba(${r},${g},${b},${a})`
      this.rgbaVal = rgba;
      this.rgba.r = r;
      this.rgba.g = g;
      this.rgba.b = b;
      this.rgba.a = a;
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