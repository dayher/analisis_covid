// ISO-3166-1 Numeric Country Code Mapping (from iso3166.csv)
const countryNames = {"4": "Afghanistan", "8": "Albania", "12": "Algeria", "16": "American Samoa", "20": "Andorra", "24": "Angola", "660": "Anguilla", "10": "Antarctica", "28": "Antigua and Barbuda", "32": "Argentina", "51": "Armenia", "533": "Aruba", "36": "Australia", "40": "Austria", "31": "Azerbaijan", "44": "Bahamas (the)", "48": "Bahrain", "50": "Bangladesh", "52": "Barbados", "112": "Belarus", "56": "Belgium", "84": "Belize", "204": "Benin", "60": "Bermuda", "248": "Åland Islands", "64": "Bhutan", "68": "Bolivia (Plurinational State of)", "70": "Bosnia and Herzegovina", "72": "Botswana", "74": "Bouvet Island", "76": "Brazil", "86": "British Indian Ocean Territory (the)", "96": "Brunei Darussalam", "100": "Bulgaria", "854": "Burkina Faso", "108": "Burundi", "132": "Cabo Verde", "116": "Cambodia", "120": "Cameroon", "124": "Canada", "136": "Cayman Islands (the)", "140": "Central African Republic (the)", "148": "Chad", "152": "Chile", "156": "China", "162": "Christmas Island", "166": "Cocos (Keeling) Islands (the)", "170": "Colombia", "174": "Comoros (the)", "180": "Congo (the Democratic Republic of the)", "178": "Congo (the)", "184": "Cook Islands (the)", "188": "Costa Rica", "191": "Croatia", "192": "Cuba", "531": "Curaçao", "196": "Cyprus", "203": "Czechia", "384": "Côte d'Ivoire", "208": "Denmark", "262": "Djibouti", "212": "Dominica", "214": "Dominican Republic (the)", "218": "Ecuador", "818": "Egypt", "222": "El Salvador", "226": "Equatorial Guinea", "232": "Eritrea", "233": "Estonia", "748": "Eswatini", "231": "Ethiopia", "238": "Falkland Islands (the) [Malvinas]", "234": "Faroe Islands (the)", "242": "Fiji", "246": "Finland", "250": "France", "254": "French Guiana", "258": "French Polynesia", "260": "French Southern Territories (the)", "266": "Gabon", "270": "Gambia (the)", "268": "Georgia", "276": "Germany", "288": "Ghana", "292": "Gibraltar", "300": "Greece", "304": "Greenland", "308": "Grenada", "312": "Guadeloupe", "316": "Guam", "320": "Guatemala", "831": "Guernsey", "324": "Guinea", "624": "Guinea-Bissau", "328": "Guyana", "332": "Haiti", "334": "Heard Island and McDonald Islands", "336": "Holy See (the)", "340": "Honduras", "344": "Hong Kong", "348": "Hungary", "352": "Iceland", "356": "India", "360": "Indonesia", "364": "Iran (Islamic Republic of)", "368": "Iraq", "372": "Ireland", "833": "Isle of Man", "376": "Israel", "380": "Italy", "388": "Jamaica", "392": "Japan", "832": "Jersey", "400": "Jordan", "398": "Kazakhstan", "404": "Kenya", "296": "Kiribati", "408": "Korea (the Democratic People's Republic of)", "410": "Korea (the Republic of)", "414": "Kuwait", "417": "Kyrgyzstan", "418": "Lao People's Democratic Republic (the)", "428": "Latvia", "422": "Lebanon", "426": "Lesotho", "430": "Liberia", "434": "Libya", "438": "Liechtenstein", "440": "Lithuania", "442": "Luxembourg", "446": "Macao", "450": "Madagascar", "454": "Malawi", "458": "Malaysia", "462": "Maldives", "466": "Mali", "470": "Malta", "584": "Marshall Islands (the)", "474": "Martinique", "478": "Mauritania", "480": "Mauritius", "175": "Mayotte", "484": "Mexico", "583": "Micronesia (Federated States of)", "498": "Moldova (the Republic of)", "492": "Monaco", "496": "Mongolia", "499": "Montenegro", "500": "Montserrat", "504": "Morocco", "508": "Mozambique", "104": "Myanmar", "516": "Namibia", "520": "Nauru", "524": "Nepal", "528": "Netherlands (the)", "540": "New Caledonia", "554": "New Zealand", "558": "Nicaragua", "562": "Niger (the)", "566": "Nigeria", "570": "Niue", "574": "Norfolk Island", "807": "North Macedonia", "580": "Northern Mariana Islands (the)", "578": "Norway", "512": "Oman", "586": "Pakistan", "585": "Palau", "275": "Palestine, State of", "591": "Panama", "598": "Papua New Guinea", "600": "Paraguay", "604": "Peru", "608": "Philippines (the)", "612": "Pitcairn", "616": "Poland", "620": "Portugal", "630": "Puerto Rico", "634": "Qatar", "642": "Romania", "643": "Russian Federation (the)", "646": "Rwanda", "638": "Réunion", "652": "Saint Barthélemy", "654": "Saint Helena, Ascension and Tristan da Cunha", "659": "Saint Kitts and Nevis", "662": "Saint Lucia", "663": "Saint Martin (French part)", "666": "Saint Pierre and Miquelon", "670": "Saint Vincent and the Grenadines", "882": "Samoa", "674": "San Marino", "678": "Sao Tome and Principe", "682": "Saudi Arabia", "686": "Senegal", "688": "Serbia", "690": "Seychelles", "694": "Sierra Leone", "702": "Singapore", "534": "Sint Maarten (Dutch part)", "703": "Slovakia", "705": "Slovenia", "90": "Solomon Islands", "706": "Somalia", "710": "South Africa", "239": "South Georgia and the South Sandwich Islands", "728": "South Sudan", "724": "Spain", "144": "Sri Lanka", "729": "Sudan (the)", "740": "Suriname", "744": "Svalbard and Jan Mayen", "752": "Sweden", "756": "Switzerland", "760": "Syrian Arab Republic (the)", "762": "Tajikistan", "834": "Tanzania, the United Republic of", "764": "Thailand", "626": "Timor-Leste", "768": "Togo", "772": "Tokelau", "776": "Tonga", "780": "Trinidad and Tobago", "788": "Tunisia", "792": "Turkey", "795": "Turkmenistan", "796": "Turks and Caicos Islands (the)", "798": "Tuvalu", "800": "Uganda", "804": "Ukraine", "784": "United Arab Emirates (the)", "826": "United Kingdom of Great Britain and Northern Ireland (the)", "581": "United States Minor Outlying Islands (the)", "840": "United States of America (the)", "858": "Uruguay", "860": "Uzbekistan", "548": "Vanuatu", "862": "Venezuela (Bolivarian Republic of)", "704": "Viet Nam", "92": "Virgin Islands (British)", "850": "Virgin Islands (U.S.)", "876": "Wallis and Futuna", "732": "Western Sahara*", "887": "Yemen", "894": "Zambia", "716": "Zimbabwe"};

