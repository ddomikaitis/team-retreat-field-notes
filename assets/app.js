const options = [
  {
    id: 'big-sur', name: 'Big Sur', place: 'California coast', region: 'Pacific edge',
    months: ['oct','nov'], appetite: 'moderate', climate: 'mild', duration: '4 nights', window: 'Late Oct–mid Nov',
    verdict: 'The strongest emotional reset: redwoods, cliffs and long dinners. Uneven travel, but a beautifully simple retreat once everyone arrives.',
    route: 'LA drives; Scotland flies to SFO/SJC plus group transfer.',
    risk: 'Highway 1 disruption, rain later in the season, limited large-group inventory.',
    shape: 'One lodge · half-day workshop · guided hike · coastal dinner · unstructured fireside time.',
    scores: { impact: 10, fairness: 3, access: 6, season: 7, workability: 7, comfort: 8 }
  },
  {
    id: 'nuuk', name: 'Nuuk', place: 'Greenland', region: 'Arctic capital',
    months: ['oct','nov','dec','jan'], appetite: 'high', climate: 'cold', duration: '5 nights', window: 'Best in early Oct',
    verdict: 'A genuine expedition with enough city infrastructure to function. The travel and weather become part of the shared story.',
    route: 'Scotland via KEF/CPH; LA usually one or two connections.',
    risk: 'Infrequent flights, weather delays and a much longer journey for LA.',
    shape: 'Buffer night · one workday · fjord trip · cultural program · flexible weather day.',
    scores: { impact: 10, fairness: 4, access: 3, season: 3, workability: 7, comfort: 6 }
  },
  {
    id: 'hudson', name: 'Hudson Valley', place: 'New York', region: 'Forest & river',
    months: ['oct','nov'], appetite: 'moderate', climate: 'mild', duration: '4 nights', window: 'Late Oct–early Nov',
    verdict: 'The rational winner: balanced flights into New York, excellent properties and just enough removal from ordinary city life.',
    route: 'Nonstop-rich gateway for LA and Edinburgh, then a shared 90–150 minute transfer.',
    risk: 'Less singular than Greenland or Big Sur; peak foliage can inflate rates.',
    shape: 'Country lodge · strategy morning · trail or team challenge · chef dinner · firepit close.',
    scores: { impact: 7, fairness: 10, access: 9, season: 7, workability: 9, comfort: 9 }
  },
  {
    id: 'azores', name: 'São Miguel', place: 'Azores, Portugal', region: 'Mid-Atlantic island',
    months: ['oct','nov'], appetite: 'high', climate: 'mild', duration: '5 nights', window: 'October preferred',
    verdict: 'Volcanic, green and wonderfully removed. A stronger midpoint feeling than Madeira, with hot springs and a natural retreat rhythm.',
    route: 'Both sides typically connect; routing quality varies sharply by day.',
    risk: 'Atlantic weather and limited schedules; price only after locking candidate dates.',
    shape: 'Eco-resort · crater walk · hot springs · farm-to-table dinner · one decision session.',
    scores: { impact: 9, fairness: 7, access: 5, season: 6, workability: 7, comfort: 8 }
  },
  {
    id: 'madeira', name: 'Madeira', place: 'Portugal', region: 'Atlantic highlands',
    months: ['oct','nov','dec','jan'], appetite: 'moderate', climate: 'mild', duration: '5 nights', window: 'Nov–Jan',
    verdict: 'The best weather hedge: mountain landscapes, levada walks and polished hospitality without a harsh winter operating model.',
    route: 'Easy from Scotland; LA normally needs a European connection.',
    risk: 'Travel burden favors Scotland and resort areas can feel vacation-first.',
    shape: 'Hillside quinta · levada walk · canyon or coast day · private dinner · half-day working session.',
    scores: { impact: 8, fairness: 5, access: 6, season: 10, workability: 8, comfort: 9 }
  },
  {
    id: 'bintan', name: 'Bintan', place: 'Indonesia via Singapore', region: 'Tropical island',
    months: ['oct','nov','dec','jan'], appetite: 'high', climate: 'warm', duration: '6 nights', window: 'Oct or Jan',
    verdict: 'The warm neutral-ground play: both teams travel far, Singapore absorbs the jet lag, and a one-hour ferry delivers an easy island retreat.',
    route: 'Long-haul to Singapore for both groups, then organized ferry and resort transfer.',
    risk: 'Jet lag, monsoon variability and a higher minimum trip length.',
    shape: 'Recovery night Singapore · ferry · beach resort · challenge day · CSR activity · closing dinner.',
    scores: { impact: 8, fairness: 8, access: 4, season: 7, workability: 9, comfort: 9 }
  },
  {
    id: 'fogo', name: 'Fogo Island', place: 'Newfoundland, Canada', region: 'North Atlantic outpost',
    months: ['oct'], appetite: 'high', climate: 'cold', duration: '5 nights', window: 'Early Oct only',
    verdict: 'A design-forward North Atlantic wildcard with powerful isolation and community character. Excellent concept; fragile logistics.',
    route: 'Multiple legs for both teams, followed by road and ferry or charter transfer.',
    risk: 'Many tourism services reduce after Canadian Thanksgiving; weather and transfers need slack.',
    shape: 'Single-property stay · community hosts · coastal walks · studio visits · long-table meals.',
    scores: { impact: 10, fairness: 7, access: 2, season: 3, workability: 6, comfort: 8 }
  },
  {
    id: 'iceland', name: 'South Iceland', place: 'via Reykjavík', region: 'Fire & ice',
    months: ['oct','nov'], appetite: 'moderate', climate: 'cold', duration: '4 nights', window: 'October preferred',
    verdict: 'More accessible than Nuuk and still cinematic. A private south-coast base prevents it from becoming a standard Reykjavík weekend.',
    route: 'Very easy from Scotland; LA generally connects through a US or European gateway.',
    risk: 'Not travel-neutral; wind and winter conditions can rewrite the itinerary.',
    shape: 'Private lodge · geothermal soak · guided glacier/coast day · one workshop · chef dinner.',
    scores: { impact: 8, fairness: 5, access: 7, season: 5, workability: 9, comfort: 8 }
  }
];

