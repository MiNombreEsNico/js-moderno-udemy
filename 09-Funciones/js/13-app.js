
const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombrePl => console.log(`Se ha creado la playlist ${nombrePl}`),
    reproducirPl: (id, nombrePl) => console.log(`Reproduciendo cancion con el id ${id} de la playlist ${nombrePl}`)
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Temaikenes');
reproductor.reproducirPl(22, 'Temaikenes')