const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Default data.csv content
const defaultCSV = `012,1577880000,320
012,1580558400,612
012,1580558400,994
012,1583064000,156
012,1583064000,204
012,1588334400,293
012,1588334400,347
024,1591012800,472
024,1591012800,528
024,1596283200,693
032,1596283200,747
032,1598961600,956
032,1598961600,1004
051,1604232000,1261
051,1604232000,1299
070,1606824000,1608
070,1606824000,1632
076,1580558400,1997
076,1580558400,2003
076,1583064000,2428
076,1583064000,2412
076,1588334400,2901
076,1588334400,2859
096,1591012800,3416
096,1591012800,3344
120,1596283200,3973
120,1596283200,3867
120,1598961600,4572
120,1598961600,4428
152,1604232000,5213
158,1604232000,5027
158,1606824000,5896
158,1606824000,5664
208,1580558400,6621
208,1580558400,6339
208,1583064000,7388
300,1583064000,7052
300,1588334400,8197`;

// App State
let records = [];
let currentIdx = -1;
let state = 'inactive'; // inactive, initialized, running, done
let timer = null;
let playSpeed = 600; // ms
let ctr = {
    country: 0,
    month: 0,
    year: 0,
    total_month: 0,
    total_country: 0,
    total_global: 0
};
let termLines = [];
let myChart = null;
let currentChartType = 'cases'; // cases, timeline

