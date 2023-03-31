document.querySelector("#viewcv").addEventListener("click", () => {
  console.log("View Cv");
  document.querySelector(
    "#viewrender"
  ).innerHTML = `   <iframe class="card w-100 vh-100" src="https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/app%2Foci%2FCV_Tran_Van_Thinh_Web_Developer.pdf?alt=media&token=9fe359ee-01f2-45c6-bff3-5f075da45081" />`;
});
document.querySelector("#viewinfo").addEventListener("click", () => {
  document.querySelector("#viewrender").innerHTML = `
  <div class="card">
  <div class="card-body">
	  <div class="row mb-3">
		  <div class="col-sm-3">
			  <h6 class="mb-0">Full Name</h6>
		  </div>
		  <div class="col-sm-9 text-secondary">
			  <input type="text" class="form-control"  readonly value="Van Thinh Tran">
		  </div>
	  </div>
	  <div class="row mb-3">
		  <div class="col-sm-3">
			  <h6 class="mb-0">Email</h6>
		  </div>
		  <div class="col-sm-9 text-secondary">
			  <input type="text" class="form-control" readonly value="tvthinh.154@gmail.com">
		  </div>
	  </div>
	  <div class="row mb-3">
		  <div class="col-sm-3">
			  <h6 class="mb-0">Phone</h6>
		  </div>
		  <div class="col-sm-9 text-secondary">
			  <input type="text" class="form-control" readonly value="0967527325">
		  </div>
	  </div>
	  <!-- <div class="row mb-3">
		  <div class="col-sm-3">
			  <h6 class="mb-0">Mobile</h6>
		  </div>
		  <div class="col-sm-9 text-secondary">
			  <input type="text" class="form-control" value="(320) 380-4539">
		  </div>
	  </div> -->
	  <div class="row mb-3">
		  <div class="col-sm-3">
			  <h6 class="mb-0">Address</h6>
		  </div>
		  <div class="col-sm-9 text-secondary">
			  <input type="text" class="form-control" readonly value="Ninh Kiều, Cần Thơ">
		  </div>
	  </div>
	  <!-- <div class="row">
		  <div class="col-sm-3"></div>
		  <div class="col-sm-9 text-secondary">
			  <input type="button" class="btn btn-primary px-4" value="Save Changes">
		  </div>
	  </div> -->
  </div>
</div>
<div class="row">
  <div class="col-sm-12">
	  <div class="card">
		  <div class="card-body">
			  <h5 class="d-flex align-items-center mb-3">Project Status</h5>
			  <p class="d-flex align-items-center mb-3">HTML</p>
			  <div class="progress mb-3" style="height: 5px">
				  <div class="progress-bar bg-primary" role="progressbar" style="width: 60%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
			  </div>
			  <p class="d-flex align-items-center mb-3">CSS</p>
			  <div class="progress mb-3" style="height: 5px">
				  <div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
			  </div>
			  <p class="d-flex align-items-center mb-3">JS</p>
			  <div class="progress mb-3" style="height: 5px">
				  <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
			  </div>
			  <p class="d-flex align-items-center mb-3">React JS</p>
			  <div class="progress mb-3" style="height: 5px">
				  <div class="progress-bar bg-warning" role="progressbar" style="width: 69%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
			  </div>
			  <p class="d-flex align-items-center mb-3">Taiwind Css</p>
			  <div class="progress mb-3" style="height: 5px">
				  <div class="progress-bar bg-info" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
			  </div>
			  <p class="d-flex align-items-center mb-3">Node Js</p>
			  <div class="progress mb-3" style="height: 5px">
				  <div class="progress-bar bg-secondary" role="progressbar" style="width: 40%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
			  </div>
		  </div>
	  </div>
  </div>
</div>
  `;
});

document.querySelector("#viewbangdiem").addEventListener("click", () => {
  ViewBangDem();
});
function ViewBangDem() {
  let text;
  let pass = prompt("Nhập pass để tiếp tục:", "");
  if (pass == null || pass == "" || pass != "1234") {
    text = "User cancelled the prompt.";
  } else {
    // window.location.href = "/src/html/bangdiem.html";
    document.querySelector(
      "#viewrender"
    ).innerHTML = `   <iframe class="card w-100 vh-100" src="https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/app%2Foci%2Fbangdem.pdf?alt=media&token=53149ec6-c64a-4f1e-9a5d-a700834d2c6d" />`;
  }
  console.log(text);
}


// function slideShow(){
// 	// console.log("Hi")
// 	const min = 1;
// const max = 10;
// const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// 	if(randomNumber/2 ==0)
// 	document.querySelector("#slideShow").innerHTML=`<img class="" src="https://avatars.githubusercontent.com/u/74719505?s=400&u=3e97f6cf178069c603f6a89ec9cbff32c13b2126&v=4" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">`
// 	else 
// 	document.querySelector("#slideShow").innerHTML=`<img class="" src="https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2FKYUG8FM8G93XAQE?alt=media&token=571064d0-4fbf-4ee0-98ef-4799c691afe0" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">`

// }
// setInterval(function(){
// 	slideShow();
//   }, 3000);
//    Sau 3 giây sẽ log ra 'Hello World!'