document.getElementById('openDialogBtn').addEventListener('click', function() {
    document.getElementById('dialogOverlay').style.display = 'block';
    document.getElementById('dialogBox').style.display = 'block';
});

document.getElementById('closeDialogBtn').addEventListener('click', function() {
    document.getElementById('dialogOverlay').style.display = 'none';
    document.getElementById('dialogBox').style.display = 'none';
});
