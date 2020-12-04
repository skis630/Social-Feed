<template>
  <div class="like-btn">
    <md-button class="md-icon-button" @click="incrementLikes()">
      <md-icon
        ><i :class="heartClass" :style="{ color: fill }">
          <span :title="likes" v-show="likes >= 1" class="likes">{{
            likes
          }}</span>
        </i></md-icon
      >
    </md-button>
  </div>
</template>

<script>
export default {
  name: "LikesBtn",
  data() {
    return {
      likes: 0,
      badgeColor: "hidden",
      heartClass: "far fa-heart",
      fill: "none"
    };
  },
  props: {},
  methods: {
    incrementLikes() {
      this.likes++;
      this.heartClass = "fas fa-heart";

      if (this.likes > 9) {
        // this.badgeColor = "none"
      } else {
        if (this.likes > 1) {
          this.fill = "red";
        } else {
          if (this.likes === 1) {
            this.fill = "gray";
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.likes {
  color: black;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: 200;
}
.hidden div.md-badge {
  opacity: 0 !important;
}
.like-btn {
  display: inline;
}
</style>
