//See: https://github.com/pablojim/highcharts-ng
// var myapp = angular.module('myapp', ["highcharts-ng"]);
//
app.controller('heatmap', function ($scope) {
    $scope.chartConfig = {
        options: {
            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 40
            },
            colorAxis: {
                min: 0,
                minColor: '#C30000',
                maxColor: '#E0C200'
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 320
            },

            title: {
                text: ''
            },
             tooltip: {
                formatter: function () {
                    return '<b>' + this.series.yAxis.categories[this.point.y] + '</b> tiene el lugar <br><b>' + this.point.value + '</b> en <br><b>' + this.series.xAxis.categories[this.point.x] + '</b> - original value: ' + this.point.orig;
                }
            }           
        },
                
        xAxis: {
            categories: ['T. Espera', 'HHRR', '% Esp/Gral', 'Cat 1', 'Cat 2', 'Cat 3', 'Cat4', 'Cat 5', 'Cat 6', 'Cat 7'],
            opposite: true,
            labels: {
                formatter: function () {
                        return '<a href="#hola">' + this.value + '</a>';
                    },
                 useHTML: true
            }
        },

        yAxis: {
            categories: ['MUCAM', 'Española', 'COSEM', 'ASSE', 'Britanico'],
            title: null
        },
        
        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [
                {x: 0, y:0, value:90, orig:'0.1 dias'},
                {x: 0, y:1, value:10, orig:'5 dias'},/*,
                [0, 2, 8, 5],
                [0, 3, 24],
                [0, 4, 122],
                [1, 0, 92],*/
                {x:1, y:0, value:58, orig: '5 c/10.000 hab'},
                {x:1, y:1, value:78, orig: '10 c/10.000 hab'},
                {x:2, y:0, value:67, orig: '0.3'},
                {x:2, y:1, value:100, orig: '1'}/*,
                [1, 3, 117],
                [1, 4, 48],
                [2, 0, 35],
                [2, 1, 15],
                [2, 2, 123],
                [2, 3, 64],
                [2, 4, 52],
                [3, 0, 72],
                [3, 1, 132],
                [3, 2, 114],
                [3, 3, 19],
                [3, 4, 16],
                [4, 0, 38],
                [4, 1, 5],
                [4, 2, 8],
                [4, 3, 117],
                [4, 4, 115],
                [5, 0, 88],
                [5, 1, 32],
                [5, 2, 12],
                [5, 3, 6],
                [5, 4, 120],
                [6, 0, 13],
                [6, 1, 44],
                [6, 2, 88],
                [6, 3, 98],
                [6, 4, 96],
                [7, 0, 31],
                [7, 1, 1],
                [7, 2, 82],
                [7, 3, 32],
                [7, 4, 30],
                [8, 0, 85],
                [8, 1, 97],
                [8, 2, 123],
                [8, 3, 64],
                [8, 4, 84],
                [9, 0, 47],
                [9, 1, 114],
                [9, 2, 31],
                [9, 3, 48],
                [9, 4, 91]*/
            ],
            dataLabels: {
                enabled: true,
                color: 'black',
                style: {
                    textShadow: 'none',
                    HcTextStroke: null
                },
                formatter: function() {
                  return this.point.orig;
                }
            }
        }]
    };

});
/*app.controller('heatmap', function ($scope) {
    $scope.chartConfig = {
        options: {
            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 40
            },
            colorAxis: {
                min: 0,
                minColor: '#C30000',
                maxColor: '#E0C200'
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 320
            },

            title: {
                text: ''
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.yAxis.categories[this.point.y] + '</b> tiene el lugar <br><b>' + this.point.value + '</b> en <br><b>' + this.series.xAxis.categories[this.point.x] + '</b>';
            }
        },

        xAxis: {
            categories: ['T. Espera', 'HHRR', '% Esp/Gral', 'Cat 1', 'Cat 2', 'Cat 3', 'Cat4', 'Cat 5', 'Cat 6', 'Cat 7'],
            opposite: true,
            labels: {
                formatter: function () {
                        return '<a href="#hola">' + this.value + '</a>';
                    },
                 useHTML: true
            }
        },

        yAxis: {
            categories: ['MUCAM', 'Española', 'COSEM', 'ASSE', 'Britanico'],
            title: null
        },

        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [
                [0, 0, 10],
                [0, 1, 19],
                [0, 2, 8],
                [0, 3, 24],
                [0, 4, 122],
                [1, 0, 92],
                [1, 1, 58],
                [1, 2, 78],
                [1, 3, 117],
                [1, 4, 48],
                [2, 0, 35],
                [2, 1, 15],
                [2, 2, 123],
                [2, 3, 64],
                [2, 4, 52],
                [3, 0, 72],
                [3, 1, 132],
                [3, 2, 114],
                [3, 3, 19],
                [3, 4, 16],
                [4, 0, 38],
                [4, 1, 5],
                [4, 2, 8],
                [4, 3, 117],
                [4, 4, 115],
                [5, 0, 88],
                [5, 1, 32],
                [5, 2, 12],
                [5, 3, 6],
                [5, 4, 120],
                [6, 0, 13],
                [6, 1, 44],
                [6, 2, 88],
                [6, 3, 98],
                [6, 4, 96],
                [7, 0, 31],
                [7, 1, 1],
                [7, 2, 82],
                [7, 3, 32],
                [7, 4, 30],
                [8, 0, 85],
                [8, 1, 97],
                [8, 2, 123],
                [8, 3, 64],
                [8, 4, 84],
                [9, 0, 47],
                [9, 1, 114],
                [9, 2, 31],
                [9, 3, 48],
                [9, 4, 91]
            ],

            dataLabels: {
                enabled: true,
                color: 'black',
                style: {
                    textShadow: 'none',
                    HcTextStroke: null
                }
            }
        }]
    };

});
*/
