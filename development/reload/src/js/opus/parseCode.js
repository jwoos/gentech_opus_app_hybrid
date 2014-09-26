Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m");

//Parse Job Object
var Jobs = Parse.Object.extend("jobs");
var jobs = new Jobs();	

function jobFields() 
{
	//parse columns set to text input
    jobs.set("type", jobType);
    jobs.set("name", jobName);
    jobs.set("company", jobCompany);

    //Pushes to parse
    jobs.save(null, {
    	success: function(jobs) 
    	{
    		alert("New job saved sucessfully:" + "\n Job Type: " + jobType + " \n Name: " + jobName +" \n Company: " + jobCompany);
    	},
    	error: function(jobs, error) 
    	{
    		alert('Failed to save job ' + error.message);
    	}
    });

    this.jobQuery = function()
    {
    	var query = new Parse.Query(Jobs);
    	query.find({
    		success: function(results)
    		{
    			alert("Successfully retrieved " + results.length + " jobs.");
    			for (var i = 0; i < results.length; i++) 
    			{
    				var listJob = results[i];
    				alert(listJob.id + ' - ' + listJob.get('company'));
    			}	
    		},

    		error: function(error)
    		{
    			alert("Error: " + error.code + " " + error.message);
    		}
    	});

    	alert("CAN QUERY!!");
    }
    jobQuery();
}

//Parse user object
var user = new Parse.User();

function signUp()
{ 
    //HTML user account info input
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var birthMonth = document.getElementById('birthMonth').value - 1;
    var birthDay = document.getElementById('birthDay').value; 
    var birthYear = document.getElementById('birthYear').value;  
    var birth = new Date(birthYear, birthMonth, birthDay) 

    var school = document.getElementById('school').value;
	
    var phone = document.getElementById('phone').value;
        phone = parseInt(phone);

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var reEnter = document.getElementById('reEnter').value;

    user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("birth", birth);
    user.set("school", school);
    user.set("phone", phone);
    user.set("username", email);
    user.set("email", email);
    user.set("password", password);
	user.set("type", "student");

    // START Profile Picture upload
    var fileData = {base64: globalString};
    var parseFile = new Parse.File('photo.jpg', fileData, 'img/jpg');

    parseFile.save().then(function() {
        //alert('File saved to parseFile!'); 
    }, function(error) {
        alert('Could not save: ' + error);
    });

    user.set("profilePic", parseFile);
    // END Profile Picture upload

    if(password == reEnter)
    {
        user.signUp(null, {
          success: function(user) 
          {
            alert('Signup successful!');
			window.location.assign('aboutMe.html');
          },
          error: function(user, error) 
          {
            alert("Error: " + error.code + " " + error.message);
          } 
        });
    }
    else
    {
        alert('Passwords do not match. Please try again.');
    }
}

function submitAbout()
{
    var user = Parse.User.current();

    var about = document.getElementById('about').value;
    
    user.save(null, {
    success: function(user) {
        user.set("about", about);
        user.save();
        window.location.assign('jobExperience.html');
        }
    });

}

function submitEx()
{
    var user = Parse.User.current();

    var date = document.getElementById('jobDate').value;
    var name = document.getElementById('jobName').value;
    var descript = document.getElementById('jobDescript').value;

	if (jobDate.value, jobName.value, jobDescript.value != null) {
    user.save(null, {
    success: function(user) {
        user.set("jobDate", date);
        user.set("jobName", name);
        user.set("jobDescript", descript);
        user.save();

        window.location.assign('studentprofile.html');
		forge.tabbar.removeButtons();
        }
    });
	} else {
		alert("You must fill all all the fields before submitting!")
		};
}

function submitExMore()
{
    var user = Parse.User.current();

    var date = document.getElementById('jobDate').value;
    var name = document.getElementById('jobName').value;
    var descript = document.getElementById('jobDescript').value;

    user.set("jobDate", date);
    user.set("jobName", name);
    user.set("jobDescript", descript);

    window.location.assign('studentprofile.html');
    user.save(null, {
    success: function(user) {
        user.set("jobDate", date);
        user.set("jobName", name);
        user.set("jobDescript", descript);

        window.location.assign('jobAnother.html');
        }
    });
}

//For user to log in in index.html
function logIn()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    Parse.User.logIn(email, password, {
      success: function(user) {
        window.location.assign('map.html');
        gloEmail = 'Global Test';
         // Do stuff after successful login.
        },
      error: function(user, error) {
        alert("Login Failed \n Incorrect email or password");
        document.getElementById('login').href='#';
        // The login failed. Check error to see why.
        }
    });

    //Sets as current user
    var currentUser = Parse.User.current();
    if (currentUser) 
    {
    // do stuff with the user
    } 
    else 
    {
    // show the signup or login page
    }
}

