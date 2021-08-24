export default (Vue) => {
  Vue.directive('getThis', (el) => {
    el.onclick = function () {
      alert('OK')
    }
  })
  // 封装指令上传文件图片
  Vue.directive('fileUpload', (el, binding, vnode, oldnode) => {
    // console.log(el);//当前元素
    // console.log(binding.value);//元素的data里面的内容
    // console.log(vnode.context.fileUpload);//vue里面的方法
    var data = binding.value;
    createNode(data);
    function createNode(data) {
      var node = document.createElement("input");
      node.type = "file";
      node.accept = " image/jpeg, image/png, image/jpg";
      node.multiple = data.multiple ? "multiple" : "";
      node.style.display = "none";
      el.append(node);
      el.onclick = (e) => {
        el.children[0].click();
        
      }
    }
    var inputFile = el.children[0];
    inputFile.onchange = (event) => {
      var event = event || window.event;
      var file = event.target.files[0];
      // 把图片地址传递到前面vue
      vnode.context.fileUpload(window.URL.createObjectURL(file));
    }
  })
}
