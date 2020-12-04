<template>
  <div class="action-btn">
    <md-button class="md-icon-button" @click="handleClick()">
      <md-icon>
        <i :class="iconClass" :style="{ color: iconFill }">
          <span
            :title="tooltipTxt"
            v-show="count >= 1 && count < maxCountDisplay"
            class="btn"
            >{{ count }}</span
          >
        </i></md-icon
      >
    </md-button>
  </div>
</template>

<script>
export default {
  name: "ActionBtn",
  data() {
    return {
      count: 0,
      maxCountDisplay: 102,
      iconFill: "none",
      tooltipTxt: "",
    };
  },
  props: {
    actionType: String,
    iconClass: String
  },
  beforeMount () {
    //   this.dataIconClass = this.iconClass
  },
  methods: {
    handleClick() {
      this.increment();

      switch (this.actionType) {
        case "like":
          this.toggleIconFill()
          break;
        case "comment":
          break;
        default:
          break;
      }
    },
    increment() {
      this.count++;
    },
    toggleComments() {},
    toggleIconFill() {
        if (this.count === 1) {
            this.iconClass = "fas fa-heart"
            this.iconFill = "gray"
        } else {
            this.iconFill = "red"
            if (this.count > this.maxCountDisplay) {
                this.tooltipTxt = `${this.count} ${this.actionType}s`
            }
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  color: black;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: 200;
}
.action-btn {
  display: inline;
}
</style>
