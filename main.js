var target_milli_sec = new Date("April 25, 2024 21:22:00").getTime();
                function timer() {
                    var now_milli_sec = new Date().getTime();
                    var remaining_sec = Math.floor( (target_milli_sec - now_milli_sec) / 1000 );

                    var day = Math.floor(remaining_sec / (3600 * 24));
                    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
                    var min = Math.floor((remaining_sec % 3600) / 60);
                    var sec = Math.floor(remaining_sec % 60);
                    
                    document.querySelector("#day").innerHTML = day;
                    document.querySelector("#hour").innerHTML = hour;
                    document.querySelector("#min").innerHTML = min;
                    document.querySelector("#sec").innerHTML = sec;
                }

                setInterval(timer, 1000); //1000 it means 1 sec