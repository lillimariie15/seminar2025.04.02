let likeCount = 0;
let shareCount = 0;
let subscribeCount = 0;

document.getElementById('likeBtn').addEventListener('click', function () {
  likeCount++;
  document.getElementById('likeCount').textContent = likeCount;
  console.log('You clicked Like');
  alert('Thanks for liking!');
});

document.getElementById('shareBtn').addEventListener('click', function () {
  likeCount++;
  document.getElementById('likeCount').textContent = shareCount;
  console.log('You clicked Share');
  alert('Thanks for sharing!');
});

document.getElementById('subscribeBtn').addEventListener('click', function () {
  subscribeCount++;
  document.getElementById('likeCount').textContent = subscribeCount;
  console.log('You clicked Subscribe');
  alert('Thanks for subscribing!');
});
