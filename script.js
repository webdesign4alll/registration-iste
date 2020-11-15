       function validation() {

            var x = document.getElementById('email').value;
            // var y = document.getElementById('smail');
            var pattern = '@gmail.com';
            var pattern2 = '@tkmce.ac.in';
            if ((x.match(pattern)) || (x.match(pattern2))) {
                //    y.innerHTML = "";
                //    y.style.color = 'green';
                document.getElementById('alerting').style.display = "none";

            }
            else {
                // y.innerHTML = "please enter a valid mail id";
                // y.style.color = 'red';
                // y.style.display = "block";
                document.getElementById('alerting').style.display = "block";
                document.getElementById('alerting').style.color = "red";

            }
        }


        function validationPhone() {

            var y = document.getElementById('phone').value;
            console.log(y);
            if (y.length != 10) {
                document.getElementById('alertingp').style.display = "block";
                document.getElementById('alertingp').style.color = "red";

            }
            else {
                document.getElementById('alertingp').style.display = "none";
            }
        }
        function printe(){
            window.print();
        }

function checkboxlimit(checkgroup, limit){
	var checkgroup=checkgroup
	var limit=limit
	for (var i=0; i<checkgroup.length; i++){
		checkgroup[i].onclick=function(){
		var checkedcount=0
		for (var i=0; i<checkgroup.length; i++)
			checkedcount+=(checkgroup[i].checked)? 1 : 0
		if (checkedcount>limit){
			alert("You can only select a maximum of "+limit+" items from this section")
			this.checked=false
			}
		}
	}
}
