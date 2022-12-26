const preview_images = document.querySelectorAll('.preview-img');

const items = document.querySelectorAll('.img');


items.forEach(item => {
    item.addEventListener('click', () => {
        const item_img = item.firstElementChild;

        const item_img_parent = item.parentElement;

        const item_img_parent_sibling = item_img_parent.previousElementSibling;
        
        const prv_img = item_img_parent_sibling.querySelector('.preview-img');
        
        if (item_img.src !== prv_img.src) {
            prv_img.src = item_img.src;
        };

    })
})