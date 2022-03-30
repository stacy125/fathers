import CreateDataContext from "./CreateDataContext";
import YelpAPI from '../api/YelpAPI';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const eventReducer = (state, action) => {
    switch (action.type) {
        case 'get_events':
            return action.payload;
        case 'edit_event':
            return state.map((event) => {
                return event.id === action.payload.id ? action.payload : event;
            });
        case 'delete_event':
            return state.filter((event) => event.id !== action.payload);
        case 'add_event':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    name: action.payload.name,
                    image_url: action.payload.image_url,
                    location: action.payload.location,
                    description: action.payload.description,
                    cost: action.payload.cost,
                    event_site_url: action.payload.event_site_url,
                    review_count: action.payload.review_count,
                    rating: action.payload.rating,
                    time_start: action.payload.time_start,
                    time_end: action.payload.time_end,
                    comment: action.payload.comment
                }
            ];

        default:
            state;
    }
}

const getEvents = dispatch => {
    return async () => {
        const response = await YelpAPI.get('/events')

        dispatch({ type: 'get_events', payload: response.data })
    }
}

const addEvent = (dispatch) => {
    return async (name, image_url, location, description, cost,event_site_url, review_count, rating, time_start, time_end, comment, callback) => {
        await YelpAPI.post('/events', {
            name,
            image_url,
            location,
            description,
            cost,
            event_site_url,
            review_count,
            rating,
            time_start,
            time_end,
            comment
        })

        dispatch({
            type: 'add_event', payload:
            {
                name,
                image_url,
                location,
                description,
                cost,
                event_site_url,
                review_count,
                rating,
                time_start,
                time_end,
                comment
            }
        })

        if (callback) {
            callback()
        }
    }
}

const deleteEvent = (dispatch) => {
    return async (id) => {
        await YelpAPI.delete(`/events/${id}`)

        dispatch({ type: 'delete_event', payload: id })
    }
}

const editEvent = (dispatch) => {
    return async (
        id,
        name,
        image_url,
        location,
        description,
        cost,
        event_site_url,
        review_count,
        rating,
        time_start,
        time_end,
        comment,
        callback) => {
        await YelpAPI.put(`/events/${id}`, {
            name,
            image_url,
            location,
            description,
            cost,
            event_site_url,
            review_count,
            rating,
            time_start,
            time_end,
            comment
        })

        dispatch({
            type: 'edit_event', payload: {
                id,
                name,
                image_url,
                location,
                description,
                event_site_url,
                review_count,
                rating,
                time_start,
                time_end,
                comment
            }
        })
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = CreateDataContext(eventReducer, {
    addEvent, deleteEvent, editEvent, getEvents
}, [])