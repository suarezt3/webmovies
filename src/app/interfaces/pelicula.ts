export interface PELICULA {
    id:           number;
    created_at:   Date;
    titulo:       string;
    anio:         number;
    descripcion:  string;
    calificacion: number;
    url_video:    string;
    url_img:      string;
    calidad:      string;
    genero:       string;
    status:       boolean;
}
