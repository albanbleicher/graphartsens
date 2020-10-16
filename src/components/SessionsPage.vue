<template>
    <div class="sessions">
        <h1>{{data.title}}</h1>
        <div v-html="html_content"></div>
    </div>
</template>
<script>
let showdown = require('showdown')

export default {
    data(){
        return {
            html_content:null
        }
    }, 
    mounted() {
        console.log(this.data)
        // data.sessions_content
        let converter = new showdown.Converter();
        let text = this.data.sessions_content;
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