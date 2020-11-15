<template>
<div>
    <div class="layout" id='top'>
    <nav>
      <a class="logo-link" href="/">
      <img src="@/assets/images/logo.png" alt="GraphArtSens">
      <a href="/">Accueil</a>
      </a>
      <ul>
        <li v-for='(item,i) in menu' :key='i'><a :href="item.path">{{item.title}}</a></li>
        <li class="responsive close"><a href="#">Fermer le menu</a></li>
      </ul>
      <a href="#" class="responsive open">Menu</a>
    </nav>
    <slot/>
  </div>
  <div class="footer">
     <div class="footerModules">
       <div class="footer-module">
          <div class="footerMenu">
       <img :src="require('@/assets/images/card.png')" alt="Carte de visite">
       <br>
        <span><a href="mailto:ecv-graphartsens@orange.fr">ecv-graphartsens@orange.fr</a></span>
      </div>
       </div>
      <div class="footer-module">
        <div class="title">
        <h3>Me contacter</h3>
        <p>Accompagnement à mon bureau ou à votre domicile</p>
      </div>
      </div>
      
      <div class="footer-module">
        <div class="footerInfos">
       <img :src="require('@/assets/images/contact.png')" alt="Contact">

        <p>☎ 06 87 32 17 90</p>
        <div class="arrow-up">
          <p class="label hidden">Revenir en haut</p>
          <a class="arrow-up-link" @click='handleUp' title="Revenir en haut">↑</a>
        </div>
      </div>
      </div>
     </div>
      <p>Estelle Charneau-Vachez | Graphothérapeute - Graph Art Sens — Tous droits réservés - <a href="/mentions-legales">Mentions légales</a> | SIRET : 890 594 336 00012</p>
    </div>
</div>
</template>

<static-query>
query getMenu {
    newMenu : allMenus {
    edges {
      node {
        list {
          type
          page
          information
        }
      }
    }
  }
}
</static-query>

<script>
import slugify from 'slugify'
export default {
  data() {
    return {
      menu:[]
    }
  },
  mounted() {
    let arrow = document.querySelector('.arrow-up-link');
    arrow.addEventListener('mouseenter', () => {
      document.querySelector('.label').classList.remove('hidden')
    })
    arrow.addEventListener('mouseleave', () => {
      document.querySelector('.label').classList.add('hidden')
    })

    this.$static.newMenu.edges[0].node.list.forEach(item => {
      let data;
      if(item.type === "page") {
        data = JSON.parse(item.page)
        data.path = "/pages/"+slugify(data.title.toLowerCase().replace("'","-"))

      }
      else {
        data = JSON.parse(item.information)
        data.path = "/"+slugify(data.title.toLowerCase().replace("'","-"))
      }
      this.menu.push(data)
    })
    console.log(this.menu)
    document.querySelector('.open').addEventListener('click', () => {
      document.querySelector('nav ul').style.display='block'
    })
    document.querySelector('.close').addEventListener('click', () => {
      document.querySelector('nav ul').style.display='none'
    })
  },
  methods: {
    handleUp() {
      console.log(window)
      window.scrollTo(0,0)
    } 
  }
}
</script>