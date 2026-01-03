function getFormvalue() {
    //Write your code here
	const firstname = document.forms["form1"]["fname"].value.trim();
	const lastname = document.forms["form1"]["lname"].value.trim();

	const fullname = `${firstname} ${lastname}`.trim();

	alert(fullname);

	return false;

}
