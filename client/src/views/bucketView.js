const BucketView = function(){
  this.bucketView = [];
}

BucketView.prototype.addItem = function(item){
  this.bucketView.push(item);
  this.render(item);
}

BucketView.prototype.clear = function(){
  this.bucketView = [];
  const ul = document.querySelector('#bucket-list');
  ul.innerHTML = '';
}

BucketView.prototype.render = function(item){
  const ul = document.querySelector('#bucket-list');
  const li = document.createElement('li');
  li.innerText = item;
  ul.appendChild(li);
}

 module.exports = BucketView;
