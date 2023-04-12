const dropdownToggle = document.querySelector('.dropdown-toggle');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        
        dropdownToggle.addEventListener('click', () => {
          dropdownMenu.classList.toggle('show');
        });
        
        dropdownItems.forEach(item => {
          item.addEventListener('click', () => {
            dropdownToggle.innerText = `Qty ${item.innerText} `;
            dropdownMenu.classList.remove('show');
          });
        });