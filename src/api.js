import fetchJsonp from 'fetch-jsonp';
import store from './store';
import dayjs from 'dayjs';
import axios from 'axios';

export async function getWeatherInfo(location) {
	store.commit('setLoadingStatus', true);
	if (location[0] && location[1]) {
		const APINow = `https://api.caiyunapp.com/v2.5/zXiIvTlim8H9AEc0/${location[0]},${location[1]}/weather.jsonp?dailysteps=15`;
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

export async function getCity(longitude, latitude) {
	const url = `https://restapi.amap.com/v3/geocode/regeo?key=9372f11c18631b9ece0b8db5453c1ee9&output=JSON&location=${longitude},${latitude}&radius=1000`;
	axios.get(url).then((res) => {
		const city = res.data.regeocode.addressComponent['city'];
		if (city.length != 0) store.state.curCity = city;
		else store.state.curCity = res.data.regeocode.addressComponent['province'];
	});
}
