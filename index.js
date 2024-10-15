var btnList = document.querySelectorAll('button');
var imgList = document.querySelectorAll('img');
var container = document.querySelector('.container');
btnList.forEach(btn=> {
    btn.addEventListener('click', e=> {
        var type = e.currentTarget.getAttribute('type');
        imgList.forEach(img=> {
            var foodType = img.getAttribute('type');
             if(type =='all' || foodType ==type)
             {
                img.classList.remove('hide');
             }
                else
                {
                    img.classList.add('hide');
                }
        });
    });
});


// Cach 2

// init data
// var arr =[]
// imgList.forEach(item=>{
//     arr.push({
//         src: item.src,
//         type: item.getAttribute('type')
//     })
// });

// btnList.forEach(btn=> {
//     btn.addEventListener('click', e=> {
//         var type = e.currentTarget.getAttribute('type');
//         var filterData = arr.filter(food=>{
//             return food.type == type
//         })
//         render(filterData);
        
//     });
// });

// function render(list) {
//     container.innerHTML = '';
//     list.forEach(item=>{
//         var imgElement = document.createElement('img');
//         imgElement.src = item.src;
//         imgElement.setAttribute('type', item.type);
//         container.appendChild(imgElement);
//     });
// }