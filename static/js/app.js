// from data.js
var tableData = data;

// Select table body with D3
var tbody = d3.select('tbody');

// select table with D3
var ufoTable = d3.select('#ufo-table');

    // iterate through the data 
    data.forEach(entry => {
        // append one table row per each object
        var row = tbody.append("tr");
        
        // extract data from the object and assign to variables
        var datetime = entry.datetime;
        var city = entry.city;
        var state = entry.state;
        var country = entry.country;
        var shape = entry.shape;
        var durationMinutes = entry.durationMinutes;
        var comments = entry.comments;
       
        // append one cell for each variable
        row.append("td").text(datetime);
        row.append("td").text(city);
        row.append("td").text(state);
        row.append("td").text(country);
        row.append("td").text(shape);
        row.append("td").text(durationMinutes);
        row.append("td").text(comments);
    });

// select filter button with d3
var filterBtn = d3.select("#filter-btn");

// create on change link
filterBtn.on("click", function() {
    
    //Prevent the page from refreshing
    d3.event.preventDefault();

    // select the form input element and get the input
    var inputElement = d3.select('#datetime');
    
    // Get the value property of the input element
    var inputValue = inputElement.property('value');

    // clear the table body 
    tbody.html("");

    // filter the data by input date 
    function filterByDate(dataSet) {
        var inputValue = inputElement.property("value");
        return dataSet.datetime === inputValue;
    }

    var filteredByDate = data.filter(filterByDate);
    
    filteredByDate.forEach(entry => {
        // append one table row per each object
        var row = tbody.append("tr");
        
        // extract data from the object and assign to variables
        var datetime = entry.datetime;
        var city = entry.city;
        var state = entry.state;
        var country = entry.country;
        var shape = entry.shape;
        var durationMinutes = entry.durationMinutes;
        var comments = entry.comments;
       
        // append one cell for each variable
        row.append("td").text(datetime);
        row.append("td").text(city);
        row.append("td").text(state);
        row.append("td").text(country);
        row.append("td").text(shape);
        row.append("td").text(durationMinutes);
        row.append("td").text(comments);
    });
    // console.log(filteredByDate);

});

