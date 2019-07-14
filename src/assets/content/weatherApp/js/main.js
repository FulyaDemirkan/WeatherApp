/*
Student name: Fulya Demirkan
Student number: 991460409
*/

function initMap() {
	var city = $("#city")[0];
	var city1 = $("#city1")[0];
	var city2 = $("#city2")[0];
	var city3 = $("#city3")[0];

	var autocompleteCity = new google.maps.places.Autocomplete(city);
	var autocompleteCity1 = new google.maps.places.Autocomplete(city1);
	var autocompleteCity2 = new google.maps.places.Autocomplete(city2);
	var autocompleteCity3 = new google.maps.places.Autocomplete(city3);
	
	document.getElementById('citySubmit').addEventListener('click', function() {
		$("#cityDetails").empty();
		
		var lat = autocompleteCity.getPlace().geometry.location.lat();
		var long = autocompleteCity.getPlace().geometry.location.lng();
		
		getLocationForecastData(lat, long);
		getLocationWeatherData(lat, long);
	});
	
	document.getElementById('compareSubmit').addEventListener('click', function() {
		
		compareConfig.labels = [];
		compareConfig.datasets = [];
		compareConfig.datasets.labels = [];
		compareChart.options.legend.display = false;
		compareChart.update();
	
		$("#compareDetails").empty();
		
		var cities = [];		
		if(city1.value != "")
		{
			var lat_city1 = autocompleteCity1.getPlace().geometry.location.lat();
			var long_city1 = autocompleteCity1.getPlace().geometry.location.lng();

			cities.push({lat: lat_city1,long: long_city1});
		}
		
		if(city2.value != "")
		{
			var lat_city2 = autocompleteCity2.getPlace().geometry.location.lat();
			var long_city2 = autocompleteCity2.getPlace().geometry.location.lng();
			
			cities.push({lat: lat_city2,long: long_city2});
		}
		
		if(city3.value != "")
		{
			var lat_city3 = autocompleteCity3.getPlace().geometry.location.lat();
			var long_city3 = autocompleteCity3.getPlace().geometry.location.lng();
			
			cities.push({lat: lat_city3,long: long_city3});
		}
		
		for(var i = 0; i < cities.length; i++)
		{
			getCompareForecastData(cities[i], i);
			getCompareWeatherData(cities[i], i);
		}
		
	});
}

/*
Chart parameters for a single city
*/
var cityChart;
var cityConfig = {
		datasets: [{
			  label: 'Temperature',
			  data: [],
			  type: "line",
			  fill: false,
			  pointRadius: 4,
			  pointStyle: 'circle',
			  borderColor: 'rgb(244, 95, 66)',
			  yAxisID: 'left-y-axis'
			}, {
			  label: 'Rainfall',
			  fill: true,
			  data: [],
			  backgroundColor: 'rgba(66, 164, 244, 0.4)',
			  yAxisID: 'right-y-axis',
			  type: 'bar'
			}],
		labels: []
};
var cityChartOptions = {
	responsive: true,
	title: {
		display: true,
		fontSize: 20,
		fontStyle: "bold"
	},
	tooltips: {
		mode: 'index',
		intersect: false
	},
	hover: {
		mode: 'nearest',
		intersect: true
	},
	scales: {
		yAxes: [{
			id: 'left-y-axis',
			type: 'linear',
			position: 'left',
			display: true,
			ticks: {
				suggestedMax: 30,
				callback: function(value, index, values) {
					return value + '°C';
				},
			},
			scaleLabel: {
				display: true,
				labelString: 'Temperature',
				fontSize: 20,
				fontStyle: "bold",
				fontColor: 'rgb(244, 95, 66)'
			},
		}, {
			id: 'right-y-axis',
			type: 'linear',
			position: 'right',
			display: true,
			ticks: {
				beginAtZero: true,
				suggestedMax: 5,
				callback: function(value, index, values) {
					return value + ' mm';
				},
			},
			scaleLabel: {
				display: true,
				labelString: 'Rainfall',
				fontSize: 20,
				fontStyle: "bold",
				fontColor: 'rgb(66, 164, 244)'
			}
		}]
	}
};

