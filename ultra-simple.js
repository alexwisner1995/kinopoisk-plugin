setTimeout(()=>{
if(window.Lampa&&Lampa.Plugin){
Lampa.Plugin.add('k',{
component:{
template:'<div class="selector__button" @click="k"><div class="selector__button-text">KP</div></div>',
methods:{k(){alert('Kinopoisk')}}
},
position:'control'
});
}
},2000);
