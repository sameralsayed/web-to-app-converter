$(document).ready(function() {
    $('#converterForm').submit(function(e) {
        e.preventDefault();
        const url = $('#websiteUrl').val();
        
        // Simple validation
        if (!url) {
            alert('Please enter a valid URL.');
            return;
        }
        
        // Update iframe
        $('#appPreview').attr('src', url);
        $('#result').removeClass('d-none');
        $('#downloadApp').removeClass('d-none');
    });
});