function startGame() {
    // Kata yang harus ditebak
    const words = ['javascript', 'programming', 'web', 'developer', 'profil'];
    const randomWord = words[Math.floor(Math.random() * words.length)]; // Pilih kata acak
    let guess = '';
    let attempts = 0;

    // Meminta pengguna untuk menebak
    while (guess.toLowerCase() !== randomWord && attempts < 3) {
        guess = prompt("Tebak kata (Hint: kata berhubungan dengan web development):");

        if (guess === null) {
            alert("Permainan dibatalkan.");
            return;
        }

        attempts++;

        if (guess.toLowerCase() === randomWord) {
            alert("Selamat! Tebakan kamu benar.");
        } else if (attempts < 3) {
            alert("Tebakan salah. Coba lagi.");
        }
    }

    if (guess.toLowerCase() !== randomWord) {
        alert(`Kesempatan habis! Kata yang benar adalah: ${randomWord}`);
    }
}
