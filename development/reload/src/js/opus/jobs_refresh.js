Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m");
var Jobs = Parse.Object.extend("jobs");
function getJobs()
{
//Query
var query = new Parse.Query(Jobs);
query.equalTo();
query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) { 
			var object = results[i];
			if (!document.getElementsByTagName) return;
			tabBody=document.getElementsByTagName("tbody").item(0);
			row=document.createElement("tr");

			cell1 = document.createElement("td");
			cell2 = document.createElement("td");
			cell3 = document.createElement("td");
			cell4 = document.createElement("td");
			cell5 = document.createElement("td");

			textnode1=document.createTextNode(object.get('type'));
			textnode2=document.createTextNode(object.get('company'));
			textnode3=document.createTextNode(object.get('date'));
			textnode4=document.createTextNode(object.get('pay'));
			
			var str = "Apply"
			var result = str.link(object.get('Apply'))
			
			var a = document.createElement('a');
			var linkText = document.createTextNode("Apply");
			a.appendChild(linkText);
			a.title = "Apply";
			a.href = object.get('Apply');
			//textnode5=document.createTextNode(a);
			
			cell1.appendChild(textnode1);
			cell2.appendChild(textnode2);
			cell3.appendChild(textnode3);
			cell4.appendChild(textnode4);
			cell5.appendChild(a);

			row.appendChild(cell1);
			row.appendChild(cell2);
			row.appendChild(cell3);
			row.appendChild(cell4);
			row.appendChild(cell5);

			tabBody.appendChild(row); 
		};
		var table2_Props = {
		col_0: "select",
		col_4: "none",
		display_all_text: "Show all",
		sort_select: true
	};
		var tf2 = setFilterGrid("table2", table2_Props);
	},
		error: function(error) {
		alert("Error: " + error.code + " " + error.message);
		}	
});
}

getJobs();


//a.onclick=function(){forge.topbar.removeButtons()};
//a.addEventListener("click", forge.topbar.removeButtons());