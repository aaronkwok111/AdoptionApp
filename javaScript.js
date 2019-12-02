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
			//var output = document.getElementById('output');
			/*for(var i=0;i<count;i++)
			{
                console.log(response.data.animals[i].name)
                elem.insertAdjacentHTML('beforeend',response.data.animals[i].name + "<br />");
				document.getElementById("demo").innerHTML = 'response.data.animals[i].name';
				//output.innerHTML = response.data.animals[i].name;
				if(Object.keys(response.data.animals[i].photos).length>0)
				{
					console.log(response.data.animals[i].photos[0].full);
					//output.innerHTML = response.data.animals[i].photos[0].full;
					
				}
				
			}*/
            //document.getElementById("result").innerHTML = response.data.animals[1].photos[0].full
            var elem = document.getElementById('result');
			/*for(var i=0;i<count;i++)
			{
                location = response.data.animals[i].photos[0].small
                elem.insertAdjacentHTML('beforeend',response.data.animals[i].name + '<img src="' + location + '"/>'+ "<br />");
                //document.getElementById('print').insertAdjacentHTML('beforeend', "something added")	  
            }*/
            location = response.data.animals[0].photos[0].small
            elem.insertAdjacentHTML('beforeend',response.data.animals[0].name + '<img src="' + location + '"/>'+ "<br />");
           
		})
			.catch(function (error) {
    		// handle any errors
		});
	});
});



