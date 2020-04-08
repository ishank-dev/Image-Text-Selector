document.addEventListener('DOMContentLoaded', ()=>{
    //fetch the data as soon as the page has loaded
    createXML()
    makeRectangle(createXML);
    function createXML(){
        let url = "test.xml";
        fetch(url)
        .then(response=>response.text())
        .then(data=>{
            //console.log(data);  //string
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            
            document.getElementById('output').textContent = data;
            let words = xml.getElementsByTagName('WORD');
            
            for(let i=0; i<words.length; i++){
                let li = document.getElementById('results');
                let wordName = words[i].firstChild.nodeValue;
                let Coordinates = words[i].getAttribute('coords').split(',').map(function(item) {
                    return parseInt(item, 10)
            });
            
            if(Coordinates[0]>results['x1'] && Coordinates[1]< results['y1'] && Coordinates[2]<results['x2'] && Coordinates[3] > results['y2']){
                console.log(wordName)
                li.textContent += `${wordName}` + " ";
            }
            
            }
        });
    }
});
