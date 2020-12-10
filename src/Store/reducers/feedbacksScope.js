import { NEW_FEEDBACK} from '../constants';

const feedbacksScope = (state = {}, { type, value }) => {
    switch (type) {
        case NEW_FEEDBACK: {
            let newState = Array.from(state);
                newState.push({
                    name:"Аноним",
                    date:value.date,
                    message:value.message
            })
            return newState;
        }
        default:
            return state
    }
}

export default feedbacksScope;