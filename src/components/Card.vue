<template>
  <div class="card">
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
          :maxCountDisplay="102"
          @clickedComment="showComments = !showComments"
          ref="commentBtn"
        ></action-btn>
        <action-btn
          actionType="like"
          iconClass="far fa-heart"
          :maxCountDisplay="102"
        ></action-btn>
      </md-card-content>

      <md-divider></md-divider>
      <div v-show="showComments" class="comments">
        <div
          align="left"
          v-for="(comment, index) in comments"
          :key="index"
          class="comment"
        >
          {{ comment }}
        </div>
        <md-field>
          <md-textarea
            class="comment-input"
            v-model="commentInput"
            required
            placeholder="Write your comment here"
            type="text"
          >
          </md-textarea>
          <md-button
            title="Add comment"
            :disabled="commentInput.length === 0"
            @click="appendComment()"
            class="add-comment"
          >
            <md-icon>send</md-icon>
          </md-button>
        </md-field>
      </div>
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
      comments: [],
      showComments: false,
      commentInput: "",
      commentsCount: 0
    };
  },
  methods: {
    appendComment() {
      this.comments.push(this.commentInput);
      this.commentInput = "";
      this.$refs.commentBtn.count++;
    }
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
.md-input {
  padding: 5%;
}
.add-comment,
.comment {
  margin: auto;
  padding: auto;
}
.comment {
  padding: 2%;
  margin: 2%;
  border-radius: 5px;
  background: rgba($color: #f7f3f3f8, $alpha: 1);
}
</style>
