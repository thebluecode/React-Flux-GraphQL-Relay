import { get } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchLinks() {
        get('/data/links')
        .done(res => {
            console.log('1. In API');
            ServerActions.receiveLinks(res);
        });
    }
}

export default API;