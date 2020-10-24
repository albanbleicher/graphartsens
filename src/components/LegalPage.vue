<template>
    <div class="legal">
        <h1>{{data.title}}</h1>
        <div class="content" v-html="html_content"></div>
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
    
    }, 
    props: {
        data: {
            type:Object,
            required:true
        }
    }
}
</script>