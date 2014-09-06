<!--  Activate Cloaking Device
//***************************************************************************
//
//                              Radio Button LeapTo I
//
//                 by Tim Wallace   (timothy@essex1.com)
//
//           Uses radio buttons in place of a drop-down menu.
//
//***************************************************************************
// Called by an onClick in each radio button.
function leapTo (link)
   {
   var new_url=link;
   if (  (new_url != "")  &&  (new_url != null)  )
      window.location=new_url;
   else
      alert("You must make a selection.");
   }
// Called by View Source button - displays source of file.
function viewSource()
   {
   var current_url="";
   current_url=document.location;
   window.location="view-source:"+current_url;
   }
// Called by Full Window button - loads file to full window for easy saving.
function WinOpen() 
   {
   alert('\nPage will load to full screen.\n\nUse View/Document Source from menu bar to view source.\n\nUse File/Save As from menu bar to save.\n\nClose new window to return to this page. ');
   window.open("radioleap1.html","DisplayWindow","menubar=yes,scrollbars=yes");
   window.open("radioleap1.html","DisplayWindow","menubar=yes,scrollbars=yes");   // double for Macs
   }
// Deactivate Cloaking -->