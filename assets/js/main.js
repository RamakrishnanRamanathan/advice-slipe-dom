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
(function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
