//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//The page functions script                                  ||
//Created by Alex Milkis - 2019 Taboola                      ||
//The MIT License                                            ||
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

const ele = document.getElementsByClassName('form-control');

function runInt() {
    let ss = 0, howManyTimes = ele[2].value;

    function f() {
        runSync();
        ss++;
        if (ss < howManyTimes) {
            setTimeout(f, ele[3].value);
        }
    }

    f();
    return false;
}

function runSync() {
    let r = [10000, 20000];
    let m = Math.floor(Math.random() * (+r[1] - +r[0])) + +r[0];
    $.ajax({
        type: 'GET',
        crossOrigin: true,
        url: ele[1].value + m,
        processData: false,
        cache: true,
        success: function (xhr, exception) {
            $(".form-control")[0].append(ele[1].value+m+' - Finished Successful' + '\n');
        },
        error: function (xhr, exception) {
            $(".form-control")[0].append(ele[1].value+m+' - Finished but with CORS Errors - ' + xhr.status + '\n');
            if( xhr.status === 0)
                console.log('Error : ' + xhr.status + ' You are not connected.');
            else if( xhr.status == "201")
                console.log('Error : ' + xhr.status + '\nServer error.');
            else if( xhr.status == "404")
                console.log('Error : ' + xhr.status + '\nPage note found');
            else if( xhr.status == "500")
                console.log(' Internal Server Error [500].');
            else if (exception === 'parsererror')
                console.log('Error : ' + xhr.status + '\nImpossible to parse result.');
            else if (exception === 'timeout')
                console.log('Error : ' + xhr.status + '\nRequest timeout.');
            else
                console.log('Error .\n' + xhr.responseText);
        },
    });
    return false;
}
