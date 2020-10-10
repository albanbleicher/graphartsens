<template>
   <Layout>
      <div class="page">
        <AboutPage v-if='isAbout' :data="$page.data" />
        <SessionsPage v-if='isSessions' :data="$page.data" />
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
  }
}

</page-query>
<script>
import AboutPage from '@/components/AboutPage'
import SessionsPage from '@/components/SessionsPage'
export default {
  components: {
    AboutPage,
    SessionsPage
  },
  metaInfo() {
    return {
      title: this.$page.data.title,
    }
},
  data() {
    return {
      isAbout:null,
      isSessions:null
    } 
  },
  mounted() {
    console.log(this)
    switch (this.$page.data.id) {
      case "6baefc1112cce6fe474e93487511a477":
        this.isAbout=true;
        this.isSessions=false;
      break;
      case "100f801785f5bca731ce346dcbdc6982": 
        this.isSessions=true;
        this.isAbout=false;

    }
  }
}
</script>