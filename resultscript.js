//Copyright (c) Matthew Whitaker 2016
function getResults(searchQuery) {
  var resultDiv = document.getElementById("inner_results");
  switch(searchQuery.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"")) {
      //SHOW ME THE SUN-------------------------------------------------------------------------------------------------
    case "show me the sun":
      resultDiv.innerHTML = getImageResultString("Here is an image of the sun right now, constructed by compiling the two STEREO spacecraft's images of the sun with the image of the sun from the Earth. <br />The animation starts at 0&deg; (What we can see from Earth right now), and rotates to show the sun from different angles.", "https://stereo.gsfc.nasa.gov/beacon/euvi_195_rotated.gif");
      if(compareTwoImages("https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/ahead_euvi_304_latest.jpg","")) {
      resultDiv.innerHTML += getImageResultString("Here is a visible light image of the sun as seen from the STEREO Ahead satellite. <br />It was last updated at the date and time noted on the bottom of the image.", "https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/ahead_euvi_304_latest.jpg");
      } else {
        resultDiv.innerHTML += getImageResultString("Here is a visible light image of the sun as seen from the STEREO Ahead satellite. <br />It was last updated at the date and time noted on the bottom of the image.", "https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/ahead_euvi_304_latest.jpg");
      }
      if(compareTwoImages("https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/behind_euvi_304_latest.jpg","")) {
      resultDiv.innerHTML += getImageResultString("Here is a visible light image of the sun as seen from the STEREO Behind satellite. <br />It was last updated at the date and time noted on the bottom of the image.", "https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/behind_euvi_304_latest.jpg");
      } else {
        resultDiv.innerHTML += getImageResultString("Here is a visible light image of the sun as seen from the STEREO Behind satellite. <br />It was last updated at the date and time noted on the bottom of the image.", "https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/behind_euvi_304_latest.jpg");
      }
      break;
    default:
      resultDiv.innerHTML = getTextResultString('No live data found on this site for "'+searchQuery+'"');
      break;
                    }
}

function getImageResultString(resultText, resultImageURL) {
  return '<div class="result"><img class="result-image" src="'+resultImageURL+'" alt="Image Loading..." width="50%"/><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
function getTextResultString(resultText) {
  return '<div class="result"><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
function getTextBoldResultString(resultText, boldText) {
  return '<div class="result"><span class="result-header">'+boldText+'</span><br /><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
function compareTwoImages(url1, url2) {
  var a = new Image(),
      b = new Image();
  a.src = url1;
  b.src = url2;

  // might need to wait until a and b have actually loaded, ignoring this for now
  var a_base64 = getBase64Image(a),
      b_base64 = getBase64Image(b);

  if (a_base64 === b_base64)
  {
      return true;
  }
  else
  {
      return false;
  }
}
