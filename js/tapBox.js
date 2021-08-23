new Vue({
  el: "#container",
  data: {
    bar: 100,
    ended: false,
  },
  methods: {
    tap: function () {
      this.bar = this.bar - 10;
      if(this.bar<=0){
          this.ended = true;
      }
    },
    reset: function () {
      this.bar = 100;
      this.ended = false;
    },
  },
});
