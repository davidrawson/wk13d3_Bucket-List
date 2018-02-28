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

BucketView.prototype.render = function(){
  
}
