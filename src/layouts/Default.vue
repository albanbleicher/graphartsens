<template>
<div>
    <div class="layout">
    <nav>
      <a href="/">
      <img src="@/assets/images/logo.png" alt="GraphArtSens">
      </a>
      <ul>
        <li v-for='item in $static.menu.edges' :key='item.node.key'><g-link :to="item.node.path">{{item.node.title}}</g-link></li>
        <li v-for='item in $static.menu_settings.edges' :key='item.node.key'><g-link :to="item.node.path">{{item.node.title}}</g-link></li>
        <li class="responsive close"><a href="#">Fermer le menu</a></li>
      </ul>
      <a href="#" class="responsive open">Menu</a>
    </nav>
    <slot/>
  </div>
  <div class="footer">
     <div class="footerModules">
        <div class="footerMenu">
        <!-- <ul>
          <li>Blog</li>
          <li><a href="#">Questions fréquentes</a></li>
        </ul> -->
      </div>
      <div class="footerInfos">
        <h2>Contact</h2>
        <p>06 87 32 17 90</p>
      </div>
     </div>
      <p>Estelle Charneau-Vachez | Graphothérapeute - Graph Art Sens — Tous droits réservés - <a href="/mentions-legales">Mentions légales</a></p>
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
    document.querySelector('.open').addEventListener('click', () => {
      document.querySelector('nav ul').style.display='block'
    })
    document.querySelector('.close').addEventListener('click', () => {
      document.querySelector('nav ul').style.display='none'
    })
  }
}
</script>