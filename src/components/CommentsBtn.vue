<template>
  <div class="comments-btn">
    <md-button class="md-icon-button">
      <md-icon
        ><i class="far fa-comment">
          <span
            v-show="commentsCount >= 1 && commentsCount < 10"
            class="comments"
            >{{ commentsCount }}</span
          >
        </i></md-icon
      >
    </md-button>
  </div>
</template>

<script>
export default {
  name: "CommentsBtn",
  data() {
    return {
      commentsCount: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.comments {
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
.comments-btn {
  display: inline-block;
}
</style>
