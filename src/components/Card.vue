<template>
  <div id="card">
    <md-card>
      <md-card-header>
        <md-avatar>
          <img :src="avatarImgUrl"  />
        </md-avatar>
        <div class="md-title">{{ user }}</div>
      </md-card-header>
    
    <md-card-media-cover>
      <md-card-media >
        <img class="scale-img"
          :src="productImgUrl"
          alt="Product"
        />
      </md-card-media>
      <md-card-area>
          <md-card-header>
            <span class="md-title">{{ desc }}</span>
          </md-card-header>
      </md-card-area>
    </md-card-media-cover>

      <md-card-content align="right">
        <span class="price">{{ price }}&euro;</span>
        <md-badge md-content="1">
            <md-button class="md-icon-button">
            <md-icon><span class="likes"><i class="far fa-comment"></i></span></md-icon>
            </md-button>
            <md-button class="md-icon-button">
            <md-icon><span class="likes"><i class="far fa-heart"></i></span></md-icon>
            </md-button>
        </md-badge>
      </md-card-content>

    </md-card>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from '../../node_modules/fortawesome/vue-fontawesome'


export default {
  name: "Card",
  props: {
    avatarImgUrl: String,
    user: String,
    productImgUrl: String,
    desc: String,
    price: Number
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
    .md-title {
        float: left;
        font-size: 25px;;
    }
    .md-card-header {
        margin-bottom: 30px;
    }
    .scale-img {
        object-fit: cover;
        width: 100%;
    }
    img {
        max-height: 400px;
    }
    .md-card {
        margin: 15px;
    }
    .price {
        float: left;
        padding: 10px;
    }
    .likes {
        float: right !important;
        font-size: 20px;
    }
</style>
