
const tabButton = document.querySelectorAll('.tab-link'),
    tabContent = document.querySelectorAll('.tab-content');

// Menu Tab
function openMenu(evt, menuSection) {
    // Remove dark padding
    tabButton.forEach(btn => {
        btn.classList.remove('active');
    })
    // Remove all tabs 
    tabContent.forEach(con => {
        con.style.display = "none";
    });
    // Show tab on click
    document.getElementById(menuSection).style.display = "block";
    //Add dark padding on click
    evt.currentTarget.classList.add('active');
}