/**
 * Created by Dean on 22/07/2015.
 */

var randomScalingFactor = function () {
    return Math.round(Math.random() * 100)
};


var withData = function (callback) {
    $.post("/weather_data", 'Townsville', callback, "json");
};

withData(function (data, textStatus) {
    var values = JSON.parse(data.responseText);
    return {
        labels: ["Day 0", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
            {
                label: "Minimum Temperatures",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [values.min_0, values.min_1, values.min_2, values.min_3, values.min_4, values.min_5,
                    values.min_6, values.min_7]
            },
            {
                label: "Maximum Tempretures",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [values.max_0, values.max_1, values.max_2, values.max_3, values.max_4, values.max_5,
                    values.max_6, values.max_7]
            }
        ]
    }
});

window.onload = function () {
    var ctx = document.getElementById("chart").getContext("2d");
    window.myLine = new Chart(ctx).Line(withData(), {
        responsive: true
    });
};

