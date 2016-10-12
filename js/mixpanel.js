$(document).ready(function() {
	$("#btn-notify").on('click', function() {
		var mail = $("#email-input").val();

		mixpanel.people.set({
            "$email": mail
        });
	})
});