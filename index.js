var container = document.querySelector('.container');
var btnList = document.querySelectorAll('button');
var imgList = document.querySelectorAll('img');

// btnList.forEach(btn=> {
//     btn.addEventListener('click', e=> {
//         var type = e.currentTarget.getAttribute('type');
//         imgList.forEach(img=> {
//             var foodType = img.getAttribute('type');
//              if(type =='all' || foodType ==type)
//              {
//                 img.classList.remove('hide');
//              }
//                 else
//                 {
//                     img.classList.add('hide');
//                 }
//         });
//     });
// });


// Cach 2
// init data
var arr =[]
imgList.forEach(item=>{
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    })
});

function activeButton(btnActive) {
    btnList.forEach(btn=> {
        btn.classList.remove('active');
    });
    btnActive.classList.add('active');
}

btnList.forEach(btn=> {
    btn.addEventListener('click', e=> {
        //active button
        activeButton(e.currentTarget); 
        // filter data
        var type = e.currentTarget.getAttribute('type');
        if(type == 'all')
        {
            render(arr);
            return;
        }

        var filterData = arr.filter(food=>{
            // [{src: 'link', type: 'drink'}
            return food.type == type
        })
        render(filterData);
        
    });
});

function render(list) {
    // [{src: 'link', type: 'drink'}, {src: 'link', type: 'meat'}]
    container.innerHTML = '';
    list.forEach(item=>{
        var imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.setAttribute('type', item.type);
        // [{src: 'link', type: 'drink'}
        var divElement = document.createElement('div');
        divElement.classList.add('food-list');
        divElement.append(imgElement);
        container.append(divElement);
    });
}