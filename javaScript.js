var myApiKey = 'aLabKP2phRjIyjMWUlaheDWjoQ9Hs3EpaEWW6SFWtv2GvEX8JC',
	myApiSecret = 'y5Nto5yodPXbQ37b5GBY3Lyskx0LeoZ2zpdTSDOw';

// declare and initialize petFinder client side API
var pf = new petfinder.Client({apiKey: myApiKey, secret: myApiSecret});
$(document).ready(function(){

	// bind onClick function to search button
	$('#btn_search').click(function(e){
		console.log("search button pressed");

		// read and store text field value
		var myLocation = $('#tf_search').val();
		console.log(myLocation);

		// set up search parameters as JSON object, refer to API docs for
		// additional search parameters
		var params = {
			type: 'dog',
			location: myLocation,
			distance: 10
		}

		// call PetFinder API search function
		pf.animal.search(params)
			.then(function (response) {
    		// response from server with results will be given as an array of JSON objects
			console.log(response.data.animals);
			var count = Object.keys(response.data.animals).length
			console.log(count);

            var elem = document.getElementById('result');
            elem.style.visibility = "visible";
			for(var i=0;i<count;i++)
			{
				//insert elements into DOM using .insertAdjacentHTML() function
                elem.insertAdjacentHTML('beforeend',"<tr> <th>" + '<img src="' + response.data.animals[i].photos[0].small + '">' + "</th>"+ "<th>"+response.data.animals[i].name+"</th>"+ "<th>"+response.data.animals[i].breeds.primary + "</th>" +"<th>"+response.data.animals[i].gender + "</th>"+ "<th>" +'<a href="' + response.data.animals[i].url + '" target=' + '"_blank">Adopt Me!' + "</a>"+ "<th>"+response.data.animals[i].contact.email + "</th>"+ "<th>"+response.data.animals[i].distance + "</th>"+"</th> </tr>"+ "<br></br>");  
            }

		})
			.catch(function (error) {
    		// handle any errors
		});
	});
});



