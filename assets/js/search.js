$(window).on("load", Init);

var tag = "";
var offset = 0;
var size = 10;
var aggregate = false;
function Init(){
  search();
  setupSearchField();
}
function setupSearchs(data){
  var str = "";
  for(var x = 0; x<data.size; x++){
    str += setupJob(data.results[x]);
  }
  $("#body-result").html(str);
  strResults(data);
}

function setupJob(job){
  var compensation = job.compensation;
  var str_compensation = buildCompensation(compensation);
  var locations = buildLocations(job.locations);
  var organization = buildOrganization(job.organizations);
  var picture = (organization.status != 200) ? "assets/img/theme/team-4.gif" : organization.picture;
  var business = (organization.status != 200) ? "Unknow" : organization.name;
  var skills = buildSkills(job.skills);
  return "<div class='box' onclick='showJobInfo(\""+job.id+"\");'>"+
      "<div class='row'>"+
          "<div class='col-lg-1'>"+
              "<center>"+
                "<img src='"+picture+"' class='icon-search'>"+
              "</center>"+
          "</div>"+
          "<div class='col-lg-11'>"+
              "<div class='box-content'>"+
                  "<h2>"+job.objective+"</h2>"+
                  "<span class='info'>"+firstLetterUpper(job.type)+"</span><br>"+
                  "<span class='info'>"+business+"</span> <br>"+
                  "<span class='info'><i aria-hidden='true' class='md-icon md-theme-dark material-icons'><!----> public</i> "+
                    locations+
                  "</span> <br>"+
                  "<span class='info-cash'>"+str_compensation+"</span> <br>"+
                  skills+
              "</div>"+
          "</div>"+
      "</div>"+
      "<div class='box-footer'>"+
          "<div class='row'>"+
              "<div class='col-lg-3'></div>"+
              "<div class='col-lg-9'>"+
                  "<a href='#' class='btn box-btn'>ASK A QUESTION</a>"+
                  "<a href='#' class='btn box-btn'>REFER SOMEONE</a>"+
                  "<a class='btn box-btn-view'>VIEW</a>"+
              "</div>"+
          "</div>"+
      "</div>"+
    "</div> <br>";
}
function buildSkills(skills){
  var str = "";
  for(var x = 0; x < skills.length; x++){
      if(x==3) break;
      var text = skills[x].experience.replace('-plus-', "+");
      str += "<label class='tag'>"+skills[x].name+" - <span class='skills-years'>"+text+" </span></label>";
  }
  return str;
}
function setupSearchField(){
  $("#search-field").keyup(function(event) { 
        if (event.keyCode === 13) { //enter key
          tag = $("#search-field").val();
          offset = 0;
          search();
          //search(userid);
        } 
    }); 
}
function buildOrganization(organizations){
  var data = {status:200};
  try{
    data.name = organizations[0].name;
    data.picture = organizations[0].picture;
  }catch(err){
    data.status = 404;
  }
  return data;
}
function showJobInfo(jobid){
  $('#myModal').modal('toggle');
  $.ajax({
      url: 'https://torre.co/api/opportunities/'+jobid,
      type: 'GET',
      dataType: "json",
    success: function( response ) {
      setupModal(response);
    },
    error: function(response){
      $('#myModal').modal('toggle');
    }
  });
}
function setupModal(data){
  $('#modal-name').html(data.objective);
  var str = setupStrengths(data.strengths);
  $('#modal-skills').html(str);
  var organization = buildOrganization(data.organizations);
  var picture = data.attachments[0].address;
  var business = (organization.status != 200) ? "Unknow" : organization.name;
  $("#modal-picture").attr("src",picture);
  $("#modal-organization-name").html(business);
  var compensation = data.compensation;
  var ob = {data:compensation,visible:compensation.visible};
  var str_compensation = buildCompensation(ob);
  $("#modal-compensation").html(str_compensation);

  var details = data.details;
  for(var x = 0; x<details.length; x++){
     var item = details[x];
     switch(item.code){
        case 'reason':
        $("#modal-reason").html(item.content);
        break;
        case 'responsibilities':
        $("#modal-responsibilities").html(item.content);
        break;
        case 'organizations':
        $("#modal-organizations").html(item.content);
        break;
     }
  }
}
function setupStrengths(data){
  var str = "";
  var l = data.length;
  for(var x = 0; x<l; x++){
      var text = data[x].experience.replace('-plus-', "+");
      str += "<label class='tag2'>"+data[x].name+" - <span class='skills-years'>"+text+" </span></label>";
  }
  return str;
}
function buildLocations(locations){

  var l = locations.length;
  var str = (l == 0) ? "Unknow" : "";
  var cant = 0;
  for (var i = 0; i < l; i++) {
    str += (cant<=0) ? locations[i] : " - "+locations[i];
    cant++;
  }
  return str;
}
function buildCompensation(compensation){
  var str = "Compensation: hidden";
  if(!compensation) return str;
  if(!compensation.visible) return str;

  var currency = getCurrency(compensation.data.currency);
  var periodicity = compensation.data.periodicity;
  var range = getRange(compensation.data);
  str = currency+" $"+range+"/"+periodicity;
  return str;
}
function getRange(data){
  return KMFormatter(data.minAmount)+" - "+KMFormatter(data.maxAmount);
}
function KMFormatter(num) {
    if(Math.abs(num) > 999999){
        return Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M';
    }
    if(Math.abs(num) > 999){
        return Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K';
    }
    return Math.sign(num)*Math.abs(num);
}
function getCurrency(currency){
  return currency.replace('$', "");
}
function firstLetterUpper(str){
  const text = str.charAt(0).toUpperCase() + str.slice(1)
  return text;
}
function strResults(data){
  var start = offset+1;
  var end = (offset + size);
  var str = "Showing results "+start+" - "+end+" of around "+data.total;
  var str2 = start+" - "+end+" of around "+data.total;
  $("#title-result1").html(str);
  $("#title-result2").html(str2);
}
function getJsonLength(data){
	 return Object.keys(data).length;
}

function clean(){
  
  var str = "<div class='box'>"+
              "<h2 class='text-center text-white'>Loading Jobs..</h2>"+
            "</div>";
  $("#body-result").html(str);
  $("#arrows").hide();
  
}
function search(){
  clean();
  var ob = (tag === "") ? {} : {"skill/role":{"text":tag,"experience":"potential-to-develop"}};
  $.ajax({
      url: 'https://search.torre.co/opportunities/_search/?&size='+size+'&aggregate='+aggregate+'&offset='+offset,
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: "json",
      data: JSON.stringify(ob),
      success: function( response ) {
          $("#arrows").show();
          setupSearchs(response);
        }
  });
}
function next(){
  offset+=size;
  search();
}

function previous(){
  if((offset-size)<0) return;
  offset-=size;
  search();
}
