// Get the modal
const modal = document.getElementById("myModal");

// Get the element that opens the modal
const add_card = document.querySelector('.add-card');

// Get the <span> element that closes the modal
const close_btn = document.getElementsByClassName("close")[0];

// Get the submit btn
const submit_btn = document.querySelector('#submit')

// When the user clicks the button, open the modal 
add_card.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close_btn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Get the value of all the input field from the modal
let img_url = document.querySelector('#img-url');
let user_name = document.querySelector('#name');
let designation = document.querySelector('#designation');
let logo_url = document.querySelector('#logo-url');


// Submit Button click event handler inside the modal
submit_btn.addEventListener('click', () => {
    img_url = img_url.value;
    user_name = user_name.value;
    designation = designation.value;
    logo_url = logo_url.value;
    createCard(img_url, user_name, designation, logo_url)
    clearInput()
    modal.style.display = "none";
})


// Function to create a new card and insert inside the card wrapper
const createCard = (img, user_name, designation, logo) => {
    const item = document.createElement('div')

    item.innerHTML = `
    <div class="card rounded w-[220px] h-[280px] bg-[#11112C]">
        <div class="cover h-1/2">
            <img class="h-full w-full object-cover rounded-t" src="${img}" alt="">
        </div>
        <div class="p-5 flex flex-col gap-4">
            <div>
                <h4 class="text-[14px] text-white hover:cursor-pointer">${user_name}</h4>
                <p class="text-[12px] text-slate-500">${designation}</p>
            </div>
            <div>
                <p class="text-[12px] text-slate-500 mb-1">Previously</p>
                <div class="w-[50px] h-[18px]">
                    <img class="w-full h-full" src="${logo}" alt="file google logo svg wikimedia commons">
                </div>
            </div>
        </div>
    </div>
    `
    add_card.insertAdjacentElement('beforebegin', item)
}

const clearInput = () => {
    img_url.value = '';
    console.log(img_url)
    user_name.value = '';
    designation.value = '';
    logo_url.value = '';
}