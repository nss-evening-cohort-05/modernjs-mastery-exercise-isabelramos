$(document).ready(function() {


	marvelInfo = [];
	console.log(marvelInfo);


	$("#x-men").click((event) => {
	    console.log($(event.currentTarget));
	  });

	$("#avengers").click((event) => {
	    console.log($(event.currentTarget));
	  });

	$("#guardians").click((event) => {
	    console.log($(event.currentTarget));
	  });


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


		Promise.all([loadTeams(), loadGenders(), loadCharacters()])
		.then(function(result){
			result.forEach(function(xhrCall) {
				xhrCall.forEach(function(marvel) {
					marvelInfo.push(marvel);
				});
			});

			// writeToDOM();

	})
	.catch(function(error) {
		console.log(error);
	});











});