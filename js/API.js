import { post } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchLinks() {
        post('/graphql', {
            query: '{ links { _id title url } }'
        })
        .done(res => {
            console.log('1. In API');
            ServerActions.receiveLinks(res.data.links);
        });
    }
}

export default API;