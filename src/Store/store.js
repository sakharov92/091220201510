import { createStore, compose } from "redux";
import rootReducer from "./rootReducer"

const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const initialState = {
    feedbacksScope:[
        {date:"13 октября 2011", name: "Самуил", message:"Привет, Верунь! ниче себе ты крутая. фотка класс!!!! "},
        {date:"14 октября 2011", name: "Лилия Семеновна", message:"Вероника, здравствуйте! Есть такой вопрос: Особый вид " +
                "куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"},
        {date:"14 октября 2011", name: "Лилия Семеновна", message:"Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц " +
                "жизненно стабилизирует кинетический момент?"}]
}

const configureStore = initialState => (
    createStore(
        rootReducer,
        initialState,
        composeEnhancers()
    )
)

const store = configureStore(initialState);

export default store;