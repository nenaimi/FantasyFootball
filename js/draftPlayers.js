
var teams={
    detroitLions:['Matt Stafford', 'Marvin Jones', 'Danny Amendola', 'Desmond Trufant'],
    arizonaCardinals:['Kyle Murray', 'DeAndre Hopkins', 'Larry Fitzgerald Jr.', 'Patrick Peterson'],
    dallasCowboys:['Dak Prescott', 'CeeDee Lamb', 'Exekiel Elliott','Aldon Smith']
}


$(document).ready(function () {
    $('#TeamNames').on('change', function() {
        $('#PlayerNames').html(
        teams[$(this).val()].reduce(function(p, c) {
            return p.concat('<option value="' + c + '">' + c + '</option>');
        }, '')
        );
    }).trigger('change');
});
