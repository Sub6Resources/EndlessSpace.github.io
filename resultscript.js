//Copyright (c) Matthew Whitaker 2017
function getResults(searchQuery) {
  var resultDiv = document.getElementById("inner_results");
  switch(searchQuery.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"").toLowerCase()) {
      //SHOW ME THE SUN-------------------------------------------------------------------------------------------------
    case "show me the sun":
      resultDiv.innerHTML = getImageResultString("Here is an image of the sun right now, constructed by compiling the two STEREO spacecraft's images of the sun with the image of the sun from the Earth. <br />The animation starts at 0&deg; (What we can see from Earth right now), and rotates to show the sun from different angles.", "https://stereo.gsfc.nasa.gov/beacon/euvi_195_rotated.gif");
      if(compareTwoImages("https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/ahead_euvi_304_latest.jpg","https://endlessspace.github.io/data/nodatastereo.jpg")) {
      resultDiv.innerHTML += getImageResultString("Here is a visible light image of the sun as seen from the STEREO Ahead satellite. <br />It was last updated at the date and time noted on the bottom of the image.<br />This spacecraft has not recently sent data, so the image says 'No Data'", "https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/ahead_euvi_304_latest.jpg");
      } else {
        resultDiv.innerHTML += getImageResultString("Here is a visible light image of the sun as seen from the STEREO Ahead satellite. <br />It was last updated at the date and time noted on the bottom of the image.", "https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/ahead_euvi_304_latest.jpg");
      }
      if(compareTwoImages("https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/behind_euvi_304_latest.jpg","https://endlessspace.github.io/data/nodatastereo.jpg")) {
      resultDiv.innerHTML += getImageResultString("Here is a visible light image of the sun as seen from the STEREO Behind satellite. <br />It was last updated at the date and time noted on the bottom of the image.<br />This spacecraft has not recently sent data, so the image says 'No Data' <a href='https://endlessspace.github.io/stereo/#loss' target='_blank'>Why does STEREO Behind never show data?</a>", "https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/behind_euvi_304_latest.jpg");
      } else {
        resultDiv.innerHTML += getImageResultString("Here is a visible light image of the sun as seen from the STEREO Behind satellite. <br />It was last updated at the date and time noted on the bottom of the image.", "https://stereo-ssc.nascom.nasa.gov/beacon/latest_256/behind_euvi_304_latest.jpg");
      }
      break;
      //STEREO-------------------------------------------------------------------------------------------------
    case "stereo":
      resultDiv.innerHTML = getFullSizeImageResultString("Here are the current positions of the STEREO Ahead and Behind spacecraft<br />Note that the position is relative to Mercury, Venus, and the Earth", "https://stereo-ssc.nascom.nasa.gov/where/where_is_stereo.gif");
      break;
      //HELP-------------------------------------------------------------------------------------------------
    case "help":
      resultDiv.innerHTML = getTextBoldResultString("There are several options for finding data on this site. You can either search for a satellite or other data (ex. Search 'STEREO'). Or try searching for images of a certain planet or object. (ex. Search 'Show me the sun').", "Help");
      break;
    default:
      var o = $Spelling.AjaxSpellCheck(searchQuery);
      o.onSpellCheck = function(result,suggestions){
        alert("SpellChecking Result: "result)
      }
      resultDiv.innerHTML = getTextResultString('No live data found on this site for "'+searchQuery+'"');
      break;
                    }
}

function getImageResultString(resultText, resultImageURL) {
  return '<div class="result"><img class="result-image imgview" src="'+resultImageURL+'" alt="Image Loading..."/><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
function getTextResultString(resultText) {
  return '<div class="result"><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
function getTextBoldResultString(resultText, boldText) {
  return '<div class="result"><span class="result-header">'+boldText+'</span><br /><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
}
function getFullSizeImageResultString(resultText, resultImageURL) {
  return '<div class="result"><img class="result-image-full-size imgview" src="'+resultImageURL+'" alt="Image Loading..."/><span class="result-text">'+resultText+'</span><div style="clear:both;"></div></div>';
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
function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
  try {
    var dataURL = canvas.toDataURL("image/png");
  } catch(exception) {
    console.log("Image compare exception: "+exception);
    return exception;
  }

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
