new Vue({
  el: '#vue-app',
  data:{
    health: 100,
    ended:false
  },
  methods:{
    fire:function(){
      this.health -= 10;
      console.log(this.health)
      if (this.health <=0) {
        this.ended = true;
      }
    },
    restart:function(){
      this.health = 100
      this.ended = false;
      console.log('restart');
    }
  },
  computed:{

  }
});
