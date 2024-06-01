// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// dropwown menu js code

document.getElementById('myInput').addEventListener('click', function() {
  document.getElementById('dropdown').style.display = 'block';
});

document.getElementById('dropdown').addEventListener('click', function(event){
  if (event.target.tagName === 'LI') {
    document.getElementById('myInput').value = event.target.textContext;
    document.getElementById('dropdown').style.display = 'none';
  }
});

// what the hell are we doing here is the word i whad wanted to use in  this sentenxc
