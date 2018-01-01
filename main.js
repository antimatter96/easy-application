/*
	Replace \[(.+)\]
	with \{\"name\"\:\"\1\",
*/

var entries = [{
	"name" : " ",
	"url" : " ",
	"locations": [
		{"loc":"","country":"IN"},
		{"loc":"","country":"US"}
	]
	"remote" : true;
},
{
	
}]

function generateOptionsMenu(){
	var x = entries;
	
	
	/*
	
		Need all unique countries;
		All locs in a country;
		
		Read country 
		Check if there in map 
			If not
			Add to map
			Give counter
	*/
	
	//var uniqueLocations = new Map();
	var countryMap = new Map;
	
	for(var i = 0; i < entries.length; i++){
		let locEntry = entries[i].locations;
		for(var j = 0; j < locEntry.length; j++){
			
			if(countryMap[locEntry[j].country]){
				let loc = locEntry[j].loc;
				loc = loc.toLowerCase();
				loc = loc.replace(/\s|\,|\'/g,"");
				if(countryMap[locEntry[j].country].has(loc])){
					continue;
				} else{
					countryMap[locEntry[j].country].add(loc);
				}
			}
			else{
				countryMap[locEntry[j].country] = new Set();
				let loc = locEntry[j].loc;
				loc = loc.toLowerCase();
				loc = loc.replace(/\s|\,|\'/g,"");
				countryMap[locEntry[j].country].add(loc);
			}
		}
	}
	
}

var entryLength = entries.length;

for(var i = 0; i < entryLength; i++){
	
}