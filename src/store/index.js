import { createStore } from 'vuex';
import { judgeAQIColor, judgeWeatherCon } from '../utils/judge';
import dayjs from 'dayjs';
import { transWeekDay } from '../utils/formatTool';
import { normalizeTemperature } from '../utils/Normalize';

const store = createStore({
	state() {
		return {
			curLocation: [],
			updateTime: '',
			weather: {},
			AQIStyles: {},
			curCity: '金华市',
			loadingStatus: true,
			baseWeatherLogo: '/weatherIcons/天气图标_晴天(白天).png',
			weatherLogos: [],
			nextDays: [],
			maximums: [],
			minimums: [],
		};
	},
	mutations: {
		setLocation(state, curLocation) {
			state.curLocation = curLocation;
		},
		setWeather(state, weather) {
			state.weather = weather;
			const res = judgeWeatherCon(weather.realtime.skycon);
			state.baseWeatherLogo = res.url;
			state.weather.realtime.skycon = res.weatherCon;
			state.AQIStyles = judgeAQIColor(weather.realtime.air_quality.description.chn);
			state.weatherLogos = weather.daily.skycon.map((element) =>
				judgeWeatherCon(element.value)
			);
			state.nextDays = weather.daily.skycon.map((element) => [
				dayjs(element.date).format('M.D'),
				transWeekDay(dayjs(element.date).day()),
			]);
			const { maximums, minimums } = normalizeTemperature(weather.daily.temperature, 80);
			const maxPoints = maximums.map(
				(element, index) => `${50 + index * 100},${Math.round(element)}`
			);
			const minPoints = minimums.map(
				(element, index) => `${50 + index * 100},${Math.round(element)}`
			);
			state.maximums = `M${maxPoints.join(' ')}`;
			state.minimums = `M${minPoints.join(' ')}`;
			console.log(maximums, minimums);
		},
		setCity(state, curCity) {
			state.curCity = curCity;
		},
		setUpdateTime(state, updateTime) {
			state.updateTime = updateTime;
		},
		setLoadingStatus(state, loadingStatus) {
			state.loadingStatus = loadingStatus;
		},
	},
});

export default store;
