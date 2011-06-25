$(document).ready(function() {

    $("#quicksearch").searchField();

    $('.resource :input', document.myForm).bind("change", function() { setConfirmUnload(true); });

    $("a.fancybox").fancybox({
        'titlePosition': 'over',
        'type': 'image',
        'centerOnScroll': true,
        'scrolling': false,
    });

    $(".iframe").fancybox({
        'width': 720,
        'height': '90%',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'centerOnScroll': true,
        'scrolling': false,
    });

    // This method is used by Typus::Controller::Bulk
    $(".action-toggle").click(function() {
        var status = this.checked;
        $('input.action-select').each(function() { this.checked = status; });
        $('.action-toggle').each(function() { this.checked = status; });
    });

    // This method is used by `text_with_ckeditor` template.
    if ($('textarea.ckeditor').length > 0) {
        var data = $('textarea');
        $.each(data, function(i) { CKEDITOR.replace(data[i].id); });
    }

});

function setConfirmUnload(on) {
    window.onbeforeunload = (on) ? unloadMessage : null;
}

function unloadMessage() {
    return "You have entered new data on this page. If you navigate away from this page without first saving your data, the changes will be lost.";
}