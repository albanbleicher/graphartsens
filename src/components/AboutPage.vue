<template>
    <div class="about">
        <h1>{{data.title}}</h1>
        <div class="about_card">
            <img :src="data.about_photo" alt="Photo de présentation">
            <div class="content" v-html="data.about_content"></div>
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
export default {
    mounted() {
        console.log(this.data)
    }, 
    props: {
        data: {
            type:Object,
            required:true
        }
    }
}
</script>