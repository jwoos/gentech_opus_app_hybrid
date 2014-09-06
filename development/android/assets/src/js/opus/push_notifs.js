//Monday push notifs
function mondaySubscribe() 
	{
    forge.parse.push.subscribe("monday",
	function () {
		alert("Subscribed to push notifications!");
	},
	function (err) {
		alert("Error subscribing to notifications: "+ JSON.stringify(err));
	});
	}

function mondayStop() 
	{	
	forge.parse.push.unsubscribe("monday",
	function () {
		alert("Unsubscribed!");
	},
	function (err) {
		alert("Couldn't unsubscribe from notifications: "+ JSON.stringify(err));
	});
	}
	
//Tuesday push notifs
function tuesdaySubscribe() 
	{
    forge.parse.push.subscribe("tuesday",
	function () {
		alert("Subscribed to push notifications!");
	},
	function (err) {
		alert("Error subscribing to notifications: "+ JSON.stringify(err));
	});
	}

function tuesdayStop() 
	{	
	forge.parse.push.unsubscribe("tuesday",
	function () {
		alert("Unsubscribed!");
	},
	function (err) {
		alert("Couldn't unsubscribe from notifications: "+ JSON.stringify(err));
	});
	}
	
//wednesday push notifs
function wednesdaySubscribe() 
	{
    forge.parse.push.subscribe("wednesday",
	function () {
		alert("Subscribed to push notifications!");
	},
	function (err) {
		alert("Error subscribing to notifications: "+ JSON.stringify(err));
	});
	}

function wednesdayStop() 
	{	
	forge.parse.push.unsubscribe("wednesday",
	function () {
	alert("Unsubscribed!");
	},
	function (err) {
	alert("Couldn't unsubscribe from notifications: "+ JSON.stringify(err));
	});
	}
	
//thursday push notifs
function thursdaySubscribe() 
	{
    forge.parse.push.subscribe("thursday",
	function () {
		alert("Subscribed to push notifications!");
	},
	function (err) {
		alert("Error subscribing to notifications: "+ JSON.stringify(err));
	});
	}

function thursdayStop() 
	{	
	forge.parse.push.unsubscribe("thursday",
	function () {
	alert("Unsubscribed!");
	},
	function (err) {
	alert("couldn't unsubscribe from notifications: "+ JSON.stringify(err));
	});
	}

//friday push notifs
function fridaySubscribe() 
	{
    forge.parse.push.subscribe("friday",
	function () {
		alert("Subscribed to push notifications!");
	},
	function (err) {
		alert("error subscribing to notifications: "+ JSON.stringify(err));
	});
	}

function fridayStop() 
	{	
	forge.parse.push.unsubscribe("friday",
	function () {
	alert("Unsubscribed!");
	},
	function (err) {
	alert("couldn't unsubscribe from notifications: "+ JSON.stringify(err));
	});
	}

//saturday push notifs
function saturdaySubscribe() 
	{
    forge.parse.push.subscribe("saturday",
	function () {
		alert("Subscribed to push notifications!");
	},
	function (err) {
		alert("error subscribing to notifications: "+ JSON.stringify(err));
	});
	}

function saturdayStop() 
	{	
	forge.parse.push.unsubscribe("saturday",
	function () {
	alert("Unsubscribed!");
	},
	function (err) {
	alert("couldn't unsubscribe from notifications: "+ JSON.stringify(err));
	});
	}

//sunday push notifs
function sundaySubscribe() 
	{
    forge.parse.push.subscribe("sunday",
	function () {
		alert("Subscribed to push notifications!");
	},
	function (err) {
		alert("error subscribing to notifications: "+ JSON.stringify(err));
	});
	}

function sundayStop() 
	{	
	forge.parse.push.unsubscribe("sunday",
	function () {
	alert("Unsubscribed!");
	},
	function (err) {
	alert("couldn't unsubscribe from notifications: "+ JSON.stringify(err));
	});
	}
	
function subscribed() 
{
forge.parse.push.subscribedChannels(
function (channels) {
  document.getElementById('subscribed').innerHTML = channels;
},
function (err) {
  forge.logging.error("couldn't retrieve subscribed channels: "+
    JSON.stringify(err));
});
}

subscribed();

//job description subscription
function subscribe() 
	{
	var subscribeInfo = document.getElementById('subscribeto').value;
    forge.parse.push.subscribe(subscribeInfo,
	function () {
		alert("Subscribed to push notifications!");
	},
	function (err) {
		alert("Error subscribing to notifications: "+ JSON.stringify(err));
	});
	}

function unsubscribe() 
	{	
	var subscribeInfo = document.getElementById('subscribeto').value;
	forge.parse.push.unsubscribe(subscribeInfo,
	function () {
		alert("Unsubscribed!");
	},
	function (err) {
		alert("Couldn't unsubscribe from notifications: "+ JSON.stringify(err));
	});
	}