/**
 * Created by Dean on 22/07/2015.
 */

var randomScalingFactor = function () {
    return Math.round(Math.random() * 100)
};
var lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "April", "May", "June", "July", "April", "May", "June", "July" ],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [50, randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),23,45,63,83,23,56,33,78,31,]
        },
    ]

}

window.onload = function () {
    var ctx = document.getElementById("chart").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
}

