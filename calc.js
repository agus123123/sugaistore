var inputAngka = document.getElementById("inputAngka");
        function pencetBtn(ags) {
            var agus = ags.innerHTML;
            if (agus == '=') {
                inputAngka.innerHTML = eval(inputAngka.innerHTML);
            } else if (agus == 'Clear') {
                inputAngka.innerHTML = '0';
            } else {
                if (inputAngka.innerHTML == '0'){
                    inputAngka.innerHTML = agus;
                } else {
                    inputAngka.innerHTML += agus;
                }
            }
        }