document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Kiểm tra email và mật khẩu
    if (email === 'a@gmail.com' && password === '123') {
        alert('Login successful');
        setTimeout(function(){
            window.location.href = '../pages/home.html'; // Chuyển hướng đến trang home
        },1000);
    } else {
        alert('Invalid email or password');
    }
});

// Xử lý đăng ký
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Ngừng hành động mặc định của form (ngừng tải lại trang)
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Kiểm tra nếu email và password không trống
    if (email && password) {
        alert('Account created successfully!');  // Thông báo đăng ký thành công
        setTimeout(function() {
            window.location.href = '../pages/home.html'; // Chuyển hướng đến trang đăng nhập sau 2 giây
        }, 2000);  // Thời gian delay trước khi chuyển hướng
    } else {
        alert('Please fill in both fields.');  // Thông báo khi các trường chưa được điền đầy đủ
    }
});
