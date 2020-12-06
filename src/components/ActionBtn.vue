<template>
  <div class="action-btn" :title="tooltipTxt">
    <md-button
      :class="actionType"
      class="md-icon-button"
      @click="handleClick()"
    >
      <md-icon>
        <i :class="dataIconClass" :style="{ color: iconFill }">
          <span v-show="count >= 1 && count < maxCountDisplay" class="btn">{{
            count
          }}</span>
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
      //   maxCountDisplay: 102,
      iconFill: "none",
      tooltipTxt: "",
      dataIconClass: ""
    };
  },
  props: {
    actionType: String,
    iconClass: String,
    maxCountDisplay: Number
  },
  beforeMount() {
    this.dataIconClass = this.iconClass;
  },
  methods: {
    handleClick() {
      if (this.count > this.maxCountDisplay) {
        this.tooltipTxt = `${this.count} ${this.actionType}s`;
      }

      switch (this.actionType) {
        case "like":
          this.increment();
          this.toggleIconFill();
          break;
        case "comment":
          this.$emit("clickedComment");
          break;
        default:
      }
    },
    increment() {
      this.count++;
    },
    toggleIconFill() {
      if (this.count === 1) {
        this.dataIconClass = "fas fa-heart";
        this.iconFill = "gray";
      } else {
        this.iconFill = "red";
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