const dimensions = {
  impact: ['Emotional impact', 'Will people remember it in five years?'],
  fairness: ['Travel fairness', 'Balances burden across both teams.'],
  access: ['Access', 'Fewer legs and more schedule resilience.'],
  season: ['Season fit', 'Works well in the selected window.'],
  workability: ['Group-ready', 'Lodging, transfers and meeting basics.'],
  comfort: ['Comfort', 'Recovery, food and broad-team accessibility.']
};

const presets = {
  memory: { impact: 30, fairness: 18, access: 10, season: 12, workability: 14, comfort: 16 },
  fairness: { impact: 15, fairness: 38, access: 20, season: 10, workability: 10, comfort: 7 },
  easy: { impact: 10, fairness: 18, access: 30, season: 14, workability: 20, comfort: 8 },
  warm: { impact: 17, fairness: 15, access: 10, season: 30, workability: 13, comfort: 15 }
};

const state = {
  weights: { ...presets.memory },
  filters: { month: 'all', appetite: 'all', climate: 'all' },
  shortlist: JSON.parse(localStorage.getItem('retreat-shortlist') || '[]')
};

const controls = document.querySelector('#weightControls');
const cards = document.querySelector('#cards');
const resultCount = document.querySelector('#resultCount');
const compareSection = document.querySelector('#compareSection');
const compareTable = document.querySelector('#compareTable');

function buildControls() {
  controls.innerHTML = Object.entries(dimensions).map(([key, [label, help]]) => `
    <label class="weight">
      <span class="weight-head"><span>${label}</span><output id="${key}Out">${state.weights[key]}</output></span>
      <p>${help}</p>
      <input type="range" min="0" max="40" value="${state.weights[key]}" data-weight="${key}" aria-label="${label} weight">
    </label>`).join('');
  controls.querySelectorAll('input').forEach(input => input.addEventListener('input', event => {
    const key = event.target.dataset.weight;
    state.weights[key] = Number(event.target.value);
    document.querySelector(`#${key}Out`).value = event.target.value;
    document.querySelectorAll('.preset').forEach(button => button.classList.remove('active'));
    render();
  }));
}

