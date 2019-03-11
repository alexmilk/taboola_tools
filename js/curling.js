//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//The page functions script                                  ||
//Created by Alex Milkis - 2019 Taboola                      ||
//The MIT License                                            ||
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

const ele = document.getElementsByClassName('form-control');function runInt() {
    let ss = 0, howManyTimes = ele[2].value;
    function f() {
        runSync();
        ss++;
        if (ss < howManyTimes) {
            setTimeout(f, ele[3].value);
        }
    }

    f();return false;
}
function runSync ()  {
    let r = [10000, 20000];
    let m = Math.floor(Math.random() * (+r[1] - +r[0])) + +r[0];
    $.ajax({
        type: 'GET',
        url: ele[1].value + m,
        processData: false,
        cache: true,
        jsonp: false,
        dataType: 'text', // data type expected from server
        success: function (XMLHttpRequest, textStatus) {
            $(".form-control")[0].append(textStatus+'\n');
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(".form-control")[0].append($.timeStamp+'\n');
        },
    });
    return false;
}