// DOM Elements
const recordsList = document.getElementById('records-list');
const btnStart = document.getElementById('btn-start');
const btnStep = document.getElementById('btn-step');
const btnAuto = document.getElementById('btn-auto');
const btnReset = document.getElementById('btn-reset');
const speedRange = document.getElementById('speed-range');
const speedValue = document.getElementById('speed-value');

const varRegCountry = document.getElementById('var-reg-country');
const varRegMonth = document.getElementById('var-reg-month');
const varRegCases = document.getElementById('var-reg-cases');

const varCtrCountry = document.getElementById('var-ctr-country');
const varCtrMonth = document.getElementById('var-ctr-month');
const varCtrYear = document.getElementById('var-ctr-year');
const varCtrTotalMonth = document.getElementById('var-ctr-total-month');
const varCtrTotalCountry = document.getElementById('var-ctr-total-country');
const varCtrTotalGlobal = document.getElementById('var-ctr-total-global');

const flowLoad = document.getElementById('flow-load');
const flowBreakCountry = document.getElementById('flow-break-country');
const flowBreakMonth = document.getElementById('flow-break-month');
const flowAccumulate = document.getElementById('flow-accumulate');

const terminalContent = document.getElementById('terminal-content');
const termStatus = document.getElementById('term-status');

const csvFileInput = document.getElementById('csv-file');
const btnResetData = document.getElementById('btn-reset-data');

// Helpers
function getCountryName(code) {
    return countryNames[code] || `Country ${code}`;
}

function getMonthName(idx) {
    return months[idx] || `Month ${idx}`;
}

function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const parsed = [];
    for (let line of lines) {
        line = line.trim();
        if (!line) continue;
        const parts = line.split(',');
        if (parts.length === 3) {
            const country = parseInt(parts[0]);
            const timestamp = parseInt(parts[1]);
            const cases = parseInt(parts[2]);
            
            // Convert timestamp to month and year
            const dateObj = new Date(timestamp * 1000);
            const month = dateObj.getUTCMonth();
            const year = dateObj.getUTCFullYear();
            
            parsed.push({ country, month, year, cases, timestamp });
        }
    }
    // "Corte de control" requires sorting by country first, then by month
    parsed.sort((a, b) => {
        if (a.country !== b.country) return a.country - b.country;
        return a.month - b.month;
    });
    return parsed;
}

function updateRecordsUI() {
    recordsList.innerHTML = '';
    records.forEach((rec, idx) => {
        const row = document.createElement('div');
        row.className = 'record-row';
        row.id = `rec-row-${idx}`;
        row.innerHTML = `
            <div class="record-meta">
                <span class="record-country-name">${getCountryName(rec.country)} (${rec.country})</span>
                <span class="record-date">${getMonthName(rec.month)} ${rec.year}</span>
            </div>
            <div class="record-cases-val">${rec.cases.toLocaleString()}</div>
        `;
        recordsList.appendChild(row);
    });
}

