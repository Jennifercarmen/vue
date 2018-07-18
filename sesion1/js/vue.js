// new view crea instancia
var app = new Vue({
    el: '.vue',
    data:{
        primero:0,
        segundo:0,
        tercero:0,
        cuarto:0,
        suma:0,
        mensaje: 'Aprende vue.js Fácilmente',
        nombre:'jennifer',
        src: ''
    },
    computed:{
        total:function(){
            return this.primero + this.segundo + this.tercero + this.cuarto;
        }
    },
    beforeCreate:function() {
        console.log('llamando beforeCreate');
    },
    created: function (){
        console.log('llamando created');
    },
    beforeMount:function (){
        console.log('llamando beforeMount');
    },
    mounted: function (){
        console.log('llamando mounted');
    },
    beforeUpdate: function (){
        console.log('llamando beforeUpdate');
    },
    updated: function (){
        console.log('llamando updated');
    },
    beforeDestroy: function (){
        console.log('llamando beforeDestroy');
    },
    destroyed: function (){
        console.log('llamando destroyed');
    },
    methods: {
        mostrarMensaje: function(){
            return this.mensaje;
        },
        destruir: function(){
            this.$destroy();
        }
    }
})