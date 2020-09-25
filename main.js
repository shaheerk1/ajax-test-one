function loadText() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://github.com/shahirk48/ajax-test-one/blob/master/sample.txt',true);
    
    xhr.onload = function() {
        if (this.status == 200){
            document.getElementById('derived').innerHTML=this.responseText;
        }
    }
    xhr.send();
}

loadText;
