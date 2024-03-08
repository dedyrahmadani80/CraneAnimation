// 获取Canvas元素
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 设置Canvas的宽度和高度
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义千纸鹤对象
class Crane {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  }

  // 绘制千纸鹤
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.size / 2, this.y - this.size);
    ctx.lineTo(this.x + this.size, this.y);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // 更新千纸鹤的位置
  update() {
    this.y -= this.speed;
    if (this.y < -this.size) {
      this.y = canvas.height + this.size;
      this.x = Math.random() * canvas.width;
    }
  }
}

// 创建多个千纸鹤对象
const cranes = [];
for (let i = 0; i < 30; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 20 + 10;
  const speed = Math.random() * 3 + 1;
  cranes.push(new Crane(x, y, size, speed));
}

// 动画循环
function animate() {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 更新并绘制每个千纸鹤
  cranes.forEach(crane => {
    crane.update();
    crane.draw();
  });

  // 循环调用动画
  requestAnimationFrame(animate);
}

// 启动动画
animate();
