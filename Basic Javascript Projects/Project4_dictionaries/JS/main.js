function my_dictionary() {
    var video_games = {
        GTA: "open world crime game",
        Halo: "fps space aliens",
        GOW: "3ps locust aliens",
        WOW: "mmorpg, biggest in world",
    

    };
    document.getElementById("dictionary").innerHTML = video_games.WOW;
    
}
//the above is a dictionary with key-value pairs. The dictionary is the variable 'video_games' and within it are the key-value pairs. It outputs the value of the specified key within the corresponding html element.

function my_dictionary_del() {
    var video_games = {
        GTA: "open world crime game",
        Halo: "fps space aliens",
        GOW: "3ps locust aliens",
        WOW: "mmorpg, biggest in world",


    };
    delete video_games.WOW;
    document.getElementById("dictionarydel").innerHTML = video_games.WOW;

}
//the above is a dictionary with key-value pairs. The dictionary is the variable 'video_games' and within it are the key-value pairs. A 'delete' operator deletes the 'WOW' key-value pair. It outputs the value of the specified 'WOW' key as 'undefined' within the corresponding html element as it has been deleted.