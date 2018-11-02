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
    
    // select form input element and get value property of the input element
    var inputDatetime = d3.select('#datetime').property('value');

    var inputCity = d3.select('#city').property('value');

    var inputState = d3.select('#state').property('value');

    // var inputShape = d3.select('.dropdown-item').property('value');

    // clear the table body 
    tbody.html("");

    // build function to build new table with filtered results 
    function filteredTable(entry) {
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
    };
    
    // do this if there is input only for date time
    if (inputDatetime) {
        function filterByDate(dataSet) {
            return dataSet.datetime === inputDatetime;
        }

        var filteredByDate = data.filter(filterByDate);

        filteredByDate.forEach(filteredTable);
    }

    // do this if there is input only for city
    else if (inputCity) {
        function filterByCity(dataSet) {
            return dataSet.city === inputCity;
        }

        var filteredByCity = data.filter(filterByCity);

        filteredByCity.forEach(filteredTable);
    }

    else if (inputState) {
        function filterByState(dataSet) {
            return dataSet.state === inputState;
            // fix it so it'll work even if the state abbr are entered in caps
        }

        var filteredByState = data.filter(filterByState);

        filteredByState.forEach(filteredTable);
    }

    // do this if there is input for city and date time only
    // else if (inputCity && inputDatetime) {
    //     var filter1 = data.filter(filterByDate);
    //     var filter2 = filter1.filter(filterByCity);
        
    //     filter2.forEach(filteredResult);
    // }

    else {
        console.log("code still under progress...")
    }

    // console.log(filteredByDate);
    // console.log(inputCity);
    // console.log(inputDatetime);
    // console.log(inputShape);
    // console.log(inputState);
});

