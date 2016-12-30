//Copyright (c) Matthew Whitaker 2016
function getResults(searchQuery) {
  var resultDiv = document.getElementById("inner_results");
  //SUN-----------------------------------------------------------------------------------
  switch(searchQuery.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"")) {
    case "show me the sun":
      resultDiv.innerHTML = getImageResultString("Here is an image of the sun right now, constructed by compiling the two STEREO spacecraft's images of the sun with the image of the sun from the Earth. The animation starts at 0&deg; (What we can see from Earth right now), and rotates to show the sun from different angles.", "https://stereo.gsfc.nasa.gov/beacon/euvi_195_rotated.gif");
      break;
    default:
      resultDiv.innerHTML = getTextResultString('No live data found on this site for "'+searchQuery+'"');
      break;
                    }
}

function getImageResultString(resultText, resultImageURL) {
  return '<div class="result"><img class="result-image" src="'+resultImageURL+'" alt="result image" width="50%"/><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
function getTextResultString(resultText) {
  return '<div class="result"><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
function getTextBoldResultString(resultText, boldText) {
  return '<div class="result"><span class="result-header">'+boldText+'</span><br /><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
