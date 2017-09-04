import { environment } from '../environments/environment';
export class Paths {
    //根
    public static Host: string = environment.host;
    public static Host_Admin: string = Paths.Host + '/admin';

    //admin
    public static Admin_Login: string = Paths.Host_Admin + '/login';
}