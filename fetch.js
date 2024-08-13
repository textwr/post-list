/**
 * fetch()
 * 옵션(method, headers, body 등)
 * 요청에 성공시 response객체반환
 *
 * response.json() : 데이터를 자바스크립트 객체로 반환
 */
const postList = document.getElementById("postList");
const button = document.getElementById("searchButton");
let postData;

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    //console.log(response);
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 404) {
      return Promise.reject("인터넷이 연결되지 않았습니다");
    }
  })
  .then((data) => {
    postData = data;
    //console.log(data);
    for (e of data) {
      const article = document.createElement("article");
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      article.setAttribute("class", "article");
      div1.setAttribute("class", "postTitle");
      div2.setAttribute("class", "postBody");

      div1.textContent = e.title;
      div2.textContent = e.body;
      article.setAttribute("id", e.id);

      article.addEventListener("click", function (e) {
        if (e.target.id != undefined) {
          window.location.href = `file:///D:/code/0809/%EA%B3%BC%EC%A0%9C2/test.html?id=${e.target.id}`;
        }
      });

      article.appendChild(div1);
      article.appendChild(div2);
      postList.appendChild(article);
    }
  })
  .catch((error) => {
    console.log(error);
  });

button.addEventListener("click", (e) => {
  const value = document.getElementById("textInput").value;
  const article = document.getElementsByClassName("article");
  for (e of article) {
    e.style.display = "inline-block";
  }
  for (e of article) {
    if (!e.children[1].textContent.includes(value)) {
      e.style.display = "none";
    }
  }
});
