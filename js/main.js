(() => {



    // make an AJAX request using the Fetch API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {
        console.log(data);
        // here's where you would call the function that puts the pieces on the page
        handleData(data);
        })
        .catch ((err) => {
            // Error Message
            alert("Oops! Do you smell something?");
            console.log(err);
         }) 

    function handleData(data) {
        console.log("Hello! Just Testing!"); 
        let infoBox = document.querySelector(".profPanel"),
            infoText = infoBox.querySelector(".profPanelText").children,
            infoTime = infoBox.querySelector("ul").children;
     
            

            infoText[0].innerHTML = data.coursename + " " + "-" + " " + data.coursecode;
            infoText[1].innerHTML = ("Professor") +" "+ data.profname;
            
            infoTime[1].innerHTML = data.classtime[0];
            infoTime[3].innerHTML = data.classtime[1];       
            
    }
})();