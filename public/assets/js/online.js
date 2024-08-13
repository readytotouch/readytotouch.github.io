(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// library settings ApexCharts

var date = new Date();
var month = date.getMonth() + 1;
var daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
function getMonth() {
  return month < 10 ? ".0".concat(month) : month;
}
var correctMonth = getMonth();
function createData() {
  var result = [];
  for (var i = 1; i < daysInMonth; i++) {
    result.push({
      x: Math.floor(Math.random() * 100),
      y: i >= 10 || i === 0 ? i + correctMonth : "0".concat(i).concat(correctMonth)
    });
  }
  return result;
}
var data = createData();
var onlineOptions = {
  series: [{
    name: 'Views',
    data: data.map(function (item) {
      return item.x;
    })
  }],
  chart: {
    type: 'area',
    height: 340,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#8D6DFF'],
  fill: {
    type: 'gradient',
    colors: ['#8D6DFF'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.65,
      opacityTo: 0.3
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  labels: data.map(function (item) {
    return item.y;
  }),
  xaxis: {
    type: 'datey'
  },
  yaxis: {
    labels: {
      style: {
        colors: ['#575D65'],
        fontSize: '14px'
      }
    }
  },
  markers: {
    size: 5,
    colors: ['#fff'],
    strokeColors: '#8D6DFF',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDasharray: 1,
    fillOpacity: 1,
    shape: 'circle',
    radius: 2
  }
};
var registrationOptions = {
  series: [{
    name: 'Views',
    data: data.map(function (item) {
      return item.x;
    })
  }],
  chart: {
    type: 'area',
    height: 340,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#5484FF'],
  fill: {
    type: 'gradient',
    colors: ['#5484FF'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.65,
      opacityTo: 0.3
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  labels: data.map(function (item) {
    return item.y;
  }),
  xaxis: {
    type: 'datey'
  },
  yaxis: {
    labels: {
      style: {
        colors: ['#575D65'],
        fontSize: '14px'
      }
    }
  },
  markers: {
    size: 5,
    colors: ['#fff'],
    strokeColors: '#5484FF',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDasharray: 1,
    fillOpacity: 1,
    shape: 'circle',
    radius: 2
  }
};
var $online = document.querySelector('.js-chart-online-statistics');
if ($online) {
  var chart = new ApexCharts($online, onlineOptions);
  chart.render();
}
var $registrations = document.querySelector('.js-chart-registration-statistics');
if ($registrations) {
  var _chart = new ApexCharts($registrations, registrationOptions);
  _chart.render();
}

},{}]},{},[1]);

//# sourceMappingURL=online.js.map
