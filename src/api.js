import fetchJsonp from 'fetch-jsonp';
import store from './store';
import dayjs from 'dayjs';

export async function getWeatherInfo(location) {
	store.commit('setLoadingStatus', true);
	if (location[0] && location[1]) {
		const APINow = `https://api.caiyunapp.com/v2.5/zXiIvTlim8H9AEc0/${location[0]},${location[1]}/weather.jsonp?dailysteps=15`;
		console.log('正在请求..');
		await fetchJsonp(APINow, {
			jsonpCallback: 'callback',
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				store.commit('setWeather', data.result);
				store.commit('setLoadingStatus', false);
				store.commit('setUpdateTime', dayjs().format('HH:mm'));
			})
			.catch((err) => {
				console.error('somethingWrong!');
			});
	}
}
