<template>
    <div class="gallery">
        <h1>{{ data.title }}</h1>
    <div class="content" v-html="html_content"></div>

    <div class="gallery-block">
        <div v-for='(image, key) in data.gallery' :key='key' class="gallery-element">
            <img :src="image.image" :alt="image.desc">
            <p>{{image.desc}}</p>
        </div>
    </div>
    </div>
</template>
<script>
let showdown = require('showdown')
export default {
     data() {
    return {
      html_content:null
    }
  },
    mounted() {
        let converter = new showdown.Converter();
    let text = this.data.content;
    this.html_content = converter.makeHtml(text);
    console.log(this.data)
    },
    props: {
        data : {
            type: Object,
            required:true
        }
    }
}
</script>