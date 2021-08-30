import { BlogsActions, BlogsReducer, BlogsService } from './blogs';
import { EditorActions, EditorReducer } from './editor';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	blogs: BlogsReducer,
	editor: EditorReducer
});

const actions = {
	BlogsActions,
    EditorActions
};

const services = {
	BlogsService
};

export { actions, reducers, services };
