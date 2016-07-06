function addContacts (){
    return {"Name" : X,
            "Location": Y,
            "Phone#" : Z
    }
    
    function searchContacts(contacts, query) {
    var results = {};
    for (var key in contacts) {
        results[key]=contacts[key]
    }
    return results;
}

var restaurants = {};

$(document).ready(function()
{
	contacts = addContacts();

	showContacts(contacts);
	$('#query').focus();

	function showContacts(contacts)
	{
		$("#results .contact-row").remove();
		$("#results").hide();

		for (key in contacts) 
		{
			// Create new contact-row
			if ($("#results .contact-row").length == 0 || $("#results .contact-row").last().children().length == 5)
			{
				$("#results").append($('templates .contact-row').clone());
			}
	
			// New column
			if ($("#results.contact-row").last().children().length < 5)
			{
				var contactElement = $('templates .contact').clone();
				contactElement.find('img').attr('src',contacts[key]["picture"]);
				contactElement.find('.Name').text(key);
				contactElement.find('.Location').text(contacts[key]["location"]);
				contactElement.find('.Phone#').text(contacts[key]["Phone#"]);

				$("#results .contact-row").last().append(contactElement);
			}
		}

		$("#results").fadeIn(500);
	}

	$('#search-btn').click(function()
	{
		if ($('#query').val().trim() == "")
			showContacts(contacts);

		else
		{
			var foundContacts = searchContacts(contacts, $('#query').val().trim());
			showContacts(foundContacts);
		}
	});
});