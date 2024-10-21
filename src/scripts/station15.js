function displayList(){
  //fruitsのすべてのp要素を取得
  const fruits = document.querySelectorAll("#fruits p");
  //ul要素を作成
  const ul = document.createElement("ul");

  fruits.forEach(function(p) {
    //li要素を作成
    const li = document.createElement("li");
    //p要素のテキストをli要素に追加
    li.textContent = p.textContent;
    //li要素をul要素に追加
    ul.appendChild(li);
    //p要素を削除
    p.remove();
  })

  const fruitsDiv = document.getElementById("fruits");
  fruitsDiv.appendChild(ul);
}

// function displayList() {
//   var fruits = document.getElementById("fruits");
//   fruits.innerHTML = "<ul><li>リンゴ<li>イチゴ<li>ブドウ";
// }
