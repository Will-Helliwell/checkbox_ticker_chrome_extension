document.getElementById('tickAllCheckboxes').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: tickAllCheckboxes
  });
});

function tickAllCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let count = 0;
  
  checkboxes.forEach(checkbox => {
    checkbox.checked = true;
    count++;
  });
  
  console.log(`Ticked ${count} checkboxes`);
}