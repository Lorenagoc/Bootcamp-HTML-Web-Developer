function PopupCenter(pageURL, title, w, h) { /*abre um popup do trailer*/
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=650px' + w + ', height=450px' + h + ', top=100%' + ', left=' + left);
}


function redirecionar(pageURL) {
    var targetWin = window.open(pageURL); //abre em outra aba o URL passado
}
