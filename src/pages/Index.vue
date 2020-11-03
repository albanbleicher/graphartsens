<template>
  <Layout>

    <!-- <img src="@/assets/images/banner/header-1.jpeg" alt="(re)">
    <img src="@/assets/images/banner/header-2.jpeg" alt="trouver">
    <img src="@/assets/images/banner/header-3.jpeg" alt="le plaisir">
    <img src="@/assets/images/banner/header-4.jpeg" alt="d'écrire"> -->
    <section class="landing-first">
      <span>Estelle Charneau-Vachez - Graphothérapeute</span>
      <p>Je rencontre des perturbations dans mon écriture,</p>
      <p>il existe des solutions pour y remédier.</p>
    </section>
    <section class="content" v-for='(item, key) in $static.content.edges' :key="key">
      <h2>{{item.node.title}}</h2>
      <p v-html='item.node.excerpt'></p>
      <a :href="item.node.path">En savoir +</a>
    </section>
  </Layout>
</template>
<static-query>
query getExcerpts {
  content:allContentPage(filter: {isOnHomepage: {eq:true}}, order:DESC) {
    edges {
      node {
        title
        excerpt
        path
      }
    }
  }
}
</static-query>
<script>
export default {
  metaInfo: {
    title: 'Estelle Charneau-Vachez | Graphothérapeute'
  },
}
</script>


