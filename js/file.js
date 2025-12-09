const swiper = new Swiper(".swiper-course", {
  watchSlidesProgress: true,
  loop: true,
  spaceBetween: 20,

  slidesPerView: 1, // default desktop

  breakpoints: {
    0: {
      slidesPerView: 1, // mobile
    },
    768: {
      slidesPerView: 1, // mobile
    },
    1024: {
      slidesPerView: 2, // tablet
    },
    1200: {
      slidesPerView: 3, // desktop
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
(function () {
  const toggle = document.getElementById("darkModeToggle");
  const className = "dark-mode";
  // init: prefer saved, else system preference
  const saved = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;
  if (isDark) document.body.classList.add(className);
  toggle.checked = isDark;

  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add(className);
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove(className);
      localStorage.setItem("theme", "light");
    }
  });
})();
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  const sidebarText = toggleBtn.querySelector(".sidebar-text"); // ✅ define this correctly

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");

    // ✅ Toggle visibility of the button text
    if (sidebar.classList.contains("collapsed")) {
      sidebarText.style.display = "none";
    } else {
      sidebarText.style.display = "inline";
    }
  });

  // ✅ Sticky sidebar adjustment near footer
  const footer = document.querySelector(".footer");
  function adjustSidebarSticky() {
    const sidebarRect = sidebar.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top < window.innerHeight) {
      sidebar.style.position = "absolute";
      sidebar.style.top = `${
        window.scrollY + footerRect.top - sidebar.offsetHeight
      }px`;
    } else {
      sidebar.style.position = "fixed";
      sidebar.style.top = "0";
    }
  }

  window.addEventListener("scroll", adjustSidebarSticky);
  window.addEventListener("resize", adjustSidebarSticky);
});
(function () {
  var btn = document.getElementById("toggleSidebar");
  var leftIcon = document.getElementById("toggleIconLeft"); // icon to append on the left when clicked
  var rightIcon = document.getElementById("toggleIconRight"); // default right icon
  var bothLeft = document.getElementById("toggleIconBothLeft"); // alternate icon shown after toggle

  btn.addEventListener("click", function () {
    // toggle visibility of icons
    leftIcon.classList.toggle("d-none");
    rightIcon.classList.toggle("d-none");
    bothLeft.classList.toggle("d-none");

    // ensure leftIcon is placed at the start of the button to appear on the left
    if (!leftIcon.classList.contains("d-none")) {
      btn.insertBefore(leftIcon, btn.firstChild);
    }
  });
})();

// Dummy data for users
let users = [
  {
    id: 1,
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "01114205243",
    role: "طالب",
    status: "نشط",
  },
  {
    id: 2,
    name: "فاطمة علي",
    email: "fatima@example.com",
    phone: "01123456789",
    role: "معلم",
    status: "نشط",
  },
  {
    id: 3,
    name: "محمد حسن",
    email: "mohamed@example.com",
    phone: "01234567890",
    role: "إداري",
    status: "غير نشط",
  },
  {
    id: 4,
    name: "سارة أحمد",
    email: "sara@example.com",
    phone: "01098765432",
    role: "طالب",
    status: "نشط",
  },
  {
    id: 5,
    name: "علي محمود",
    email: "ali@example.com",
    phone: "01187654321",
    role: "معلم",
    status: "نشط",
  },
  {
    id: 6,
    name: "لينا خالد",
    email: "lina@example.com",
    phone: "01276543210",
    role: "طالب",
    status: "غير نشط",
  },
  {
    id: 7,
    name: "كريم سامي",
    email: "karim@example.com",
    phone: "01065432109",
    role: "إداري",
    status: "نشط",
  },
  {
    id: 8,
    name: "نور حسن",
    email: "nour@example.com",
    phone: "01154321098",
    role: "طالب",
    status: "نشط",
  },
  {
    id: 9,
    name: "يوسف عبدالله",
    email: "youssef@example.com",
    phone: "01243210987",
    role: "معلم",
    status: "نشط",
  },
  {
    id: 10,
    name: "مريم سالم",
    email: "mariam@example.com",
    phone: "01032109876",
    role: "طالب",
    status: "غير نشط",
  },
  {
    id: 11,
    name: "حسن علي",
    email: "hassan@example.com",
    phone: "01121098765",
    role: "إداري",
    status: "نشط",
  },
  {
    id: 12,
    name: "رنا محمد",
    email: "rana@example.com",
    phone: "01210987654",
    role: "طالب",
    status: "نشط",
  },
];

let currentPage = 1;
const itemsPerPage = 5;
let filteredUsers = [...users];

// Render table
function renderTable() {
  const tableBody = document.getElementById("usersTableBody");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageUsers = filteredUsers.slice(start, end);

  pageUsers.forEach((user) => {
    const row = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.role}</td>
                        <td><span class="badge ${
                          user.status === "نشط" ? "bg-success" : "bg-danger"
                        }">${user.status}</span></td>
                        <td>
                            <button class="btn btn-sm btn-outline-primary me-1" onclick="editUser(${
                              user.id
                            })"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm btn-outline-danger" onclick="deleteUser(${
                              user.id
                            })"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                `;
    tableBody.innerHTML += row;
  });
}

// Render pagination
function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
    pagination.appendChild(li);
  }
}

// Change page
function changePage(page) {
  currentPage = page;
  renderTable();
  renderPagination();
}

