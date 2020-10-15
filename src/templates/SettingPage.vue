<template>
   <Layout>
      <div class="page">
        <AboutPage v-if='isAbout' :data="$page.data" />
        <SessionsPage v-if='isSessions' :data="$page.data" />
        <FaqPage v-if='isFaq' :data="$page.data" />
      </div>
   </Layout>
</template>
<page-query>
query getSettingPageContent($path: String!) {
  data:settingPage(path:$path) {
    title
    id
    
    about_photo
    about_content
    about_diplomes {
      about_diplome_name
    }

    sessions_content
      tarifs {
          sessions_tarif_name
          sessions_tarif_desc
          sessions_tarif_price
        }
    faq_desc
      	questions {
          question_name
          question_response
        }
  }
}

</page-query>
<script>
import AboutPage from '@/components/AboutPage'
import SessionsPage from '@/components/SessionsPage'
import FaqPage from '@/components/FaqPage'
export default {
  components: {
    AboutPage,
    SessionsPage,
    FaqPage
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
    } 
  },
  mounted() {
    console.log(this)
    switch (this.$page.data.id) {
      case "6baefc1112cce6fe474e93487511a477":
        this.isAbout=true;
        this.isSessions=false;
        this.isFaq = false;
      break;
      case "100f801785f5bca731ce346dcbdc6982": 
        this.isSessions=true;
        this.isAbout=false;
        this.isFaq=false;
      break;
      case "773670555fad69780a5e77ec922c0f45": 
        this.isSessions=false;
        this.isAbout=false;
        this.isFaq=true;

    }
  }
}
</script>