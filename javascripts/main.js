$(document).ready(function() {


	marvelInfo = [];
	console.log(marvelInfo);


	$("#x-men").click((event) => {
		dataGetter();
		$(".body-marvel-logo").hide();
	  });

	$("#avengers").click((event) => {
	    dataGetter();
		$(".body-marvel-logo").hide();
	  });

	$("#guardians").click((event) => {
	    dataGetter();
		$(".body-marvel-logo").hide();
	  });


	const writeToDOM = () => {
        var marvelString = "";

        for (var i=0; i < marvelInfo.length; i++) {
            marvelString += `<div class="col-sm-5 col-md-3">`;
            marvelString += `<div class="panel panel-default">`;
            marvelString += `<div class="panel-heading">`;
            marvelString += `<h3 class="panel-title">${marvelInfo[i].name}</h3>`;
          	marvelString += `<p>${marvelInfo[i].description}</p>`;
      		marvelString += `</div></div></div>`;
        }
        $("#container").append(marvelString);
    };


	const loadTeams = () => {
		return new Promise((resolve, reject) => {
			$.ajax("./db/teams.json")
			.done((data) => resolve(data.teams))
			.fail((error) => reject(error));
		});
	};

	const loadGenders = () => {
		return new Promise((resolve, reject) => {
			$.ajax("./db/genders.json")
			.done((data2) => resolve(data2.genders))
			.fail((error) => reject(error));
		});
	};

	const loadCharacters = () => {
		return new Promise((resolve, reject) => {
			$.ajax("./db/characters.json")
			.done((data3) => resolve(data3.characters))
			.fail((error) => reject(error));
		});
	};



	const dataGetter = () => {
		Promise.all([loadTeams(), loadGenders(), loadCharacters()])
		.then(function(result){
			result.forEach(function(xhrCall) {
				xhrCall.forEach(function(marvel) {
					marvelInfo.push(marvel);
				});
			});

			writeToDOM();

		})
		.catch(function(error) {
			console.log(error);
		});

		return Promise;
	};











});