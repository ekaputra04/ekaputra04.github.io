// Ambil elemen yang dibutuhkan
const menuButton = document.querySelector(".menu__button");
const sidebar = document.createElement("div");

// Buat sidebar dan isinya
sidebar.classList.add("sidebar");
sidebar.innerHTML = `
  <span class="close-btn">&times;</span>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#tools">Tools</a></li>
    <li><a href="#project">Project</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
`;

// Tambahkan sidebar ke body
document.body.appendChild(sidebar);

// Fungsi untuk toggle sidebar
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Fungsi untuk close sidebar
const closeButton = sidebar.querySelector(".close-btn");
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
