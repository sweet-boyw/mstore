import Vue from 'vue'

/**
 * 注册全局指令
 * @edit 双击绑定元素进行内容编辑
 * @debounce 防抖
 * @throttle 节流
 */

Vue.directive('edit', {
    bind(element, binding) {
        console.log("element", element)
        console.log("binding", binding)
        element.addEventListener('dblclick', () => {
            console.log('adfsd')
            const editBox = document.createElement('input');
            editBox.setAttribute('style', 'display:inline-block');
            editBox.setAttribute('class', 'edit-box')
            element.appendChild(editBox);
        })
    }
})

Vue.directive('debounce', {
    bind(element, binding) {
        console.log(element, binding)
    }
})

Vue.directive('throttle', {
    bind(ele, binding) {
        console.log(ele, binding)
    }
})