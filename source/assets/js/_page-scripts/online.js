// library settings ApexCharts

const date = new Date()
const month = date.getMonth() + 1
const daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

function getMonth() {
    return month < 10 ? ".0" + month : month;
}

const correctMonth = getMonth();

function createData() {
    const result = []
    for (let i = 1; i < daysInMonth; i++) {
        result.push({
            x: Math.floor(Math.random() * 100),
            y: i >= 10 || i === 0 ? i + correctMonth : "0" + i + correctMonth
        });
    }
    return result
}

const data = createData()

const onlineOptions = {
    series: [{
        name: "Views",
        data: data.map(item => item.x),
    }],
    chart: {
        type: "area",
        height: 340,
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    colors: ["#8D6DFF"],
    fill: {
        type: "gradient",
        colors: ['#8D6DFF'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.65,
            opacityTo: 0.3,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    labels: data.map(item => item.y),
    xaxis: {
        type: "datey",
    },
    yaxis: {
        labels: {
            style: {
                colors: ["#575D65"],
                fontSize: "14px",
            },
        },
    },
    markers: {
        size: 5,
        colors: ["#fff"],
        strokeColors: "#8D6DFF",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDasharray: 1,
        fillOpacity: 1,
        shape: "circle",
        radius: 2,
    },
};

const registrationOptions = {
    series: [{
        name: "Views",
        data: data.map(item => item.x),
    }],
    chart: {
        type: "area",
        height: 340,
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    colors: ["#5484FF"],
    fill: {
        type: "gradient",
        colors: ['#5484FF'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.65,
            opacityTo: 0.3,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    labels: data.map(item => item.y),
    xaxis: {
        type: "datey",
    },
    yaxis: {
        labels: {
            style: {
                colors: ["#575D65"],
                fontSize: "14px",
            },
        },
    },
    markers: {
        size: 5,
        colors: ["#fff"],
        strokeColors: "#5484FF",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDasharray: 1,
        fillOpacity: 1,
        shape: "circle",
        radius: 2,
    },
};

const $online = document.querySelector(".js-chart-online-statistics")
if ($online) {
    const chart = new ApexCharts($online, onlineOptions);
    chart.render();
}

const $registrations = document.querySelector(".js-chart-registration-statistics")
if ($registrations) {
    const chart = new ApexCharts($registrations, registrationOptions);
    chart.render();
}
