<template>
   <Layout>
      <div class="page">
        <AboutPage :data="$page.data" />
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
  }
}

</page-query>
<script>
import AboutPage from '@/components/AboutPage'
export default {
  components: {
    AboutPage,
    isAbout:null
  },
  mounted() {
   console.log(this.$page.data)
  }
}
</script>