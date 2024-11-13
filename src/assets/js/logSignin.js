document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Kiểm tra email và mật khẩu
    if (email === 'nghia@gmail.com' && password === '123') {
        alert('Login successful');
        window.location.href = '../pages/home.html'; // Chuyển hướng đến trang home
    } else {
        alert('Invalid email or password');
    }
});

// Xử lý đăng ký
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Ngừng hành động mặc định của form (ngừng tải lại trang)
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        alert('Account created successfully!');
        setTimeout(function() {
            window.location.href = '../pages/home.html';
        }, 2000);  
    } else {
        alert('Please fill in both fields.');  
    }
});


