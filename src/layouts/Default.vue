<template>
<div>
    <div class="layout">
    <nav>
      <a href="/">
      <img src="@/assets/images/logo.png" alt="GraphArtSens">
      </a>
      <ul>
        <li v-for='item in $static.menu.edges' :key='item.node.key'><a :href="item.node.path">{{item.node.title}}</a></li>
        <li v-for='item in $static.menu_settings.edges' :key='item.node.key'><a :href="item.node.path">{{item.node.title}}</a></li>

      </ul>
    </nav>
    <slot/>
  </div>
  <div class="footer">
      <p>Estelle Charneau-Vachez - Graphothérapeute | Graph Art Sens - Tous droits réservés</p>
    </div>
</div>
</template>

<static-query>
query getMenu {
  menu:allContentPage(sortBy: "title", order: DESC, filter: {isInMenu: {eq:true}}) {
    edges {
      node {
        title
        path
       id 
      }
    }
  }
  menu_settings:allSettingPage(sortBy: "title", order: DESC, filter: {isInMenu: {eq:true}}) {
    edges {
      node {
        title
        path
       id 
      }
    }
  }
}
</static-query>

<script>
export default {
  mounted() {
    console.log(this)
  }
 }
</script>