<template>
    <div class="sessions">
        <h1>{{data.title}}</h1>
        <div v-markdown="data.sessions_content"></div>
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