function score(option) {
  const totalWeight = Object.values(state.weights).reduce((sum, value) => sum + value, 0) || 1;
  const weighted = Object.entries(state.weights).reduce((sum, [key, weight]) => sum + option.scores[key] * weight, 0);
  return (weighted / totalWeight).toFixed(1);
}

function visible(option) {
  return (state.filters.month === 'all' || option.months.includes(state.filters.month)) &&
    (state.filters.appetite === 'all' || option.appetite === state.filters.appetite) &&
    (state.filters.climate === 'all' || option.climate === state.filters.climate);
}

function render() {
  const ranked = options.filter(visible).map(option => ({ ...option, weightedScore: score(option) }))
    .sort((a, b) => b.weightedScore - a.weightedScore);
  resultCount.textContent = ranked.length;
  cards.innerHTML = ranked.length ? ranked.map((option, index) => cardMarkup(option, index)).join('') : '<div class="empty">No destination matches all three filters.</div>';
  cards.querySelectorAll('.shortlist').forEach(button => button.addEventListener('click', () => toggleShortlist(button.dataset.id)));
  renderCompare();
}

function cardMarkup(option, index) {
  const selected = state.shortlist.includes(option.id);
  return `<article class="card ${index === 0 ? 'rank-1' : ''}">
    <div class="card-visual"><span class="region-tag">${option.region}</span><span class="rank">${String(index + 1).padStart(2, '0')}</span></div>
    <div class="card-body">
      <h3>${option.name}</h3><p class="card-location">${option.place}</p>
      <p class="verdict">${option.verdict}</p>
      <div class="meta"><div><span>Best window</span><strong>${option.window}</strong></div><div><span>Minimum stay</span><strong>${option.duration}</strong></div></div>
      <details class="card-details"><summary>Travel, risk & shape</summary><p><strong>Travel:</strong> ${option.route}</p><p><strong>Watch:</strong> ${option.risk}</p><p><strong>Shape:</strong> ${option.shape}</p></details>
      <div class="score-row"><div class="score-lockup"><strong>${option.weightedScore}</strong><span>/ 10</span></div><button class="shortlist ${selected ? 'selected' : ''}" data-id="${option.id}" type="button">${selected ? 'Shortlisted ✓' : 'Add to shortlist'}</button></div>
    </div>
  </article>`;
}

function toggleShortlist(id) {
  state.shortlist = state.shortlist.includes(id) ? state.shortlist.filter(item => item !== id) : [...state.shortlist, id];
  localStorage.setItem('retreat-shortlist', JSON.stringify(state.shortlist));
  render();
}

function renderCompare() {
  const chosen = state.shortlist.map(id => options.find(option => option.id === id)).filter(Boolean);
  compareSection.hidden = chosen.length === 0;
  if (!chosen.length) return;
  compareTable.innerHTML = `<thead><tr><th>Destination</th><th>Score</th><th>Window</th><th>Travel pattern</th><th>Main risk</th></tr></thead><tbody>${chosen.map(option => `<tr><td>${option.name}</td><td>${score(option)}</td><td>${option.window}</td><td>${option.route}</td><td>${option.risk}</td></tr>`).join('')}</tbody>`;
}

document.querySelectorAll('.preset').forEach(button => button.addEventListener('click', () => {
  state.weights = { ...presets[button.dataset.preset] };
  document.querySelectorAll('.preset').forEach(item => item.classList.toggle('active', item === button));
  buildControls(); render();
}));

[['monthFilter','month'], ['appetiteFilter','appetite'], ['climateFilter','climate']].forEach(([id, key]) => {
  document.querySelector(`#${id}`).addEventListener('change', event => { state.filters[key] = event.target.value; render(); });
});

document.querySelector('#clearShortlist').addEventListener('click', () => { state.shortlist = []; localStorage.removeItem('retreat-shortlist'); render(); });
document.querySelector('#resetAll').addEventListener('click', () => {
  state.weights = { ...presets.memory };
  state.filters = { month: 'all', appetite: 'all', climate: 'all' };
  ['monthFilter','appetiteFilter','climateFilter'].forEach(id => document.querySelector(`#${id}`).value = 'all');
  document.querySelectorAll('.preset').forEach(button => button.classList.toggle('active', button.dataset.preset === 'memory'));
  buildControls(); render();
});

buildControls();
render();
