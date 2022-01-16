export function normalizeTemperature(temperature, scale) {
	const maximums = temperature.map((el) => el.max);
	const minimums = temperature.map((el) => el.min);
	const maxAbs = maximums.map((el) => Math.abs(el));
	const minAbs = minimums.map((el) => Math.abs(el));
	const max = Math.max(...maxAbs, ...minAbs);
	const Maximums = maximums.map((el) => Math.floor((el / max) * scale));
	const Minimums = minimums.map((el) => Math.floor((el / max) * scale));
	return { Maximums, Minimums };
}
