<template>
  <div class="sessions">
    <h1>{{ data.title }}</h1>
    <div v-html="html_content"></div>
    <!-- 
        <div v-if='data.tarifs' class="tarifs">
            <div v-for='item in data.tarifs' :key='item.sessions_tarif_name' class="tarif-element">
                <div class="tarif-header">
                    <h3>{{item.sessions_tarif_name}}</h3>
                <p class="price">{{item.sessions_tarif_price}}€</p>

                </div>
                <p>{{item.sessions_tarif_desc}}</p>
                <a href="tel:0687321790">
<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' width='20' viewBox='0 0 512 512'><title>Call</title><path d='M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='40'/></svg>Me contacter</a>
            </div>
        </div> -->
    <div class="testimonials">
        <h2>Témoignages de patients</h2>
      <div
        class="testimonial-element"
        v-for="(testi, key) in data.testimonials"
        :key="key"
      >
        <h3>{{ testi.author }}</h3>
        <audio controls>
          <source :src="testi.testi_audio" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  </div>
</template>
<script>
let showdown = require('showdown')
export default {
  data() {
    return {
      html_content: null,
    }
  },
  mounted() {
    console.log(this.data)
    // data.sessions_content
    let converter = new showdown.Converter()
    let text = this.data.sessions_content
    this.html_content = converter.makeHtml(text)
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>