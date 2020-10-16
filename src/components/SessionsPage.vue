<template>
    <div class="sessions">
        <h1>{{data.title}}</h1>
        <div v-html="html_content"></div>

        <div class="tarifs">
            <div v-for='item in data.tarifs' :key='item.sessions_tarif_name' class="tarif-element">
                <div class="tarif-header">
                    <h3>{{item.sessions_tarif_name}}</h3>
                <p class="price">{{item.sessions_tarif_price}}€</p>

                </div>
                <p>{{item.sessions_tarif_desc}}</p>
                <a href="#">Réserver cette prestation</a>
            </div>
        </div>
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