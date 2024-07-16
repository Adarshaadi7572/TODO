import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './redux/Store'; // Adjust the import path based on your actual file structure

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={Store}> {/* Note: Use 'store' with lowercase 's' */}
			<App />
		</Provider>
	</React.StrictMode>
);
