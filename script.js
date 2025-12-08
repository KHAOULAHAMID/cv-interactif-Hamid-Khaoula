
        document.querySelectorAll('.nav-link').forEach(tab => {
            tab.addEventListener('shown.bs.tab', function (event) {
                console.log('Tab activée :', event.target.id);
            });
        });

        window.addEventListener('load', function() {
            window.scrollTo(0, 0);
        });
