/**
 * Created by jcx on 16/6/10.
 */

var path=require('path');

$(function() {
    $('#searchinput').on('keypress', function(e) {
        13 == e.keyCode && searchHand(e.target.value);
    });
});


function searchHand(str) {
    handManager.search(str);
}

/**
 *
 * @param filename
 * @param handlist    list of hand's id
 */
function addHandlist(filename, handlist) {
    var $list = $("#pokertemplate [poker-template='siderbar']").clone(true);
    $list.removeClass("hide").removeAttr('id');
    filename = path.basename(filename);
    $list.find('[poker-filename]').text(filename.substr(0,5));
    for (var index in handlist) {
        var $item = $("#pokertemplate [poker-template='handitem']").clone(true);
        $list.find('> ul').append($item);
        $item.attr("handid", handlist[index]);
        $item.find("> a").text(handlist[index]);
        $item.on('click', function(e) {
            console.log($(this).attr('handid'));
            handManager.openHand($(this).attr('handid'));
        });
    }
    $("#blankItem").before($list);
    $('#side-menu').metisMenu();
}

