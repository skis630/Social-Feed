<template>
  <div id="card">
    <md-card>
      <md-card-header>
        <md-avatar>
          <img :src="avatarImgUrl" />
        </md-avatar>
        <div class="md-title">{{ user }}</div>
      </md-card-header>

      <md-card-media-cover>
        <md-card-media>
          <img class="scale-img" :src="productImgUrl" alt="Product" />
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ desc }}</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>

      <md-card-content align="right">
        <span class="price">&euro;{{ price }}</span>
        <action-btn
          actionType="comment"
          iconClass="far fa-comment"
        ></action-btn>
        <action-btn actionType="like" iconClass="far fa-heart"></action-btn>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import ActionBtn from "./ActionBtn";

export default {
  name: "Card",
  components: {
    ActionBtn
  },
  props: {
    avatarImgUrl: String,
    user: String,
    productImgUrl: String,
    desc: String,
    price: String
  },
  data() {
    return {
      badgeColor: "white"
    };
  }
};
</script>

<style lang="scss" scoped>
.md-title {
  float: left;
  font-size: 25px;
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
.hidden {
  background-color: rgba(255, 255, 255, 1) !important;
}
</style>
