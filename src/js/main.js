var tabArray = document.querySelectorAll('.tab');
document.querySelectorAll(".tabContent")[0].style.display = 'block';
var primaryColor = 'rgb(138, 206, 218)';

for(var i=0; i<tabArray.length; i++){
  tabArray[i].addEventListener('click', openTab, false);
  tabArray[i].style.backgroundColor = primaryColor;
}
tabArray[0].style.backgroundColor = 'transparent';


function openTab(event) {
  var tabs = document.querySelectorAll(".tab");
  var tabContents = document.querySelectorAll(".tabContent")

  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
    tabContents[i].style.opacity = .1;
    tabs[i].style.backgroundColor = primaryColor;
    tabs[i].style.borderBottom = 'none';
  }

  var tabIndexToDisplay = getIndexInTabArr(tabs, event.target.id);
  document.getElementById(`tab${tabIndexToDisplay}Content`).style.display = 'block';
  document.getElementById(`tab${tabIndexToDisplay}Content`).style.opacity = 1;
  document.getElementById(event.target.id).style.backgroundColor = 'transparent';
}

function getIndexInTabArr(tabArr, in_id) {
  for (i = 0; i < tabArr.length; i++) {
    if (tabArr[i].id === in_id) {
      return i;
    }
  }
  return undefined;
}

//document.body.style.height = '1vh';
//document.body.style.maxHeight = '1vh';