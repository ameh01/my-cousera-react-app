export function* LCG(seed) {
  const m = 2 ** 31; // modulus
  const a = 1103515245; // multiplier
  const c = 12345; // increment

  while (true) {
    seed = (a * seed + c) % m;
    yield seed / (m - 1);
  }
}

export function floorDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function daysBetween(a, b) {
  return Math.floor(Math.abs((a - b) / (1000 * 60 * 60 * 24)));
}

const DEFAULT_TIMES = Array.from({ length: 22 - 17 }, (x, i) => 17 + i);

export function fetchAPI(date) {
  const requested = floorDate(date instanceof Date ? date : new Date(date));
  const generator = LCG(new Date().getTime());
  const current = floorDate(new Date());
  const span = daysBetween(current, requested);
  const threshold = 0.2 + span * 0.1;

  // Check if data for the requested date is present and if it's recent
  const storedData = sessionStorage.getItem(requested);
  if (!storedData || isDataOutdated(JSON.parse(storedData))) {
    console.log('Fetching API for date:', requested);
    const available = Array.from(
      DEFAULT_TIMES.filter(() => generator.next().value < threshold),
      (x, _i) => new Date(requested.getFullYear(), requested.getMonth(), requested.getDate(), x)
    );

    // Store only essential information
    sessionStorage.setItem(requested, JSON.stringify({ timestamp: new Date(), data: available }));
    console.log('Fetched data:', available);
  }

  return JSON.parse(sessionStorage.getItem(requested)).data.map((str) => new Date(str));
}

function isDataOutdated(data) {
  // Set a threshold for data freshness (e.g., 1 day)
  const freshnessThreshold = 24 * 60 * 60 * 1000; // 1 day in milliseconds
  return new Date() - new Date(data.timestamp) > freshnessThreshold;
}

export function submitAPI(formData) {
  const date = floorDate(formData.datetime);
  const available = fetchAPI(formData.datetime);

  const index = available.findIndex((x) => x.getTime() === formData.datetime.getTime());
  if (index === -1) return false;
  available.splice(index, 1);
  sessionStorage.setItem(date, JSON.stringify(available));
  return true;
}
