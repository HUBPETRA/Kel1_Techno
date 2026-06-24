// --- 1. Logika Tab System (Halaman Profil) ---
function openTab(tabName) {
    // Sembunyikan semua konten tab
    let contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // Hapus class 'active' dari semua tombol tab
    let buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Tampilkan tab yang dipilih dan beri class 'active' pada tombolnya
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// --- 2. Logika Modal / Pop-up (Halaman Jobs & Tutor) ---
function openModal(title, price) {
    document.getElementById('jobModal').style.display = 'flex';
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
}

function closeModal() {
    document.getElementById('jobModal').style.display = 'none';
}

// --- 3. Logika Simulasi Auto-Portfolio (Halaman Index/Home) ---
function runSimulation() {
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3 = document.getElementById('step3');
    let btn = document.getElementById('simBtn');

    btn.innerText = "Memproses...";
    btn.disabled = true;

    // Reset warna
    step1.className = "step"; step2.className = "step"; step3.className = "step";

    // Animasi urutan dengan setTimeout
    setTimeout(() => { step1.classList.add("active-step"); }, 500);
    setTimeout(() => { step1.classList.remove("active-step"); step2.classList.add("active-step"); }, 2000);
    setTimeout(() => { 
        step2.classList.remove("active-step"); 
        step3.classList.add("success-step"); 
        btn.innerText = "Simulasi Selesai!";
        setTimeout(() => { btn.innerText = "Ulangi Simulasi"; btn.disabled = false; }, 2000);
    }, 3500);
}

// --- 5. Logika Halaman Buat Penawaran (create.html) ---

// Fungsi untuk mengganti field form berdasarkan tipe penawaran
function toggleFormFields() {
    // Cek elemen dinamis ada atau tidak (agar tidak error di halaman lain)
    let dynamicGroup = document.getElementById('dynamicFields');
    if (!dynamicGroup) return;

    let offerType = document.querySelector('input[name="offerType"]:checked').value;
    
    if (offerType === 'job') {
        dynamicGroup.innerHTML = `
            <div class="form-row">
                <div class="form-group half">
                    <label for="price">Harga Mulai Dari (Rp)</label>
                    <input type="number" id="price" placeholder="Contoh: 50000" required>
                </div>
                <div class="form-group half">
                    <label for="delivery">Estimasi Waktu Pengerjaan</label>
                    <select id="delivery">
                        <option value="1">1 Hari</option>
                        <option value="3">3 Hari</option>
                        <option value="7">1 Minggu</option>
                    </select>
                </div>
            </div>
        `;
    } else if (offerType === 'tutor') {
        dynamicGroup.innerHTML = `
            <div class="form-row">
                <div class="form-group half">
                    <label for="price">Harga Per Sesi (Rp)</label>
                    <input type="number" id="price" placeholder="Contoh: 30000" required>
                </div>
                <div class="form-group half">
                    <label for="format">Format Kelas</label>
                    <select id="format">
                        <option value="online">Online (Zoom/GMeet)</option>
                        <option value="offline">Offline (Tatap Muka)</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="duration">Durasi Sesi</label>
                <select id="duration">
                    <option value="45">45 Menit</option>
                    <option value="60">1 Jam</option>
                    <option value="90">1.5 Jam</option>
                </select>
            </div>
        `;
    }
}

// Simulasi Proses Submit Form
let offerForm = document.getElementById('offerForm');
if (offerForm) {
    offerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah halaman reload sungguhan

        let btn = document.getElementById('submitBtn');
        btn.innerText = "Sedang Mengunggah...";
        btn.disabled = true;

        // Simulasi loading selama 1.5 detik
        setTimeout(() => {
            // Sembunyikan form
            document.getElementById('offerForm').style.display = 'none';
            document.querySelector('.create-header').style.display = 'none';
            
            // Tampilkan layar sukses
            document.getElementById('successScreen').style.display = 'block';
        }, 1500);
    });
}

// --- Logika Modal Login Berdasarkan Role ---
function openLoginModal(role) {
    document.getElementById('loginModal').style.display = 'flex';
    
    if(role === 'kampus') {
        document.getElementById('loginKampusContent').style.display = 'block';
        document.getElementById('loginUmkmContent').style.display = 'none';
    } else if (role === 'umkm') {
        document.getElementById('loginKampusContent').style.display = 'none';
        document.getElementById('loginUmkmContent').style.display = 'block';
    }
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}