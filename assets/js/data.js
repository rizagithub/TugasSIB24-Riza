
// Array untuk menyimpan data
let userData = [];

// Fungsi untuk menambah data ke dalam array
function addData(name, email) {
    userData.push({ id: userData.length + 1, name: name, email: email});
}

// Fungsi untuk mendapatkan seluruh data
function getAllData() {
    return userData;
}
console.log(userData)
