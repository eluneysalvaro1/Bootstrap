$('#bu').on('click', function() {
    if ($('#modal').hasClass('show')) {
        $('#modal').modal('hide')
    } else {
        $('#modal').modal('show')
    }
})

$('#but').on('click', function() {
    $('#modal').modal('hide')
})