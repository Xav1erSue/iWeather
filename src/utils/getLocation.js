import store from '../store';
import { getCity } from '../api';

export async function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(async (position) => {
			const longitude = position.coords.longitude.toFixed(4);
			const latitude = position.coords.latitude.toFixed(4);
			store.commit('setLocation', [longitude, latitude]);
			await getCity(longitude, latitude);
		});
	} else {
		alert('该浏览器不支持获取地理位置。');
	}
}
