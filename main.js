function showAlert(){
    alert("Batafsil ma'lumot tez orada qo‘shiladi!");
}

let darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

let searchInput = document.getElementById("searchInput");
let newsList = document.querySelectorAll("#newsList li");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    newsList.forEach(item => {

        if(item.textContent.toLowerCase().includes(value)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }

    });

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert("Xabaringiz yuborildi!");

    contactForm.reset();

});
