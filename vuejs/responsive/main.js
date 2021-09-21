new Vue({
    el:"#App",
    data:{
        counter: 0,
        count: 5
    },
    methods:{
        counting: function () {
            
           
            setInterval(() => {
                this.counter++;
            }, 2000)
            if(this.count = this.counter++){
                clearInterval(counting)
            }
        },
        toggleMenu: function () {
            el:'#profile',
            el.classList.toggle('toggle-menu');
        }
    }
})