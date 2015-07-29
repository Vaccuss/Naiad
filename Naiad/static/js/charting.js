/**
 * Created by Dean on 22/07/2015.
 */

var randomScalingFactor = function () {
    return Math.round(Math.random() * 100)
};

var withData = function (callback) {
    $.post("/weather_data", 'Townsville', callback, "json");
};


window.onload = function () {
    var ctx = document.getElementById("chart").getContext("2d");

    withData(function (data, textStatus) {
        var chartdata = {
            labels: ["Day 0", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
            datasets: [
                {
                    label: "Minimum Temperatures",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [data.min_1, data.min_1, data.min_2, data.min_4, data.min_5,
                        data.min_6, data.min_7].map(function (data) {
                            var value = parseInt(data, 10);
                            return Number.isNaN(value) ? 0 : value;
                        })
                },
                {
                    label: "Maximum Tempretures",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [data.max_0, data.max_1, data.max_2, data.max_4, data.max_5,
                        data.max_6, data.max_7].map(function (data) {
                            var value = parseInt(data, 10);
                            return Number.isNaN(value) ? 0 : value;
                        })
                }
            ]
        };
        window.myLine = new Chart(ctx).Line(chartdata, {
            responsive: true
        });
    });
};

