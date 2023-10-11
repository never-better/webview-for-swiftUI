var textArray = [
  "이 곳은 웹 뷰입니다. 넘어오지 마십쇼 휴먼.",
  "으악",
  "내 몸에서 나가!!!",
  "지금까지 자바스크립트였습니다.",
  "The End",
];

var currentIndex = 0

function changeText() {  
  currentIndex++;
  if (currentIndex === textArray.length) {
    currentIndex = 0;
  }

  displayText.textContent = textArray[currentIndex];
}

var javascriptArray = [
  "웹 뷰에서 왔습니다.",
  "아이폰 참 좋네요 ㅎㅎㅎ",
  "🧻🧻🧻🧻🧻🧻",
  "집들이 선물입니다",
  "The End"
];

var jsIndex = 0

document.getElementById("submit-button").addEventListener("click", function() {
  let text = javascriptArray[jsIndex]
  window.webkit.messageHandlers.textfieldText.postMessage(text)

  jsIndex++;
  if (jsIndex == javascriptArray.length) {
    jsIndex = 0;
  }
});

