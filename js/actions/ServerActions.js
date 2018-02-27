import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';

let ServerActions = {
    receiveLinks(links) {
        console.log('2. In ServerActions');
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_LINKS,
            links: links
        });
    }
};

export default ServerActions;