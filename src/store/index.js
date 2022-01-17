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
			curCity: '北京市',
			loadingStatus: true,
			baseWeatherLogo: '',
			weatherLogos: [],
			nextDays: [],
			maximums: [],
			minimums: [],
			onSearch: false,
			otherCities: [],
			searchResponse: '',
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
			const { Maximums, Minimums } = normalizeTemperature(weather.daily.temperature, 40);
			const maxPoints = Maximums.map(
				(element, index) => `${50 + index * 100},${Math.round(element) + 45}`
			);
			const minPoints = Minimums.map(
				(element, index) => `${50 + index * 100},${Math.round(element) + 35}`
			);
			state.maximums = `M0,${maxPoints[0].split(',')[1]} ${maxPoints.join(' ')} 1500,${
				maxPoints[14].split(',')[1]
			}`;
			state.minimums = `M0,${minPoints[0].split(',')[1]} ${minPoints.join(' ')} 1500,${
				minPoints[14].split(',')[1]
			}`;
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
		changeSearchStatus(state, status) {
			store.state.onSearch = status;
		},
	},
});

export default store;
