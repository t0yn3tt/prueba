<!DOCTYPE html>
<html>

<head>
  <?php include 'templates/head.php';?>
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
    <div class="header pb-5 d-flex align-items-center" style="min-height: 400px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12 col-md-10">
            <h3 class="display-2 text-white">Wellcome!</h3>
            <p class="text-white mt-0 mb-4">Torre is the new professional network for remote and flexible work.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4 order-xl-2">
          <div class="card card-profile">
            <img src="assets/img/theme/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="assets/img/theme/team-4.gif" id="profile-pic" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-sm btn-info  mr-4 ">Picture</a>
                <a href="#" class="btn btn-sm btn-success float-right">Active</a>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col">
                  <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span class="heading" id="idPublications">0</span>
                      <span class="description">Publications</span>
                    </div>
                    <div>
                      <span class="heading" id="idInterests">0</span>
                      <span class="description">Interests</span>
                    </div>
                    <div>
                      <span class="heading" id="idJobs">0</span>
                      <span class="description">Jobs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h5 class="h3" id="titulo">
                  Loading Name...<span class="font-weight-light"></span>
                </h5>
                <div class="h5 font-weight-300" id="lblDireccion">
                  <i class="ni location_pin mr-2"></i>loading...
                </div>
                <div class="h5 mt-4" id="lblProfetion">
                  <i class="ni business_briefcase-24 mr-2"></i>Profetion
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Torre.co Profile</h3>
                </div>
                
              </div>
            </div>
            <div class="card-body">
              <form>
                <h6 class="heading-small text-muted mb-4">User Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-username">Language</label>
                        <input type="text" id="input-language" class="form-control" placeholder="loading" value="">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">User</label>
                        <input type="text" id="input-User" class="form-control" placeholder="loading">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">Name</label>
                        <input type="text" id="input-name" class="form-control" placeholder="loading" value="">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-last-name">Profetion</label>
                        <input type="text" id="input-profetion" class="form-control" placeholder="loading" value="">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Contact Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Direction</label>
                        <input id="input-direccion" class="form-control" placeholder="Direction" value="" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-city">Theme</label>
                        <input type="text" id="input-theme" class="form-control" placeholder="Theme" value="">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">About User</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <label class="form-control-label">Summary</label>
                    <textarea rows="4" class="form-control" placeholder="Descripción" id="summary"></textarea>
                  </div>
                </div>
                
              </form>
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
  <script type="text/javascript" src="assets/js/profile.js"></script>
</body>

</html>