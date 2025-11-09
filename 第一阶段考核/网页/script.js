// 点击"了解更多"滚动到"关于我"区块
const scrollBtn = document.getElementById('scrollBtn');
const aboutSection = document.getElementById('about');

scrollBtn.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// 导航栏平滑滚动
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// 表单提交反馈
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // 阻止默认提交行为
    alert('消息发送成功！我会尽快回复你～');
    contactForm.reset(); // 重置表单
});