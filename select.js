var div = document.getElementById('div');
var x1 = 0, y1 = 0, x2 = 0, y2 = 0,x3 =  0,x4 = 0,y3 = 0,y4 = 0;
results = {'x1' : '', 'y1' : '', 'x2' : '', 'y2': ''}
function makeRectangle(createXML){

function reCalc() {
    x3 = Math.min(x1,x2);
    x4 = Math.max(x1,x2);
    y3 = Math.min(y1,y2);
    y4 = Math.max(y1,y2);
    div.style.left = x3 + 'px';
    div.style.top = y3 + 'px';
    div.style.width = x4 - x3 + 'px';
    div.style.height = y4 - y3 + 'px';
}
function reCalc2() {
     x3 = Math.min(x1,x2);
     x4 = Math.max(x1,x2);
     y3 = Math.min(y1,y2);
     y4 = Math.max(y1,y2);
    // alert(x3+" "+y4+" "+" "+x4+" "+y3)
    results = {'x1' : x3, 'y1' : y4, 'x2' : x4, 'y2': y3}

    // console.log(results) // Coordinates in xml are as follows, (bottom-left) and (top-right)
    createXML();
}
onmousedown = function(e) {
    div.hidden = 0;
    x1 = e.clientX;
    y1 = e.clientY;
    reCalc();

};
onmousemove = function(e) {
    x2 = e.clientX;
    y2 = e.clientY;
    reCalc();

};
onmouseup = function(e) {
    div.hidden = 1;
    x2 = e.clientX;
    y2 = e.clientY;
    reCalc2();
};
return results
}