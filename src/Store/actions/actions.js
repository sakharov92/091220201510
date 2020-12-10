import { NEW_FEEDBACK} from '../constants';

export const ADD_FEEDBACK = (message,date) => {
    return {
        type: NEW_FEEDBACK,
        value: {message,date}
    }
}