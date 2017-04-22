$(document).ready(function() {

	$("#x-men").click((event) => {
		dataGetter(0);
		$(".body-marvel-logo").hide();
	  });

	$("#avengers").click((event) => {
	    dataGetter(1);
		$(".body-marvel-logo").hide();
	  });

	$("#guardians").click((event) => {
	    dataGetter(2);
		$(".body-marvel-logo").hide();
	  });


	const writeToDOM = (marvel) => {
        let marvelString = "";

        for (let i=0; i < marvel.length; i++) {
            marvelString += `<div class="row col-sm-3">`;
            marvelString += `<div class="panel">`;
            marvelString += `<div class="panel-heading"><h5>${marvel[i].name}</h5></div>`;           
            marvelString += `<div class="panel-body">`;
	        if (marvel[i].gender_id === 0) {
	       		marvelString += `<img class="character-image pink-border" src="${marvel[i].image}">`;
	        } else {
	        	marvelString += `<img class="character-image blue-border" src="${marvel[i].image}">`;
	        }
	        marvelString += `<p>${marvel[i].description}</p>`;
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



	const dataGetter = (teamId) => {
		Promise.all([loadTeams(), loadGenders(), loadCharacters()])
		.then(function(result){
			let marvel = [];
			result.forEach(function(xhrCall) {
				xhrCall.forEach(function(marvelInfo) {

					if (teamId === marvelInfo.team_id) {
						marvel.push(marvelInfo);
						
					};


				});
			});

			writeToDOM(marvel);

		})
		.catch(function(error) {
			console.log(error);
		});

		return Promise;
	};











});