//movie information from json
var movieCard = JSON.parse(movies);

console.table(movieCard);

$( document ).ready(function() {
//add MovieCard
	for (let i = 0; i < movieCard.length; i++) {
		$(`<div class="col-12 col-md-6 px-5 mb-3">
				<div class="card h-100 movieCardBg text-white-50">
					<div class="row no-gutters">
						<div class="col-md-4 p-5 p-md-3 shadow-sm">
							<img src="${movieCard[i].image}" class="card-img p-3" alt= ${movieCard[i].alt}>
						</div>
						<div class="col-md-8">
							<div class="card-body h-100 d-flex flex-column">
								<h5 class="card-title">${movieCard[i].title}</h5>
								<p class="card-text">${movieCard[i].description}</p>
								<div class="card-text d-flex flex-grow-1 align-items-end justify-content-end">
									<button type=button class="btn p-0 d-flex align-items-center align-bottom mb-0">								
										<p class="text-success text-right mb-0 mr-1">Like
											<i class="fas fa-thumbs-up"></i>
										<div class="rounded-circle bg-success rating text-center text-light">
											<p class="font-weight-light mb-0 h-100 align-middle ratingValue">${movieCard[i].rating}</p>
										</div>
										</button>
									</div>										
								</div>
							</div>
						</div>
					</div>
				</div>`).appendTo(`.movieCard`);
	 }
//increment rating

	var likeBtn = $("button");
	var ratingValue = $(".ratingValue");

	for(let i = 0; i < movieCard.length; i++){

		$(likeBtn[i]).on('click', function(){
				++movieCard[i].rating;
				$(ratingValue[i]).text(movieCard[i].rating);
				console.table(movieCard);
		});
	}

});
