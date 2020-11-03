<template>
  <div class="faq">
    <h1>{{ data.title }}</h1>
    <div class="content" v-html="html_content"></div>
    <p>Cliquez sur une question pour voir la réponse</p>
    <ul class="questions">
      <li v-for="question in data.questions" :key="question.question_name">
        <div class="question_block">
          <div class="question">
            <span>{{ question.question_name }}</span
            ><span>+</span>
          </div>
          <div class="reponse hidden">
            {{ question.question_response }}
            <br>
            <br>
            <audio v-if="question.audio" :src="question.audio" type="audio/mpeg" controls> </audio>
          </div>
        </div>
      </li>
    </ul>
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
    let text = this.data.faq_desc;
    this.html_content = converter.makeHtml(text);
    console.log(this.data)

    let questions_block = document.querySelectorAll('.question_block')
    questions_block.forEach((item) => {
      item.querySelector('.question').addEventListener('click', () => {
        let reponse = item.querySelector('.reponse')
        if (reponse.classList.contains('hidden')) {
          reponse.classList.remove('hidden')
        } else {
          reponse.classList.add('hidden')
        }
      })
    })
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>