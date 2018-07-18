const app = new Vue(
    {
        el: '#app',
        data:{
            titulo:'Lista de Tareas',
            nuevaTarea:'',
            tareas:[
                {
                    texto:'Aprender Vue.js',
                    terminada:false
                },
                {
                    texto:'Aprender Angular2',
                    terminada:false
                },
                {
                    texto:'Aprender Ionic 2',
                    terminada:false
                },
            ]
        },
        methods:{
            agregarTarea:function(){
                var texto=this.nuevaTarea.trim();
                if (texto){
                    this.tareas.push({
                        texto:texto,
                        terminada: false
                    })
                }
                this.nuevaTarea=''
            }
        }
    }
)