
       const searchInput = document.getElementById("searchInput");
let dropdown = document.querySelector(".dropdown");

const districtsByProvinces = {
  "Koshi": [
    "Bhojpur", "Dhankuta", "Ilam", "Jhapa", "Khotang", "Morang", 
    "Okhaldhunga", "Panchthar", "Sankhuwasabha", "Solukhumbu", 
    "Sunsari", "Taplejung", "Terhathum", "Udayapur"
  ],
  "Madhesh": [
    "Bara", "Dhanusa", "Mahottari", "Parsa", "Rautahat", 
    "Saptari", "Sarlahi", "Siraha"
  ],
  "Bagmati": [
    "Bhaktapur", "Chitwan", "Dhading", "Dolakha", "Kathmandu", 
    "Kavrepalanchok", "Lalitpur", "Makwanpur", "Nuwakot", 
    "Ramechhap", "Rasuwa", "Sindhuli", "Sindhupalchok"
  ],
  "Gandaki": [
    "Baglung", "Gorkha", "Kaski", "Lamjung", "Manang", 
    "Mustang", "Myagdi", "Nawalpur", "Parbat", "Syangja", "Tanahu"
  ],
  "Lumbini": [
    "Arghakhanchi", "Banke", "Bardiya", "Dang", "Eastern Rukum", 
    "Gulmi", "Kapilvastu", "Palpa", "Parasi", "Pyuthan", "Rolpa", "Rupandehi"
  ],
  "Karnali": [
    "Dailekh", "Dolpa", "Humla", "Jajarkot", "Jumla", 
    "Kalikot", "Mugu", "Salyan", "Surkhet", "Western Rukum"
  ],
  "Sudurpashchim": [
    "Achham", "Baitadi", "Bajhang", "Bajura", "Dadeldhura", 
    "Darchula", "Doti", "Kailali", "Kanchanpur"
  ]
};

for (let province in districtsByProvinces){
  let num = districtsByProvinces[province].length;
  districtsByProvinces[province].forEach(element => {
    
    let districtName = document.createElement("li");
    districtName.className ="listdrop";
    districtName.setAttribute("value",element);
    districtName.innerText=element;

dropdown.appendChild(districtName);


  });
}
const items = document.querySelectorAll("#itemList li");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? "block" : "none";
  });
});

let itemName = document.querySelectorAll(".listdrop");
   

itemName.forEach(function(item) {
    item.addEventListener("click", function() {
        searchInput.value = item.getAttribute("value");
    });
});
