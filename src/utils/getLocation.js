import store from '../store';

export async function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const longitude = position.coords.longitude.toFixed(4);
			const latitude = position.coords.latitude.toFixed(4);
			console.log(longitude, latitude);
			store.commit('setLocation', [longitude, latitude]);
		});
	} else {
		alert('该浏览器不支持获取地理位置。');
	}
}
