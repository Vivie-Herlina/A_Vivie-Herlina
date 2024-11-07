
let queue = ["Ray", "Fiki", "Fadhilla", "Farah"];

function updateQueueDisplay() {
    const queueList = document.getElementById("queueList");
    queueList.innerHTML = "";  // Hapus daftar lama
    
    queue.forEach((person, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${person}`;
        queueList.appendChild(listItem);
    });
}

function simulateQueue() {

    queue.push("Nabila");

    queue.push("Maza", "Elsi");

    queue.pop();

    queue.shift();

    queue.splice(0, 1);

    queue.unshift("Tomi");


    updateQueueDisplay();
}

// Tampilkan antrian awal
updateQueueDisplay();
