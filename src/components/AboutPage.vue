<template>
    <div class="about">
        <h1>{{data.title}}</h1>
        <div class="about_card">
            <img :src="data.about_photo" alt="Photo de présentation">
            <div class="content" v-html="html_content"></div>
        </div>
        <div class="diplomes" v-if='data.about_diplomes'>
            <h2>Mes diplômes et certifications</h2>
        <ul>
            <li v-for='diplome in data.about_diplomes' :key='diplome.about_diplome_name'>{{diplome.about_diplome_name}}</li>
        </ul>
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
    let text = this.data.about_content;
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