const photo = document.querySelector('.profile-photo');

if (photo) {
    photo.onclick = function() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        
        const bigPhoto = document.createElement('img');
        bigPhoto.src = this.src;
        bigPhoto.style.maxWidth = '80%';
        bigPhoto.style.maxHeight = '80%';
        bigPhoto.style.border = '5px solid white';
        bigPhoto.style.borderRadius = '10px';
        
        overlay.appendChild(bigPhoto);
        
        document.body.appendChild(overlay);
        
        overlay.onclick = function() {
            document.body.removeChild(overlay);
        };
    };
}