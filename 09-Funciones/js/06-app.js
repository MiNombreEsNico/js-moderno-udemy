
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción... ${id}`)
    },
    crearPlaylist: function(nombrePl) {
        console.log(`Se ha creado la playlist ${nombrePl}`);
    },
    reproducirPl: function(id, nombrePl) {
        console.log(`Reproduciendo cancion con el id ${id} de la playlist ${nombrePl}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Temaikenes');
reproductor.reproducirPl(22, 'Temaikenes')