/*
Chart parameters for multiple cities
*/
var compareChart;
var compareConfig = {
		datasets: [],
		labels: []
};
var compareChartOptions = {
	responsive: true,
	title: {
		display: true,
		text: 'Weather Comparison',
		fontSize: 20,
		fontStyle: "bold"
	},
	tooltips: {
		mode: 'index',
		intersect: false
	},
	hover: {
		mode: 'nearest',
		intersect: true
	},
	legend: {
		display: false,
	},
	scales: {
		yAxes: [{
			type: 'linear',
			position: 'left',
			display: true,
			ticks: {
				suggestedMax: 30,
				callback: function(value, index, values) {
					return value + '°C';
				},
			},
			scaleLabel: {
				display: true,
				labelString: 'Temperature',
				fontSize: 20,
				fontStyle: "bold",
				fontColor: 'rgb(244, 95, 66)'
			}
		}]
	}
};

$(function(){
	
	/*
	Get forecast data for a single city and draw the chart
	*/
	var cityCtx = $("#chartCity")[0].getContext('2d');

	cityChart = new Chart(cityCtx, {
		type: "bar",
		data: cityConfig,
		options: cityChartOptions
		});
		
	getLocation();
	
	/*
	Get forecast data for multiple cities and draw the chart
	*/
	var compareCtx = document.getElementById('chartCompare').getContext('2d');
	
	compareChart = new Chart(compareCtx, {
		type: "line",
		data: compareConfig,
		options: compareChartOptions
	});
});


///////////////////////////////////////////////////////////////////
// CITY WEATHER
///////////////////////////////////////////////////////////////////

/*
Location info from Geolocation
*/
function getLocation() {
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
			getLocationForecastData(lat, long);
			getLocationWeatherData(lat, long);
		});
	}
	else
	{
		$("#errormessage").html = "<p>GeoLocation not supported.</p>";
	}
}
 
/*
Get forecast data from OpenWeatherMap for a single city
*/
function getLocationForecastData(lat, long) {
	
	var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" +long + "&appid=e76a94750e15b175be0d8f2f9da72a1f";
	
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'JSON',
		success: function(data)
		{
			//storeData(data);
			drawCityChart(data);
		}
	});
} 

/*
Get current weather data from OpenWeatherMap for a single city
*/
function getLocationWeatherData(lat, long) {
	
	var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +long + "&appid=e76a94750e15b175be0d8f2f9da72a1f";
	
	//console.log(url);
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'JSON',
		success: function(data)
		{
			refreshCityTable(data);
		}
	});
} 

/*
Display the current weather information for a single city
*/
function refreshCityTable(myJson){
	var icon = myJson.weather[0].icon;
	
	$("#cityDetails").html(
	"<h2>Weather in " + myJson.name + ", " + myJson.sys.country + "</h2>" +
	"<img src='https://openweathermap.org/img/w/" + icon + ".png'/>" + 
	"<span><b>" + (Math.round(myJson.main.temp-273.15))+ "&#8451;</b></span>" +
	"<p>" + myJson.weather[0].description + "</p>" +
	"<table data-role='table' data-mode='reflow' class='weather ui-responsive'>"+ 
		"<tr>"+
			"<td>Clouds</td>"+"<td>" + myJson.clouds.all + "%</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Humidity</td>"+"<td>" + myJson.main.humidity + "%</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Wind</td>"+"<td>Speed - " + myJson.wind.speed + "</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Pressure</td>"+"<td>" + myJson.main.pressure + "hpa</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Sunrise</td>"+"<td>" + moment.unix(myJson.sys.sunrise).format("HH:mm a") + "</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Sunset</td>"+"<td>" + moment.unix(myJson.sys.sunset).format("HH:mm a") + "</td>"+
		"</tr>"+
	"</table>");
}

