function flashScreen(){

    document.body.style.background = "red";

    setTimeout(() => {

        document.body.style.background =
        "linear-gradient(135deg,#0f0f0f,#1a1a1a)";

    }, 300);

}

function speakMessage(message){

    document.getElementById("alertBox").innerText = message;

    const speech = new SpeechSynthesisUtterance();

    speech.text = message;

    speech.volume = 1;

    speech.rate = 1;

    speech.pitch = 1;

    speech.lang = "en-US";

    flashScreen();

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

}

function shareLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(function(position){

            const locationMessage =
            "Latitude: " +
            position.coords.latitude +
            " , Longitude: " +
            position.coords.longitude;

            document.getElementById("alertBox").innerText =
            locationMessage;

            const speech =
            new SpeechSynthesisUtterance();

            speech.text =
            "Location shared successfully";

            window.speechSynthesis.speak(speech);

        });

    } else {

        alert("Location not supported");

    }

}