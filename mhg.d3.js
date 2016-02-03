var plotMHG = function(target_id, res, presence) {

    // Settings.
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var enrichmentHeight = 250;
    var presenceHeight = 50;
    var plotMargin = 25;

    var x = d3.scale.linear()
        .range([0, width])
        .domain(d3.extent(res.mhg, function(d, i) { return i; }));

    var y = d3.scale.linear()
        .range([enrichmentHeight, 0])
        .domain(d3.extent(res.mhg, function(d) { return d; }));

    var y2 = d3.scale.linear()
        .range([presenceHeight, 0])
        .domain([1, 0]);

    // Remove any old panels.
    d3.select("#mhg-svg")
        .remove();

    // Create a panel.
    var svg = d3.select(target_id).append("svg")
        .attr("id", "mhg-svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Create the line plot of enrichment.
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + enrichmentHeight + ")")
        .call(xAxis)

    // Add the p-value to the x axis.
    .append("text")
        .attr("x", x(res.threshold) + 10)
        .attr("y", -20)
        .style("text-anchor", "begin")
        .text("P = " + roundNumber(res.pvalue));

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
    .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Enrichment")

    var enrich = d3.svg.line()
        .x(function(d, i) { return x(i); })
        .y(function(d) { return y(d); });

    svg.append("g")
        .attr("class", "enrichment")
    .append("path")
        .datum(res.mhg)
        .attr("class", "line")
        .attr("d", enrich);

    // Create a line at the rank with the minimum hypergeometric p-value.
    svg.append("g")
    .attr("class", "threshold")
        .selectAll("g")
    .data([{ x: res.threshold, y: d3.max(res.mhg) }])
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(" + x(d.x) + ",0)"; })
    .append("rect")
        .attr("y", function(d) { return y(d.y); })
        .attr("height", function(d) { return enrichmentHeight - y(d.y); })
        .attr("width", 1)
        .attr("fill", "red");

    // Create a bar chart to indicate presence and absence.
    var bars = presence.map(function(d, i) {
    if (d > 0) {
        return {x: i, y: 1};
    }
    }).filter(function(x) {return x;})

    svg.append("g")
    .attr("class", "bars")
        .attr("transform", "translate(0," +
            (enrichmentHeight + plotMargin + presenceHeight) + ")")
        .selectAll("g")
    .data(bars)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(" + x(d.x) + ",0)"; })
    .append("rect")
        .attr("y", function(d) { return 0 - presenceHeight; })
        .attr("height", function(d) { return y2(d.y); })
        .attr("width", 0.5);

};
