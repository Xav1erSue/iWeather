export function judgeWeatherCon(weatherInfo) {
	switch (weatherInfo) {
		case 'CLEAR_DAY':
			return { url: '/weatherIcons/天气图标_晴天(白天).png', weatherCon: '晴' };
		case 'CLEAR_NIGHT':
			return { url: '/weatherIcons/天气图标_晴天(昼).png', weatherCon: '晴' };
		case 'PARTLY_CLOUDY_DAY':
			return { url: '/weatherIcons/天气图标 晴多云(白天).png', weatherCon: '大部多云' };
		case 'PARTLY_CLOUDY_NIGHT':
			return { url: '/weatherIcons/天气图标_晴转多云(昼).png', weatherCon: '大部多云' };
		case 'CLOUDY':
			return { url: '/weatherIcons/天气图标_多云.png', weatherCon: '阴' };
		case 'LIGHT_HAZE':
			return { url: '/weatherIcons/天气图标_雾霾.png', weatherCon: '轻度雾霾' };
		case 'MODERATE_HAZE':
			return { url: '/weatherIcons/天气图标_雾霾.png', weatherCon: '中度雾霾' };
		case 'HEAVY_HAZE':
			return { url: '/weatherIcons/天气图标_雾霾.png', weatherCon: '重度雾霾' };
		case 'LIGHT_RAIN':
			return { url: '/weatherIcons/天气图标_小雨.png', weatherCon: '小雨' };
		case 'MODERATE_RAIN':
			return { url: '/weatherIcons/天气图标_中雨.png', weatherCon: '中雨' };
		case 'HEAVY_RAIN':
			return { url: '/weatherIcons/天气图标_大雨.png', weatherCon: '大雨' };
		case 'STORM_RAIN':
			return { url: '/weatherIcons/天气图标_暴雨.png', weatherCon: '暴雨' };
		case 'FOG':
			return { url: '/weatherIcons/天气图标_雾.png', weatherCon: '雾' };
		case 'LIGHT_SNOW':
			return { url: '/weatherIcons/天气图标_小雪.png', weatherCon: '小雪' };
		case 'MODERATE_SNOW':
			return { url: '/weatherIcons/天气图标_中雪.png', weatherCon: '中雪' };
		case 'HEAVY_SNOW':
			return { url: '/weatherIcons/天气图标_大雪.png', weatherCon: '大雪' };
		case 'STORM_SNOW':
			return { url: '/weatherIcons/天气图标_暴雪.png', weatherCon: '暴雪' };
		case 'DUST':
		case 'SAND':
			return { url: '/weatherIcons/天气图标_扬沙.png', weatherCon: '扬沙' };
		case 'WIND':
			return { url: '/weatherIcons/天气图标_大风.png', weatherCon: '大风' };
		default:
			return { url: '/weatherIcons/天气图标_晴天(白天).png', weatherCon: '晴' };
	}
}

//判断Aqi并返回不同颜色值
export function judgeAQIColor(aqi) {
	switch (aqi) {
		case '优':
			return { color: '#ffffff', background: '#67C23A' };
		case '良':
			return { color: '#ffffff', background: '#EFC744' };
		case '轻度污染':
			return { color: '#ffffff', background: '#eab308' };
		case '中度污染':
			return { color: '#ffffff', background: '#ea580c' };
		case '重度污染':
			return { color: '#ffffff', background: '#dc2626' };
		case '严重污染':
			return { color: '#ffffff', background: '#b91c1c' };
		default:
			return { color: '#ffffff', background: '#67C23A' };
	}
}
