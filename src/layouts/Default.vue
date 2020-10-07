<template>
<div>
    <div class="layout">
    <nav>
      <img src="@/assets/images/logo.png" alt="GraphArtSens">
      <ul>
        <li><a href="#">Qui-suis-je ?</a></li>
        <li><a href="#">La graphothérapie</a></li>
        <li><a href="#">Les troubles de l'écriture</a></li>
        <li><a href="#">Questions fréquentes</a></li>
        <li><a href="#">Tarifs & Réservations</a></li>

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
query {
  metadata {
    siteName
  }
}
</static-query>
