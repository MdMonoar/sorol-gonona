$(document).ready(function() {
    let n = 0;

    $('#add').on('click', function() {
        const $form = $('form');
        const $div = $('<div>');
        $div.html('<input class="form-control" type="text">');
        $form.append($div);
        n++;

        if (n === 1) {
            createDeleteButton();
        }
    });

    function createDeleteButton() {
        const $controller = $('#subcon');
        const $div = $('<div>');
        $div.html('<button class="btn btn-sm btn-danger" id="del2">-</button>');
        $controller.append($div);

        $('#del2').on('click', function() {
            if (n > 0) {
                removeLastInput();
                n--;
            }
            if (n === 0) {
                removeDeleteButton();
            }
        });
    }

    function removeDeleteButton() {
        $('#del2').parent().remove();
    }

    function removeLastInput() {
        const $form = $('form');
        $form.children().last().remove();
    }
});
