export interface Usuario {
    uid: string;
    email: string;
    Nombre: string;
    Password: string;
    emailVerified: boolean;
    Perfil: 'Alumno' | 'Profesor'


}
