<template>
    <div class="about">
        <h1>{{data.title}}</h1>
            <div class="content" v-html="data.faq_desc"></div>
            <ul class="questions">
                <li v-for="question in data.questions" :key ='question.question_name'>
                    <div class="question_block">
                        <div class="question">{{question.question_name}}</div>
                        <div class="reponse">{{question.question_response}}</div>
                    </div>
                </li>
            </ul>
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