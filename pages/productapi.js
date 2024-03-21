fetch('https://crudcrud.com/api/c8b52e6baabc48cc970c6486fa19869e/user')
        .then(response => response.json())
        .then(data => {
            // Menampilkan data pengguna dalam bentuk kartu
            const userList = document.getElementById('user-list');
            data.forEach(user => {
                const card = document.createElement('div');
                card.classList.add('user-card');
                card.innerHTML = `

                    <h3>Nama: ${user.Nama}</h3>
                    <p>Id : ${user._id}</p>
                    <p>Alamat: ${user.Alamat}</p>
                `;
                userList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching users:', error));