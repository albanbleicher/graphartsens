<template>
   <Layout>
      <div class="page">
        <AboutPage v-if='isAbout' :data="$page.data" />
        <SessionsPage v-if='isSessions' :data="$page.data" />
        <FaqPage v-if='isFaq' :data="$page.data" />
        <LegalPage v-if='isLegal' :data="$page.data" />
        <AccPage v-if='isAcc' :data="$page.data" />
      </div>
   </Layout>
</template>
<page-query>
query getSettingPageContent($path: String!) {
  data:settingPage(path:$path) {
    title
    id
    content 
    header_photo

    gallery {
          desc
          image
        }

    about_photo
    about_content
    about_diplomes {
      about_diplome_name
    }

  testimonials {
    testi_audio
   author
   }
   sessions_content
    faq_desc
      	questions {
          question_name
          question_response
          audio
        }
  }
}

</page-query>
<script>
import AboutPage from '@/components/AboutPage'
import SessionsPage from '@/components/SessionsPage'
import FaqPage from '@/components/FaqPage'
import LegalPage from '@/components/LegalPage'
import AccPage from '@/components/AccPage'
export default {
  components: {
    AboutPage,
    SessionsPage,
    FaqPage,
    LegalPage,
    AccPage
  },
  metaInfo() {
    return {
      title: this.$page.data.title,
    }
},
  data() {
    return {
      isAbout:null,
      isSessions:null,
      isFaq:null,
      isLegal:null,
      isAcc:false
    } 
  },
  mounted() {  
    console.log(this)
    this.togglePage()
  document.querySelector('.layout').style.backgroundImage='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('+this.$page.data.header_photo+')';
document.querySelector('.layout').style.backgroundPosition='top'

  },
  updated() {
    this.togglePage()
  document.querySelector('.layout').style.backgroundImage='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('+this.$page.data.header_photo+')';
document.querySelector('.layout').style.backgroundPosition='top'

  },
  methods: {
    togglePage() {
        switch (this.$page.data.id) {
      case "6baefc1112cce6fe474e93487511a477":
        this.isAbout=true;
        this.isSessions=false;
        this.isFaq = false;
        this.isLegal=false;
        this.isAcc=false;
      break;
      case "100f801785f5bca731ce346dcbdc6982": 
        this.isSessions=true;
        this.isAbout=false;
        this.isFaq=false;
        this.isLegal=false;
        this.isAcc=false;
      break;
      case "773670555fad69780a5e77ec922c0f45": 
        this.isSessions=false;
        this.isAbout=false;
        this.isFaq=true;
        this.isLegal=false;
        this.isAcc=false;
        break;
        case "5dbd6e66c898476984ca834bd4d78281": 
          this.isSessions=false;
        this.isAbout=false;
        this.isFaq=false;
        this.isLegal=true;
        this.isAcc=false;
        break;
        case "86b1533bde4591da37553f4708c92f7d": 
          this.isSessions=false;
        this.isAbout=false;
        this.isFaq=false;
        this.isLegal=false;
        this.isAcc=true;
        }
        
    }
  }
}
</script>