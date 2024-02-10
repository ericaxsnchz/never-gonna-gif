function sendApiRequest() {
    clearPreviousResults('.search-container')

    var userInput = document.getElementById("searchInput").value
    console.log(userInput)

    var giphyApiKey = "3qvGnKWxpi2di8iX33uvgkUdXiFIrbFN"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${giphyApiKey}&limit=5`

    fetch(giphyApiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json.data);

            var container = document.createElement("div");
            container.className = "search-container"

            json.data.forEach(function(gif){
                var imgPath = gif.images.original.url;
                var img = document.createElement("img");
                img.setAttribute("src", imgPath);
                document.body.appendChild(img);
            });
            document.body.appendChild(container);
        })
        .catch(function(eroor) {
            console.error("Error fetching Giphy API: ", error)
        })
}

function trendingRequest() {

    const trendingContainer = document.createElement('div');
    trendingContainer.className = 'trending-container';
    
    var giphyApiKey = "3qvGnKWxpi2di8iX33uvgkUdXiFIrbFN"
    var trendingURL = `https://api.giphy.com/v1/gifs/trending?&api_key=${giphyApiKey}&limit=20`

    fetch(trendingURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json.data);

            json.data.forEach(function(gif){
                var imgPath = gif.images.original.url;
                var img = document.createElement("img");
                img.setAttribute("src", imgPath);
                document.body.appendChild(img);
            });
            document.body.appendChild(container);
        })
        .catch(function(eroor) {
            console.error("Error fetching Giphy API: ", error)
        })
}

function clearPreviousResults() {
    var previousResults = document.querySelectorAll("img");
    previousResults.forEach(function(result) {
        result.remove();
    })
}

trendingRequest();