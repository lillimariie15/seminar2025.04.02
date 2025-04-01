// Data
let employees = [];

document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    const role = document.getElementById('roleInput').value.trim();
    const department = document.getElementById('departmentInput').value;

    if (name === '' || role === '' || department === '') {
        alert('All fields are required.');
        return;
    }

    const newEmployee = { id: Date.now(), name, role, department };
    employees.push(newEmployee);

    renderEmployeeList(employees);
    updateStats();

    // Input reset
    document.getElementById('nameInput').value = '';
    document.getElementById('roleInput').value = '';
    document.getElementById('departmentInput').value = '';
});

// Process employees
function renderEmployeeList(empList) {
    const ul = document.getElementById('employeeList');
    ul.innerHTML = '';

    empList.forEach(emp => {
        const li = document.createElement('li');
        li.className = 'employee-item';
        li.innerHTML = `
            <span>${emp.name} - ${emp.role} (${emp.department})</span>
            <button class="deleteBtn" data-id="${emp.id}">Delete</button>
        `;
        ul.appendChild(li);
    });

    // Attach event listeners
    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            employees = employees.filter(e => e.id !== id);
            renderEmployeeList(employees);
            updateStats();
        });
    });
}

// Updating data
function updateStats() {
    document.getElementById('employeeCount').textContent = `Total Employees: ${employees.length}`;

    const deptStats = {};
    employees.forEach(emp => {
        if (!deptStats[emp.department]) {
            deptStats[emp.department] = 0;
        }
        deptStats[emp.department]++;
    });

    let statsHTML = '';
    for (const dept in deptStats) {
        statsHTML += `${dept}: ${deptStats[dept]} | `;
    }

    document.getElementById('departmentStats').textContent = statsHTML;
}

// Filtering employees
document.getElementById('searchInput').addEventListener('input', function() {
    const term = this.value.toLowerCase();
    const filtered = employees.filter(emp => emp.name.toLowerCase().includes(term));
    renderEmployeeList(filtered);
});
