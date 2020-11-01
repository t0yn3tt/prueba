$(window).on("load", Init);
var defaultSearch = "edgardmartinez"; //csandoval
function Init(){
	search(defaultSearch);
	setupSearchField();
}
function search(userToSearch){
	clearForms();
	$.ajax({
      url: 'https://torre.bio/api/bios/'+userToSearch,
      type: 'GET',

      dataType: "json",
	  success: function( response ) {
	  		setupProfile(response);
	    },
	  error: function(response){
	  	Swal.fire('User not found in our database');
	  }
	});
}
function setupSearchField(){
	$("#search-field").keyup(function(event) { 
        if (event.keyCode === 13) { //enter key
        	var userid = $("#search-field").val();
        	search(userid);
        } 
    }); 
}
function clearForms(){
	cleanPicture();
	cleanStats();
	$( "#titulo" ).html("loading");
	$( "#lblDireccion" ).html("loading");
	$( "#input-direccion" ).val("");
	$("#lblProfetion").html("loading");
	$("#input-language").val("");
	$("#input-User").val("");
	$("#top-user").html("loading");
	$("#input-name").val("");
	$("#input-profetion").val("");
	$("#input-theme").val("");
	$("#summary").val("");
}
function showPicture(url,pictureThumbnail){
	$("#profile-pic").attr("src",url);
	$("#profile-pic1").attr("src",pictureThumbnail);
	$("#profile-pic2").attr("src",pictureThumbnail);
}
function cleanPicture(){
	$("#profile-pic").attr("src","assets/img/theme/team-4.gif");
	$("#profile-pic1").attr("src","assets/img/theme/team-4.gif");
	$("#profile-pic2").attr("src","assets/img/theme/team-4.gif");
}
function setupProfile(data){
	//console.log(data);
	//show user stats
	setupStats(data.stats);
	//show picture
	showPicture(data.person.picture,data.person.pictureThumbnail);
	//show user name
	$( "#titulo" ).html(data.person.name);
	//show direction
	var direction = data.person.location ? data.person.location.name : 'Hidden';
	$( "#lblDireccion" ).html(direction);
	$( "#input-direccion" ).val(direction);
	//show label rol
	$("#lblProfetion").html(data.person.professionalHeadline);
	//show language
	$("#input-language").val((data.person.locale === "en") ? "English" : "Español");
	//show userid
	$("#input-User").val(data.person.publicId);
	$("#top-user").html(data.person.publicId);
	//show name
	$("#input-name").val(data.person.name);
	//show profetion
	$("#input-profetion").val(data.person.professionalHeadline);
	//show theme info
	$("#input-theme").val(data.person.theme);
	//show summaryOfBio
	var summaryOfBio = data.person.summaryOfBio ? data.person.summaryOfBio : "Nothing to show";
	$("#summary").val(summaryOfBio);
	
}
function cleanStats(){
	//publications
	$("#idPublications").html(0);
	//interests
	$('#idInterests').html(0);
	//interests
	$('#idJobs').html(0);
}
function setupStats(stats){
	//publications
	$("#idPublications").html(stats.publications|0);
	//interests
	$('#idInterests').html(stats.interests|0);
	//interests
	$('#idJobs').html(stats.jobs|0);
}
function showError(){
	Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'No se ha encontrado el usuario',
		}).then(function (){
            window.location.href = "index";
          }, function (dismiss) {
        if (dismiss === 'overlay') {
            window.location.href = "index";
        }
    })
}