function highlightRecordRow(idx) {
    document.querySelectorAll('.record-row').forEach(row => row.classList.remove('active'));
    const activeRow = document.getElementById(`rec-row-${idx}`);
    if (activeRow) {
        activeRow.classList.add('active');
        activeRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function updateVariablesUI(reg = null) {
    if (reg) {
        varRegCountry.textContent = reg.country;
        varRegMonth.textContent = getMonthName(reg.month);
        varRegCases.textContent = reg.cases;
        pulseElement(varRegCountry.parentElement);
        pulseElement(varRegMonth.parentElement);
        pulseElement(varRegCases.parentElement);
    } else {
        varRegCountry.textContent = '-';
        varRegMonth.textContent = '-';
        varRegCases.textContent = '-';
    }

    varCtrCountry.textContent = ctr.country ? `${getCountryName(ctr.country)} (${ctr.country})` : '-';
    varCtrMonth.textContent = ctr.country ? getMonthName(ctr.month) : '-';
    varCtrYear.textContent = ctr.year || '-';
    
    varCtrTotalMonth.textContent = ctr.total_month.toLocaleString();
    varCtrTotalCountry.textContent = ctr.total_country.toLocaleString();
    varCtrTotalGlobal.textContent = ctr.total_global.toLocaleString();
}

function pulseElement(el) {
    el.classList.add('active-pulse');
    setTimeout(() => el.classList.remove('active-pulse'), 400);
}

function writeToTerminal(text) {
    termLines.push(text);
    terminalContent.textContent = termLines.join('\n');
    terminalContent.parentElement.scrollTop = terminalContent.parentElement.scrollHeight;
}

function highlightFlowStep(activeStepEl) {
    [flowLoad, flowBreakCountry, flowBreakMonth, flowAccumulate].forEach(el => el.classList.remove('active'));
    if (activeStepEl) {
        activeStepEl.classList.add('active');
    }
}

// Control Break Logic Steps
function initSimulation() {
    if (records.length === 0) return;
    
    // Stop any autoplay
    stopAutoPlay();

    termLines = [];
    terminalContent.textContent = '';
    termStatus.textContent = 'En ejecución';
    termStatus.className = 'terminal-status running';

    // load_year
    currentIdx = 0;
    const firstReg = records[0];
    ctr.year = firstReg.year;
    ctr.country = firstReg.country;
    ctr.month = firstReg.month;
    ctr.total_global = 0;
    ctr.total_country = 0;
    ctr.total_month = 0;

    writeToTerminal(`Año: ${ctr.year}`);
    writeToTerminal(`-------------------------------------`);
    writeToTerminal(`Pais: ${getCountryName(ctr.country)} `);

    highlightRecordRow(0);
    updateVariablesUI(firstReg);
    highlightFlowStep(flowLoad);

    state = 'initialized';
    
    btnStart.innerHTML = '<i class="fas fa-play"></i> Continuar';
    btnStart.disabled = true;
    btnStep.disabled = false;
    btnAuto.disabled = false;
    btnReset.disabled = false;
}

function stepSimulation() {
    if (state === 'inactive') {
        initSimulation();
        return;
    }
    if (state === 'done') return;

    if (currentIdx >= records.length) {
        // close_global
        ctr.country = 0;
        
        // Print month total
        writeToTerminal(`Mes: ${getMonthName(ctr.month)} Total: ${ctr.total_month}`);
        
        // Print country total & global total
        writeToTerminal(`Total:  ${ctr.total_country}`);
        writeToTerminal(`-------------------------------------`);
        writeToTerminal(`Total: ${ctr.total_global}`);

        updateVariablesUI();
        highlightFlowStep(null);
        document.querySelectorAll('.record-row').forEach(row => row.classList.remove('active'));

        state = 'done';
        termStatus.textContent = 'Finalizado';
        termStatus.className = 'terminal-status';
        stopAutoPlay();
        btnStep.disabled = true;
        btnAuto.disabled = true;
        return;
    }

    const reg = records[currentIdx];
    updateVariablesUI(reg);
    highlightRecordRow(currentIdx);

    if (reg.country !== ctr.country) {
        highlightFlowStep(flowBreakCountry);
        
        // close_month in close_country
        writeToTerminal(`Mes: ${getMonthName(ctr.month)} Total: ${ctr.total_month}`);
        ctr.month = reg.month;
        ctr.total_month = reg.cases;
        ctr.total_global += reg.cases;

        // close_country
        ctr.country = reg.country;
        writeToTerminal(`Total:  ${ctr.total_country}`);
        writeToTerminal(`-------------------------------------`);
        writeToTerminal(`Pais: ${getCountryName(ctr.country)} `);
        ctr.total_country = reg.cases;
    }
    else if (reg.month !== ctr.month) {
        highlightFlowStep(flowBreakMonth);

        // close_month
        writeToTerminal(`Mes: ${getMonthName(ctr.month)} Total: ${ctr.total_month}`);
        ctr.month = reg.month;
        ctr.total_month = reg.cases;
        ctr.total_global += reg.cases;
        
        // Accumulate country cases in loop body
        ctr.total_country += reg.cases;
    }
    else {
        highlightFlowStep(flowAccumulate);
        
        ctr.total_month += reg.cases;
        ctr.total_country += reg.cases;
        ctr.total_global += reg.cases;
    }

    updateVariablesUI(reg);
    
    // Read next record for next step
    currentIdx++;
}

function startAutoPlay() {
    if (timer) return;
    btnAuto.innerHTML = '<i class="fas fa-pause"></i> Pausar';
    btnAuto.className = 'btn btn-secondary';
    btnStep.disabled = true;
    
    timer = setInterval(() => {
        stepSimulation();
        if (state === 'done') {
            stopAutoPlay();
        }
    }, playSpeed);
}

function stopAutoPlay() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
    btnAuto.innerHTML = '<i class="fas fa-forward"></i> Automático';
    btnAuto.className = 'btn btn-secondary';
    if (state !== 'done') {
        btnStep.disabled = false;
    }
}

function resetSimulation() {
    stopAutoPlay();
    state = 'inactive';
    currentIdx = -1;
    ctr = {
        country: 0,
        month: 0,
        year: 0,
        total_month: 0,
        total_country: 0,
        total_global: 0
    };
    termLines = [];
    terminalContent.textContent = 'El archivo de salida aparecerá aquí a medida que avance el corte de control...';
    termStatus.textContent = 'Inactivo';
    termStatus.className = 'terminal-status';
    
    btnStart.innerHTML = '<i class="fas fa-play"></i> Iniciar';
    btnStart.disabled = false;
    btnStep.disabled = true;
    btnAuto.disabled = true;
    btnReset.disabled = true;
    
    updateVariablesUI();
    highlightFlowStep(null);
    document.querySelectorAll('.record-row').forEach(row => row.classList.remove('active'));
}

// Chart.js Aggregations & Setup
function buildChart() {
    if (myChart) {
        myChart.destroy();
    }

    const ctx = document.getElementById('covidChart').getContext('2d');
    
    if (currentChartType === 'cases') {
        // Aggregate cases by country
        const countryTotals = {};
        records.forEach(rec => {
            const countryName = getCountryName(rec.country);
            countryTotals[countryName] = (countryTotals[countryName] || 0) + rec.cases;
        });

        const labels = Object.keys(countryTotals);
        const data = Object.values(countryTotals);

        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Casos Totales Registrados',
                    data: data,
                    backgroundColor: 'rgba(59, 130, 246, 0.55)',
                    borderColor: '#3b82f6',
                    borderWidth: 1.5,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#cbd5e1', font: { family: 'Outfit' } }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#94a3b8', font: { family: 'Outfit' } },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    y: {
                        ticks: { color: '#94a3b8', font: { family: 'Outfit' } },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    }
                }
            }
        });
    } else {
        // Evolution timeline of cases per month
        // Generate monthly data structure for top countries
        const monthlyTimeline = {}; // { countryName: [12 values for each month] }
        const countryTotalsForFilter = {};
        
        records.forEach(rec => {
            const countryName = getCountryName(rec.country);
            countryTotalsForFilter[countryName] = (countryTotalsForFilter[countryName] || 0) + rec.cases;
        });

        // Get top 6 countries to avoid visual clutter
        const topCountries = Object.entries(countryTotalsForFilter)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(e => e[0]);

        topCountries.forEach(c => {
            monthlyTimeline[c] = Array(12).fill(0);
        });

        records.forEach(rec => {
            const countryName = getCountryName(rec.country);
            if (topCountries.includes(countryName)) {
                monthlyTimeline[countryName][rec.month] += rec.cases;
            }
        });

        // Only include months that have data
        const activeMonthIndices = [];
        for (let m = 0; m < 12; m++) {
            let hasData = false;
            topCountries.forEach(c => {
                if (monthlyTimeline[c][m] > 0) hasData = true;
            });
            if (hasData) activeMonthIndices.push(m);
        }

        const labels = activeMonthIndices.map(idx => months[idx]);
        const datasets = topCountries.map((country, cIdx) => {
            const colors = [
                '#3b82f6', '#8b5cf6', '#14b8a6', '#ef4444', '#f59e0b', '#ec4899'
            ];
            const color = colors[cIdx % colors.length];
            return {
                label: country,
                data: activeMonthIndices.map(mIdx => monthlyTimeline[country][mIdx]),
                borderColor: color,
                backgroundColor: color + '20',
                borderWidth: 2,
                tension: 0.3,
                fill: false
            };
        });

        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#cbd5e1', font: { family: 'Outfit' } }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#94a3b8', font: { family: 'Outfit' } },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    y: {
                        ticks: { color: '#94a3b8', font: { family: 'Outfit' } },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    }
                }
            }
        });
    }
}

