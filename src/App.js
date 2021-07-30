import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { BlogEditor } from './components';

import { actions } from './app/services';

function App() {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.BlogsActions.getAllBlogsAction());
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<BlogEditor />
			</header>
		</div>
	);
}

export default App;
