function refresh_this_page() {
  location.reload();
}

function showResult() {
  const resultElement = document.getElementById("result");
  const result = 2 + 2;
  resultElement.value = result;
}
