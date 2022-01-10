const app = new Vue({
  el: "#exercise",
  data: {
    effectBtnClicked: false,
    activeClass: "highlight",
    notActiveClass: "shrink",
    makeItPurple: "purple",
    whiteText: "white",
    userClass: "",
    progress: 10,
  },
  methods: {
    startEffect() {
      console.log("clicked");
      this.effectBtnClicked = !this.effectBtnClicked;
    },
    increaseProg() {
      console.log("ccc");
      /* this.progress = this.progress+10;
          console.log(this.progress); */
    },
  },
});
