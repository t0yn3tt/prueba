<!DOCTYPE html>
<html>

<head>
  <?php include 'templates/head.php';?>
  <link rel="stylesheet" type="text/css" href="assets/css/search.css">
</head>

<body>
  <!-- Sidenav -->
  <?php include 'templates/side-nav.php';?>
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <?php include 'templates/top-nav.php';?>
    <!-- Header -->
    <!-- Header -->
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Jobs</h6> <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a href="#">Jobs</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Result</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row mt--5">
        <div class="col-md-10 ml-auto mr-auto">
          <div class="card card-upgrade">
            <div class="card-body">
              <br>
              <h3 id="title-result1">Showing results 0 - 0 of around 0</h3>
              <div id="body-result">
                            
              </div>
              <div class="container" id="arrows" style="display: none;">
                  <br>
                  <center>
                    <a class="btn btn-arrow" onclick="previous();">
                      <i class="arrow left"></i>
                    </a>
                    <span id="title-result2">0 - 0 of around 0 </span>
                    <a class="btn btn-arrow" onclick="next();">
                      <i class="arrow right"></i>
                    </a>
                  </center>
                  
                </div> 

                <div class="modal" id="myModal" tabindex="-1" role="dialog">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title color">Job Info</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body" id="bodyModal">
                        <div class="row">
                          <div class="container">
                            <img class="banner" id="modal-picture" src="assets/img/theme/profile-cover.jpg">
                            <h2 class="text-center" id="modal-name">loading</h2>
                            <p class="color">Skills and experience needed</p>
                            <div id="modal-skills"></div>
                            
                            <p class="color">Organization(s) name(s)</p>
                            <label id="modal-organization-name">loading</label>
                            <div class="box2">
                              <h3 class="text-center text-white">Monetary compensation</h3>
                              <p class="text-center text-white" id="modal-compensation"></p>
                            </div>
                            <p class="color">Why this opportunity exists</p>
                            <label id="modal-reason">loading</label>
                            <p class="color">Responsibilities</p>
                            <label id="modal-responsibilities">loading</label>
                            <p class="color">About the organization(s)</p>
                            <label id="modal-organizations">loading</label>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="cancelar">Accept</button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <?php include 'templates/footer.php';?>
    </div>
  </div>
  <!-- Argon Scripts -->
  <!-- Core -->
  <?php include 'templates/scripts.php';?>
  <script type="text/javascript" src="./assets/js/search.js"></script>
</body>

</html>