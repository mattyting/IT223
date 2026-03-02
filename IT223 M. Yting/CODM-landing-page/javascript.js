document.querySelector('.btn').addEventListener('click', function() {
    // Get values from inputs
    const userId = document.getElementById('user-id').value;
    const userName = document.getElementById('user-name').value;

    if (userId === "" || userName === "") {
        alert("Please fill in both fields!");
        return;
    }

    // 1. Save to Browser Memory (LocalStorage)
    localStorage.setItem('codm_id', userId);
    localStorage.setItem('codm_name', userName);

    // 2. "The Download Trick" - Creates a file and downloads it to your folder
    const dataString = `CODM ID: ${userId}\nCODM Name: ${userName}`;
    const blob = new Blob([dataString], { type: 'text/plain' });
    const link = document.createElement('a');
    
    link.download = 'codm_info.txt';
    link.href = window.URL.createObjectURL(blob);
    link.click();

    alert("Info saved to browser and downloaded!");
});