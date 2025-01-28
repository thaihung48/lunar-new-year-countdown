const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

// Tạo thời gian đích là 2 phút từ thời điểm hiện tại
const currentTime = new Date();
const newYearTime = new Date(currentTime.getTime() + 2 * 60000); // 2 phút = 2 * 60000 milliseconds

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    // Nếu đã đến thời điểm đích (hoặc đã qua)
    if (diff <= 0) {
        // Chuyển hướng sang trang pháo hoa
        window.location.href = '/n';
        return;
    }

    // Tính toán giờ, phút, giây còn lại
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // Hiển thị giá trị
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