//Loading information to studentprofile.html
function loadUser()
{
    var user = Parse.User.current();

    user.fetch().then(
        function(user)
        {
            var firstName = user.get('firstName');
            var space = ' ';
            var lastName = user.get('lastName');
            var fullName = firstName.concat(space, lastName);

            var email = user.getEmail()
            var phone = user.get('phone');;

            var imageFile = user.get('profilePic');
            var imageURL = imageFile.url();
			
			var aboutMe = user.get('about');

            var jobName = user.get('jobName');
            var jobDate = user.get('jobDate');
            var jobDescript = user.get('jobDescript');

            document.getElementById('name').innerHTML = fullName;
            document.getElementById('email').innerHTML = email;
            document.getElementById('phone').innerHTML = phone;
            document.getElementById('profilePhoto').src = imageURL;
			document.getElementById('about').innerHTML = aboutMe;

            document.getElementById('jobName').innerHTML = jobName;
            document.getElementById('jobDate').innerHTML = jobDate;
            document.getElementById('jobDescript').innerHTML = jobDescript;
        }, 
        function(error){
             //Handle the error
             console.log('Fetch Error: ' + error);
        });
}

function loadEdit()
{
    var user = Parse.User.current();

    user.fetch().then(
        function(user)
        {
            var firstName = user.get('firstName');
            var lastName = user.get('lastName');

            var email = user.getEmail()
            var phone = user.get('phone');;

            var imageFile = user.get('profilePic');
            var imageURL = imageFile.url();
            
            var aboutMe = user.get('about');

            document.getElementById('firstName').value = firstName;
            document.getElementById('lastName').value = lastName;
            document.getElementById('email').value = email;
            document.getElementById('phone').value = phone;
            document.getElementById('profilePhoto').src = imageURL;
            document.getElementById('about').innerHTML = aboutMe;
        }, 
        function(error){
             //Handle the error
             console.log('Fetch Error: ' + error);
        });
}


//For editing profile 
/* function update()
{
    //HTML user account info input
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
        phone = parseInt(phone);
		
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var reEnter = document.getElementById('reEnter').value;

    user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("birth", birth);
    user.set("school", school);
    user.set("phone", phone);
    user.set("username", email);
    user.set("email", email);
    user.set("password", password);
	
	
	var user = Parse.User.current();
    user.fetch().then(
        function(user)
        {
            var firstName = user.get('firstName');
            var space = ' ';
            var lastName = user.get('lastName');
            var fullName = firstName.concat(space, lastName);

            var email = user.getEmail()
            var phone = user.get('phone');;

            var imageFile = user.get('profilePic');
            var imageURL = imageFile.url();
			
			var aboutMe = user.get('about');

            document.getElementById('name').innerHTML = fullName;
            document.getElementById('email').innerHTML = email;
            document.getElementById('phone').innerHTML = phone;
            document.getElementById('profilePic').src = imageURL;
			document.getElementById('about').innerHTML = aboutMe;
        }, 
        function(error){
             //Handle the error
             console.log('Fetch Error: ' + error);
        });
} */

//Adding jobs to table
function addRow(content0,content1,content2)
{
	  if (!document.getElementsByTagName) return;
	  tabBody=document.getElementsByTagName("tbody").item(0);
	  row=document.createElement("tr");

	  cell1 = document.createElement("td");
	  cell2 = document.createElement("td");
	  cell3 = document.createElement("td");

	  textnode1=document.createTextNode(content0);
	  textnode2=document.createTextNode(content1);
	  textnode3=document.createTextNode(content2);

	  cell1.appendChild(textnode1);
	  cell2.appendChild(textnode2);
	  cell3.appendChild(textnode3);

	  row.appendChild(cell1);
	  row.appendChild(cell2);
	  row.appendChild(cell3);

	  tabBody.appendChild(row);
}

// http://stackoverflow.com/questions/6280495/populate-html-table-using-javascript 

        //RESERVED FOR BROWSER FUNCTIONALITY    
// function uploadPic()
// {
//     var user = new Parse.User();
//  //Uploading photo to parse
//     var fileUpload = $("#profilePhoto")[0];
//     if (fileUpload.files.length > 0) 
//     {
//       var file = fileUpload.files[0];
//       var name = "photo.jpg";
//       var parseFile = new Parse.File(name, file);
//     }

//     parseFile.save().then(function() {
//       //alert('File uploaded!'); 
//     }, function(error) {
//       alert('The file either could not be read, or could not be saved to Parse');
//     });
//     user.set("profilePic", parseFile);
//     //Pushes photo to parse
//     user.save(null, {
//         success: function(user) 
//         {
//             //alert("Photo saved!"); 
//         },
//         error: function(user, error) 
//         {
//             alert('Failed to save photo ' + error.message);
//         }
//     });
// }

//HTML job form text input

/* var jobType = document.getElementById('jobType').value;
var jobName = document.getElementById('jobName').value;
var jobCompany = document.getElementById('jobCompany').value; */


// Push notifications from parse
forge.event.messagePushed.addListener(function (msg) {
    alert(msg.alert);
});