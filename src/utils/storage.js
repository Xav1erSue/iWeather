import store from '../store';

export function setStorage(city) {
	let history;
	if (localStorage.history) {
		history = JSON.parse(localStorage.history) || [];
	} else {
		history = [];
	}
	if (history.length === 0) {
		store.state.history = [city];
		localStorage.history = JSON.stringify([city]);
	} else {
		history.unshift(city);
		const tempSet = new Set(history);
		history = [...tempSet];
		if (history.length <= 10) {
			store.state.history = history;
			localStorage.history = JSON.stringify(history);
		} else {
			history.pop();
			store.state.history = history;
			localStorage.history = JSON.stringify(history);
		}
	}
}

export function getStorage() {
	if (!localStorage.history) return [];
	else return JSON.parse(localStorage.history);
}

export function clearStorage() {
	localStorage.removeItem('history');
	store.state.history = [];
}
