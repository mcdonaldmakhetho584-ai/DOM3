let rotate = false; 

const toggleBtn = document.querySelector('.btn-toggle-nav');
let toggleSidebar = document.querySelector('.nav-sidebar');
const sidebarlists = document.querySelectorAll('.nav-sidebar ul');

let removeAlert = document.querySelector('.modal');
if (removeAlert) {
    removeAlert.style.display = 'none';
}

function dismissAlert() {
    if (removeAlert) removeAlert.remove();
}

let loginform = document.getElementById('login-form');

if (loginform) {
    loginform.addEventListener('submit', (form) => {
        const uname = document.getElementById('uname');
        const password = document.getElementById('pwd');

        if (uname.value === '') {
            form.preventDefault();
            alert('Username cannot be empty');
        } 
        else if (password.value === '') {
            form.preventDefault();
            alert('Password cannot be empty');
        }
        else if (uname.value === 'junior' && password.value === '1234') {
            form.preventDefault();
            window.location.href = 'index.html';
        }
        else {
            form.preventDefault();
            if (removeAlert) removeAlert.style.display = 'block';
        }
    });
}

function toggleNav() {
    rotate = !rotate; 

    if (rotate) {
        toggleBtn.style.transform = `rotate(90deg)`;
        toggleSidebar.style.width = '272px';
        sidebarlists.forEach(list => {
            list.style.visibility = 'visible';
            list.style.color = 'white';
        });
    } else {
        toggleBtn.style.transform = `rotate(0deg)`;
        toggleSidebar.style.width = '50px';
        sidebarlists.forEach(list => {
            list.style.display = 'none';
        });
    }
}