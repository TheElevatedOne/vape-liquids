function blank() {
    var a = document.getElementsByTagName('a');
    for (var i=0; i<a.length; i++){
        a[i].setAttribute('target', '_blank');
    }
}
