var div = document.getElementById('div');
var x1 = 0, y1 = 0, x2 = 0, y2 = 0,l =  0,r = 0,b = 0,t = 0;
results = {'l' : '', 'b' : '', 'r' : '', 't': ''}
function makeRectangle(createXML){

// function to make the selected box visible by styling it.
function reCalc() {
    l = Math.min(x1,x2);
    r = Math.max(x1,x2);
    b = Math.min(y1,y2);
    t = Math.max(y1,y2);
    div.style.left = l + 'px';
    div.style.top = b + 'px';
    div.style.width = r - l + 'px';
    div.style.height = t - b + 'px';
}
// function to calculate final coordinates, this function is called after the mouseup event
function reCalc2() {
     l = Math.min(x1,x2);
     r = Math.max(x1,x2);
     b = Math.max(y1,y2);
     t = Math.min(y1,y2);
    results = {'x1' : l, 'y1' : b, 'x2' : r, 'y2': t} 
    // call the xml function as soon as mouseup event occurs
    createXML();
}
// function for taking initial coordinates.
onmousedown = function(e) {
    div.hidden = 0;
    x1 = e.clientX;
    y1 = e.clientY;
    reCalc();

};
// mouse move event
onmousemove = function(e) {
    x2 = e.clientX;
    y2 = e.clientY;
    reCalc();

};
// mouse up event
onmouseup = function(e) {
    div.hidden = 1;
    x2 = e.clientX;
    y2 = e.clientY;
    reCalc2();
};
return results
}
