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
		if (city.length != 0) store.commit('setCity', city);
		else store.commit('setCity', res.data.regeocode.addressComponent['province']);
	});
}

export async function chooseCity(city) {
	store.state.searchResponse = '正在查询...';
	const url = `https://restapi.amap.com/v3/geocode/geo?address=${city}&key=9372f11c18631b9ece0b8db5453c1ee9&=`;
	axios.get(url).then((res) => {
		if (res.data.status === 0) store.state.searchResponse = '无法查询到该城市';
		else {
			store.state.searchResponse = '查询成功';
			store.state.curCity = city;
			const location = res.data.geocodes[0].location.split(',');
			store.state.otherCities = [
				parseInt(location[0]).toFixed(4),
				parseInt(location[1]).toFixed(4),
			];
			getWeatherInfo(store.state.otherCities);
		}
	});
}
