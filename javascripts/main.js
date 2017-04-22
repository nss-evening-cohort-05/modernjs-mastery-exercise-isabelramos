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
        let marvelString = "";

        for (let i=0; i < marvelInfo.length; i++) {
            marvelString += `<div class="row col-sm-3">`;
            marvelString += `<div class="panel">`;
            marvelString += `<div class="panel-heading"><h5>${marvelInfo[i].name}</h5></div>`;           
            marvelString += `<div class="panel-body">`;
	        if (marvelInfo[i].gender_id === 0) {
	       		marvelString += `<img class="character-image pink-border" src="${marvelInfo[i].image}">`;
	        } else {
	        	marvelString += `<img class="character-image blue-border" src="${marvelInfo[i].image}">`;
	        }
	        marvelString += `<p>${marvelInfo[i].description}</p>`;
	        marvelString += `</div>`;
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