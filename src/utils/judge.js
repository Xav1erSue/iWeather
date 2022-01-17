export function judgeWeatherCon(weatherInfo) {
	switch (weatherInfo) {
		case 'CLEAR_DAY':
			return { url: '/weatherIcons/晴.svg', weatherCon: '晴' };
		case 'CLEAR_NIGHT':
			return { url: '/weatherIcons/晴-夜.svg', weatherCon: '晴' };
		case 'PARTLY_CLOUDY_DAY':
			return { url: '/weatherIcons/多云.svg', weatherCon: '大部多云' };
		case 'PARTLY_CLOUDY_NIGHT':
			return { url: '/weatherIcons/多云夜.svg', weatherCon: '大部多云' };
		case 'CLOUDY':
			return { url: '/weatherIcons/阴.svg', weatherCon: '阴' };
		case 'LIGHT_HAZE':
			return { url: '/weatherIcons/霾.svg', weatherCon: '轻度雾霾' };
		case 'MODERATE_HAZE':
			return { url: '/weatherIcons/中度霾.svg', weatherCon: '中度雾霾' };
		case 'HEAVY_HAZE':
			return { url: '/weatherIcons/重度霾.svg', weatherCon: '重度雾霾' };
		case 'LIGHT_RAIN':
			return { url: '/weatherIcons/小雨.svg', weatherCon: '小雨' };
		case 'MODERATE_RAIN':
			return { url: '/weatherIcons/中雨.svg', weatherCon: '中雨' };
		case 'HEAVY_RAIN':
			return { url: '/weatherIcons/大雨.svg', weatherCon: '大雨' };
		case 'STORM_RAIN':
			return { url: '/weatherIcons/暴雨.svg', weatherCon: '暴雨.svg' };
		case 'FOG':
			return { url: '/weatherIcons/雾.svg', weatherCon: '雾' };
		case 'LIGHT_SNOW':
			return { url: '/weatherIcons/小雪.svg', weatherCon: '小雪' };
		case 'MODERATE_SNOW':
			return { url: '/weatherIcons/中雪.svg', weatherCon: '中雪' };
		case 'HEAVY_SNOW':
			return { url: '/weatherIcons/大雪.svg', weatherCon: '大雪' };
		case 'STORM_SNOW':
			return { url: '/weatherIcons/暴雪.svg', weatherCon: '暴雪' };
		case 'DUST':
			return { url: '/weatherIcons/浮尘.svg', weatherCon: '浮尘' };
		case 'SAND':
			return { url: '/weatherIcons/扬沙.svg', weatherCon: '扬沙' };
		case 'WIND':
			return { url: '/weatherIcons/大风.svg', weatherCon: '大风' };
		default:
			return { url: '/weatherIcons/叹号.svg', weatherCon: '获取天气信息失败!' };
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
