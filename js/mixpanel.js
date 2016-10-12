$(document).ready(function() {
	$("#btn-notify").on('click', function() {
		console.log("click notify email");

		var mail = $("#email-input").val();
		mixpanel.identify();
		mixpanel.people.set({
            "$email": mail
        });
	})
});