/*
Draw a single city chart with temperature and rainfall data
*/
function drawCityChart(myJson) {
	
	var tempLabel = new Array();
	var tempData = new Array();
	var rainData = new Array();
	
	for(i in myJson.list)
	{
		tempLabel.push(myJson.list[i].dt_txt);
		tempData.push(Math.round(myJson.list[i].main.temp-273.15));
		
		if(myJson.list[i].rain == undefined)
		{	
			rainData.push(0);
		} 
		else if(myJson.list[i].rain["3h"] == null)
		{	
			rainData.push(0);
		} else
		{ 
			rainData.push(myJson.list[i].rain["3h"]);
		}
	}
	cityConfig.datasets[0].data = tempData;
	cityConfig.datasets[1].data = rainData;
	cityConfig.labels = tempLabel;
	cityChart.options.title.text = "Weather in " + myJson.city.name;
	cityChart.update();
}


///////////////////////////////////////////////////////////////////
// COMPARISON 
///////////////////////////////////////////////////////////////////

/*
Get forecast data from OpenWeatherMap for a single city for comparison
*/
function getCompareForecastData(city, index) {
	var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + city.lat + "&lon=" + city.long + "&appid=e76a94750e15b175be0d8f2f9da72a1f";
	
	//console.log(url);

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'JSON',
		success: function(data)
		{
			drawCompareChart(data, index);
		}
	});
} 

/*
Get current weather data from OpenWeatherMap for a single city for comparison
*/
function getCompareWeatherData(city, index) {
	var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + city.lat + "&lon=" + city.long + "&appid=e76a94750e15b175be0d8f2f9da72a1f";
	
	//console.log(url);

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'JSON',
		success: function(data)
		{
			refreshCompareTable(data, index);
		}
	});
} 

/*
Draw a comparison chart with temperature data
*/
function drawCompareChart(myJson, index) {
	
	var tempLabel = new Array();
	var tempData = new Array();
			
	for(i in myJson.list)
	{
		tempLabel.push(myJson.list[i].dt_txt);
		tempData.push(Math.round(myJson.list[i].main.temp-273.15));
	}

	var color = ['rgb(244, 95, 66)','rgb(144, 95, 66)', 'rgb(244, 0, 0)']
	var dataset = {
		data: tempData,
		label: myJson.city.name,
		fill: false,
		pointRadius: 4,
		pointStyle: 'circle',
		borderColor: color[index]
	}
	compareConfig.datasets.push(dataset);
	compareConfig.labels = tempLabel;
	compareChart.options.legend.display = true;
	compareChart.update();
}

/*
Display the current weather information for multiple cities.
*/
function refreshCompareTable(myJson){
	var icon = myJson.weather[0].icon;
	
	$("#compareDetails").append(
	"<h2>Weather in " + myJson.name + ", " + myJson.sys.country + "</h2>" +
	"<img src='https://openweathermap.org/img/w/" + icon + ".png'/>" + 
	"<span><b>" + (Math.round(myJson.main.temp-273.15))+ "&#8451;</b></span>" +
	"<p>" + myJson.weather[0].description + "</p>" +
	"<table data-role='table' data-mode='reflow' class='weather ui-responsive'>"+ 
		"<tr>"+
			"<td>Clouds</td>"+"<td>" + myJson.clouds.all + "%</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Humidity</td>"+"<td>" + myJson.main.humidity + "%</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Wind</td>"+"<td>Speed - " + myJson.wind.speed + "</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Pressure</td>"+"<td>" + myJson.main.pressure + "hpa</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Sunrise</td>"+"<td>" + moment.unix(myJson.sys.sunrise).format("HH:mm a") + "</td>"+
		"</tr>"+
		"<tr>"+
			"<td>Sunset</td>"+"<td>" + moment.unix(myJson.sys.sunset).format("HH:mm a") + "</td>"+
		"</tr>"+
	"</table>");
}