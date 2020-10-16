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
      </ul>
    </nav>
    <slot/>
  </div>
  <div class="footer">
     <div class="footerModules">
        <div class="footerMenu">
        <ul>
          <li>Blog</li>
          <li><a href="#">Questions fréquentes</a></li>
        </ul>
      </div>
      <div class="footerInfos">
        <h2>Contact</h2>
        <p>06 00 00 00 00</p>
        <p>1, Rue de la fôret <br>
        75001 PARIS</p>
      </div>
     </div>
      <p>Estelle Charneau-Vachez | Graphothérapeute - Graph Art Sens — Tous droits réservés - <a href="#">Mentions légales</a></p>
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