// your-scripts.js

// 等待文檔完全加載後執行 JavaScript 代碼
document.addEventListener('DOMContentLoaded', function () {
    // 獲取下拉選單元素
    var yearDropdown = document.getElementById('yearDropdown');

    // 添加事件監聽器，當選擇發生變化時執行
    yearDropdown.addEventListener('change', function () {
        // 獲取所選擇的值
        var selectedYear = yearDropdown.value;

        // 在控制台打印所選擇的年份
        console.log('Selected Year: ' + selectedYear);
        
        // 這裡可以添加其他你想要執行的代碼，根據所選擇的年份執行相應的操作
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.custom-dropdown');
    const selectedOption = dropdown.querySelector('.selected-option');
    const options = dropdown.querySelector('.options');

    // 顯示/隱藏選項
    selectedOption.addEventListener('click', function () {
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });

    // 選擇選項
    options.addEventListener('click', function (event) {
        if (event.target.classList.contains('option')) {
            selectedOption.textContent = event.target.textContent;
            options.style.display = 'none';
        }
    });
});
