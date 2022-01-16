export function normalizeTemperature(temperature, scale) {
	const maximums = temperature.map((el) => el.max);
	const minimums = temperature.map((el) => el.min);
	const max = Math.max(...maximums, ...minimums);
	const newMaximums = maximums.map((el) => (el / max) * scale);
	const newMinimums = minimums.map((el) => (el / max) * scale);
	return { newMaximums, newMinimums };
}
