           let btnSearch = document.querySelector('.btn-search');
           let popupSearch = document.querySelector('.modal-form-search');
           let dataArrivel = popupSearch.querySelector('[name=arrival-date]');
           let dataDeparture = popupSearch.querySelector('[name=departure-date');
           let formSearch = document.querySelector('.form-search');


           btnSearch.addEventListener('click', function (evt) {
               evt.preventDefault();
               console.log('click') 
               popupSearch.classList.toggle('modal-form-search-show');
               popupSearch.classList.remove('modal-error');
               dataArrivel.focus();
           });

           formSearch.addEventListener('submit', function (evt) {
            if (!dataArrivel.value || !dataDeparture.value) {
                evt.preventDefault();
                console.log('text');
                popupSearch.classList.add('modal-error');
               }
            
           });

              window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault(); 

                if (popupSearch.classList.contains('modal-form-search-show')){
                    popupSearch.classList.remove('modal-form-search-show');
                    popupSearch.classList.remove('modal-error');

                }
            }
           });