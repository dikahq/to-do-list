function anjay() {
    let input = document.getElementById("masukan");
    let ul = document.getElementById("ani");

    if (input.value === "") {
        alert("isi tidak boleh kosong!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = input.value + " ";

    let button = document.createElement("button");
    button.textContent = "Hapus";
    button.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(button);
    ul.appendChild(li);
    input.value = "";

}