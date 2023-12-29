$(document).ready(function () {
  const apiUrl = "https://social-blog-w45g.onrender.com/users";

  function renderUserData(users) {
    $("#usersDetails tbody").empty();
    $.each(users, function (index, user) {
      const userInput = `<tr>
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.gender}</td>
            <td>${user.date_of_birth}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.location}</td>
            <td><button class='editBtn' data-id='${user.id}'>Edit</button></td>
            <td><button class='deleteBtn' data-id='${user.id}'>Delete</button></td>
          </tr>`;
      $("#usersDetails tbody").append(userInput);
    });
  }

  function deleteUser(userId) {
    $.ajax({
      url: `${apiUrl}/${userId}`,
      method: "DELETE",
      success: function () {
        console.log("This useer has been deleted successfully.");
        fetchUserDetails();
      },
      error: function (error) {
        console.log("Error deleting user:", error);
      },
    });
  }

  function fetchUserDetails() {
    $.ajax({
      url: apiUrl,
      method: "GET",
      dataType: "json",
      success: function (users) {
        renderUserData(users);
      },
      error: function (error) {
        console.log("Error fetching user details:", error);
      },
    });
  }


  fetchUserDetails();

  $("#usersDetails").on("click", ".deleteBtn", function () {
    const userId = $(this).data("id");
    if (confirm("Confirm if you want to delete this user?")) {
      deleteUser(userId);
    }
  });
});