// Event Listeners
btnStart.addEventListener('click', () => {
    if (state === 'inactive') {
        initSimulation();
    } else {
        stepSimulation();
    }
});

btnStep.addEventListener('click', stepSimulation);

btnAuto.addEventListener('click', () => {
    if (timer) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
});

btnReset.addEventListener('click', resetSimulation);

speedRange.addEventListener('input', (e) => {
    playSpeed = parseInt(e.target.value);
    speedValue.textContent = `${playSpeed} ms`;
    if (timer) {
        stopAutoPlay();
        startAutoPlay();
    }
});

// Chart switching
document.getElementById('chart-btn-cases').addEventListener('click', (e) => {
    currentChartType = 'cases';
    document.getElementById('chart-btn-cases').className = 'btn btn-sm btn-primary';
    document.getElementById('chart-btn-timeline').className = 'btn btn-sm btn-secondary';
    buildChart();
});

document.getElementById('chart-btn-timeline').addEventListener('click', (e) => {
    currentChartType = 'timeline';
    document.getElementById('chart-btn-cases').className = 'btn btn-sm btn-secondary';
    document.getElementById('chart-btn-timeline').className = 'btn btn-sm btn-primary';
    buildChart();
});

// CSV file upload handling
csvFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        const text = evt.target.result;
        const newRecords = parseCSV(text);
        if (newRecords.length > 0) {
            records = newRecords;
            resetSimulation();
            updateRecordsUI();
            buildChart();
        } else {
            alert("No se pudieron encontrar registros válidos en el archivo CSV subido.");
        }
    };
    reader.readAsText(file);
});

btnResetData.addEventListener('click', () => {
    records = parseCSV(defaultCSV);
    resetSimulation();
    updateRecordsUI();
    buildChart();
});

// Tab code views
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// App Initialization
window.addEventListener('DOMContentLoaded', () => {
    records = parseCSV(defaultCSV);
    updateRecordsUI();
    buildChart();
});
