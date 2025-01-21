document.getElementById('tickAllCheckboxes').addEventListener('click', tickAllCheckboxes);

function tickAllCheckboxes() {
    console.log("in tickAllCheckboxes");
    
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
  }
}
