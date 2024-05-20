const blockQuoute = document.querySelector("blockquote");
const refreshButton = document.querySelector("button");

const URL = "https://api.adviceslip.com/advice";

refreshButton.style.display = "none";
refreshButton.addEventListener("click", () => {
  location.href = "";
});
async function getApiData() {
  try {
    const fetchResponse = await fetch(URL);
    const result = await fetchResponse.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
const finalResult = await getApiData();
blockQuoute.textContent = finalResult.slip.advice;
refreshButton.style.display = "block";