// Filter users
function filterUsers() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const roleFilter = document.getElementById("roleFilter").value;
  const statusFilter = document.getElementById("statusFilter").value;

  filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm);
    const matchesRole = !roleFilter || user.role === roleFilter;
    const matchesStatus = !statusFilter || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  currentPage = 1;
  renderTable();
  renderPagination();
}

// Export to CSV
function exportToCSV() {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    "ID,Name,Email,Role,Status\n" +
    filteredUsers
      .map(
        (user) =>
          `${user.id},${user.name},${user.email},${user.role},${user.status}`
      )
      .join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "users.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Edit user
function editUser(id) {
  const user = users.find((u) => u.id === id);
  if (user) {
    document.getElementById("editName").value = user.name;
    document.getElementById("editEmail").value = user.email;
    document.getElementById("editPhone").value = user.phone;
    document.getElementById("editRole").value = user.role;
    document.getElementById("editStatus").value = user.status;
    document.getElementById("saveEditUser").setAttribute("data-user-id", id);
    togglePhoneField("edit");
    new bootstrap.Modal(document.getElementById("editUserModal")).show();
  }
}

// Delete user
function deleteUser(id) {
  const user = users.find((u) => u.id === id);
  if (user) {
    document.getElementById("deleteUserName").textContent = user.name;
    document
      .getElementById("confirmDeleteUser")
      .setAttribute("data-user-id", id);
    new bootstrap.Modal(document.getElementById("deleteUserModal")).show();
  }
}

// Toggle phone field visibility based on role
function togglePhoneField(formPrefix) {
  const roleSelect = document.getElementById(`${formPrefix}Role`);
  const phoneContainer = document.getElementById(`${formPrefix}PhoneContainer`);
  const phoneInput = document.getElementById(`${formPrefix}Phone`);

  if (roleSelect.value === "معلم") {
    phoneContainer.style.display = "block";
    phoneInput.required = true;
  } else if (roleSelect.value === "طالب") {
    phoneContainer.style.display = "block";
    phoneInput.required = false;
  } else {
    phoneContainer.style.display = "none";
    phoneInput.required = false;
    phoneInput.value = "";
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  renderTable();
  renderPagination();

  // Search and filter
  document.getElementById("searchInput").addEventListener("input", filterUsers);
  document.getElementById("roleFilter").addEventListener("change", filterUsers);
  document
    .getElementById("statusFilter")
    .addEventListener("change", filterUsers);

  // Toggle phone for add form
  document
    .getElementById("addRole")
    .addEventListener("change", () => togglePhoneField("add"));

  // Toggle phone for edit form
  document
    .getElementById("editRole")
    .addEventListener("change", () => togglePhoneField("edit"));

  // Export
  document.getElementById("exportBtn").addEventListener("click", exportToCSV);

  // Add user
  document.getElementById("saveAddUser").addEventListener("click", function () {
    const name = document.getElementById("addName").value;
    const email = document.getElementById("addEmail").value;
    const phone = document.getElementById("addPhone").value;
    const role = document.getElementById("addRole").value;
    const status = document.getElementById("addStatus").value;

    if (name && email && role && status && (role !== "معلم" || phone)) {
      const newId = Math.max(...users.map((u) => u.id)) + 1;
      users.push({ id: newId, name, email, phone, role, status });
      filteredUsers = [...users];
      renderTable();
      renderPagination();
      bootstrap.Modal.getInstance(
        document.getElementById("addUserModal")
      ).hide();
      document.getElementById("addUserForm").reset();
      togglePhoneField("add"); // Reset visibility
    }
  });

  // Edit user
  document
    .getElementById("saveEditUser")
    .addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-user-id"));
      const name = document.getElementById("editName").value;
      const email = document.getElementById("editEmail").value;
      const phone = document.getElementById("editPhone").value;
      const role = document.getElementById("editRole").value;
      const status = document.getElementById("editStatus").value;

      if (name && email && role && status && (role !== "معلم" || phone)) {
        const userIndex = users.findIndex((u) => u.id === id);
        if (userIndex !== -1) {
          users[userIndex] = { id, name, email, phone, role, status };
          filteredUsers = [...users];
          renderTable();
          renderPagination();
          bootstrap.Modal.getInstance(
            document.getElementById("editUserModal")
          ).hide();
        }
      }
    });

  // Delete user
  document
    .getElementById("confirmDeleteUser")
    .addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-user-id"));
      users = users.filter((u) => u.id !== id);
      filteredUsers = [...users];
      renderTable();
      renderPagination();
      bootstrap.Modal.getInstance(
        document.getElementById("deleteUserModal")
      ).hide();
    });
});

// Delete lecture
function deleteLecture(button) {
  const lectureId = button.getAttribute("data-lecture-id");
  document.getElementById("confirmDeleteLecture").setAttribute("data-lecture-id", lectureId);
  new bootstrap.Modal(document.getElementById("deleteLectureModal")).show();
}

// Confirm delete lecture
document.addEventListener("DOMContentLoaded", function () {
  const confirmDeleteLectureBtn = document.getElementById("confirmDeleteLecture");
  if (confirmDeleteLectureBtn) {
    confirmDeleteLectureBtn.addEventListener("click", function () {
      const lectureId = this.getAttribute("data-lecture-id");
      // Here you would implement the actual deletion logic, e.g., remove the row or send to server
      console.log("Deleting lecture with ID:", lectureId);
      // For now, just hide the modal
      bootstrap.Modal.getInstance(document.getElementById("deleteLectureModal")).hide();
    });
  }
});
