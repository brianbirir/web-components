const toggleSwitch = document.getElementById('toggleSystem');

toggleSwitch.onclick = () => {
    if (toggleSwitch.checked) {
        console.log('Checked');
    } else {
        console.log('Not Checked');
    }
}