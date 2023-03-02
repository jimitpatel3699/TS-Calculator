let showbox = document.getElementById("txtbstore") as HTMLInputElement;
let answerebox = document.getElementById("answere") as HTMLInputElement;
let number1: number, number2: number;
let signcounter: number = 0;//for arithmatic type operations
let textcounter: number = 0;//clear textbox
let equalcounter: number = 0;//cleat status box
let plusmincount: number = 0;//for +/-
let rcount: number = 0;//for bracket
let lcount: number = 0;//for bracket
let repeatcount: number = 0;
let dotcounter:number=0;
let memory_array: number[] = [];//for mc,mr,m+,m-
let keyvalues: string | undefined = undefined;
let numvalues: string | undefined = undefined;
let temp: number = 0;
let fcount: number = 0;
let arr_sum: number = 0;
let afteror: number = 0;
let expvalue: (string | undefined) = undefined;

window.addEventListener('keydown', (e) => {

    let evalue: number = Number(e.key);
    if ((evalue >= 0 && evalue <= 9)) {

        keyvalues = e.key;
        display(keyvalues);
    }
    if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/" || e.key == "%" || e.key == ".") {
        console.log(e.key);
        numvalues = e.key;
        operation(numvalues);

    }
    if (e.key == "Enter") {
        numvalues = '=';
        operation(numvalues);
    }
    if (e.key == "Backspace") {
        clearscr("delete");
    }
    if (e.key == "Escape") {
        clearscr("clear");
    }
    if (e.key == "(") {
        bodmas("open-brace");
    }
    if (e.key == ")") {
        bodmas("close-brace");
    }
});
function clearscr(id: string) {
    if (id == "clear") {
        answerebox.value = "";
        showbox.value = "";
        signcounter = 0;//for arithmatic type operations
        dotcounter=0;

    }
    if (id == "delete") {
        let data:string = answerebox.value;
        let datalenght:number = data.length;
        if (data[datalenght - 1] === "(") {
            rcount--;
        }

        if (data[datalenght - 1] === ")") {
            lcount--;
        }
        if (data[datalenght - 1] == ".") {
            dotcounter=0;
        }

        answerebox.value = answerebox.value.slice(0, -1);

    }
    if (id == "clrans") {
        answerebox.value = "";
        rcount = 0;
        lcount = 0;
        dotcounter=0;
    }

}
//for display data on answere box & status box
function display(id: string) {
    let values: string;
    if (keyvalues == undefined) {
        values = document.getElementById(id)!.innerText;

    }
    else {
        values = keyvalues;
    }


    if (textcounter == 1) {
        answerebox.value = "";

    }

    if (equalcounter == 1) {

        showbox.value = "";
        equalcounter = 0;
    }
    signcounter = 1;
    textcounter = 0;
    plusmincount = 1;
    switch (values) {
        case '1':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;

            }
            else {
                answerebox.value += values;
            }


            break;

        case '2':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;
            }
            else {
                answerebox.value += values;
            }

            break;
        case '3':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;
            }
            else {
                answerebox.value += values;
            }

            break;
        case '4':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;
            }
            else {
                answerebox.value += values;
            }

            break;

        case '5':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;
            }
            else {
                answerebox.value += values;
            }

            break;

        case '6':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;
            }
            else {
                answerebox.value += values;
            }

            break;

        case '7':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;
            }
            else {
                answerebox.value += values;
            }

            break;

        case '8':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;
            }
            else {
                answerebox.value += values;
            }

            break;

        case '9':
            if (expvalue != undefined) {

                answerebox.value = expvalue + values;
            }
            else {
                answerebox.value += values;
            }

            break;

        case '0':

            if (answerebox.value.length == 0) {
                answerebox.value = "0";
                console.log(answerebox.value.length);
                console.log("case 1");
                break;
            }
            else if (Number(answerebox.value) == 0 && Number(showbox.value) != 0) {
                answerebox.value += 0;
                console.log(answerebox.value.length);
                console.log("case 3");

                break;
            } else if (Number(answerebox.value) != 0) {
                answerebox.value += values;
                console.log(answerebox.value.length);
                console.log("case 4");

                break;
            }
         case "." :
                {
            if (Number(answerebox.value) == 0) {
                answerebox.value = "0" + values;
                //showbox.value += values;
               
            } else {
                if(dotcounter==0)
                {
                    answerebox.value += values;
                   dotcounter=1;
                }
                
                break;
            }
        }

        }
    
keyvalues=undefined;


}
//function for Arithmatics
function operation(id: string) {
    let sign:string
    textcounter = 1;
    if (afteror == 1) {
        showbox.value = "";
        afteror = 0;
    }
    if (numvalues == undefined) {
        sign = document.getElementById(id)!.innerText;
    }
    else {
        sign = numvalues;
    }

    if (repeatcount == 1) {

        showbox.value = '';

        equalcounter = 0;
        repeatcount = 0;
    }

    if (signcounter == 1) {
        switch (sign) {
            case '+':
                showbox.value += answerebox.value + sign + "";
                signcounter = 0;
                break;
            case '-':
                showbox.value += answerebox.value + sign + "";
                signcounter = 0;
                break;

            case '*':

                showbox.value += answerebox.value + "*" + "";
                signcounter = 0;

                break;
            case '/':

                showbox.value += answerebox.value + sign + "";
                signcounter = 0;

                break;
            case '=':

                showbox.value += answerebox.value;
                answerebox.value = eval(showbox.value);

                equalcounter = 1;
                signcounter = 1;
                repeatcount = 1;
                if (expvalue != undefined) {
                    expvalue = undefined;
                }
                break;

            case 'xy':
                if (answerebox.value == "") {
                    showbox.value = "0" + "**" + "0";
                } else {
                    showbox.value += answerebox.value + "**" + "";
                }
                break;
            case 'mod':
                {
                    showbox.value += answerebox.value + "%" + "";
                    break;
                }



        }

        if (id == 'plus-min' && Number(answerebox.value) != 0 && plusmincount == 1) {
            let show = showbox.value;
            answerebox.value = "-" + answerebox.value;
            showbox.value = show + answerebox.value;
            answerebox.value = "";
            signcounter = 1;
            plusmincount = 0;

        } else {
            if (id == 'plus-min') {
                signcounter = 1;
            } else {
                fcount = 0;
                if (sign != '=') {
                    signcounter = 0;

                }

            }

        }
    }
numvalues=undefined;
dotcounter=0;
}
//factorial function
function factorial() {
    console.log("answerebox value=" + answerebox.value)
    if (Number(answerebox.value) == 0) {
        showbox.value = "1! =";
        answerebox.value = "1";
    } else {
        let factnum = answerebox.value;
        let ans: number = 1;
        for (let i: number = Number(factnum); i > 0; i--) {
            ans = ans * i;
        }
        showbox.value = factnum + "! =";
        answerebox.value = String(ans);
        console.log('factorial of ' + factnum + '=' + ans);
    }
    textcounter = 1;
    equalcounter = 0;
    signcounter = 0;

}
//function for pai
function pai(id: string) {
    if (id == "pi") {
        answerebox.value = String(Math.PI);
    }
    if (id == "e")
        answerebox.value = String(Math.E);
    signcounter = 1;
    textcounter = 1;

}
//function for log,root,cube,square,...
function log(id: string) {
    signcounter = 1;
    afteror = 1;
    let user_value = answerebox.value;
    if (id == "ln") {
        if (Number(user_value) == 0) {
            answerebox.value = "invalid input!";

        } else if (Number(user_value) < 0) {
            answerebox.value = "invalid input!";
        } else if (Number(user_value) > 0) {
            showbox.value = "ln(" + user_value + ")";
            answerebox.value = String(Math.log(Number(user_value)));
        }
    } else if (id == "log") {
        if (Number(user_value) == 0) {
            answerebox.value = "invalid input!";

        } else if (Number(user_value) < 0) {
            answerebox.value = "invalid input!";
        } else if (Number(user_value) > 0) {
            showbox.value = "Log(" + user_value + ")";
            answerebox.value = String(Math.log10(Number(user_value)));
        }
    } else if (id == "ten") {

        showbox.value = "10^" + user_value + "=";
        answerebox.value = String(10 ** Number(user_value));

    } else if (id == "root") {
        showbox.value = "Root(" + user_value + ")";
        answerebox.value = String(Math.sqrt(Number(user_value)));
    } else if (id == "onebyx") {
        showbox.value = "1/" + user_value;
        answerebox.value = eval("1/" + user_value);
    } else if (id == "square") {
        showbox.value = "square(" + user_value + ")";
        answerebox.value = String(Math.pow(Number(user_value), 2));
        console.log(Math.pow(Number(user_value), 2));
    } else if (id == "cube") {
        showbox.value = "cube(" + user_value + ")";
        answerebox.value = String(Math.pow(Number(user_value), 3));

    } else if (id == "abs") {
        if (answerebox.value == "") {
            user_value = showbox.value;
        }
        showbox.value = "abs(" + user_value + ")";
        answerebox.value = String(Math.abs(Number(user_value)));

    } else if (id == "fe" || id == "exp") {
        if (user_value == "") {

            answerebox.value = "0.e+0";
        } else {

            answerebox.value = user_value + ".e+0";
        }
        let str = answerebox.value;
        expvalue = str.slice(0, -1);


    } else if (id == "cube-root") {
        showbox.value = "cube-root(" + user_value + ")";
        answerebox.value = String(Math.cbrt(Number(user_value)));

    } else if (id == "yrootx") {
        showbox.value = "cube-root(" + user_value + ")";
        answerebox.value = String(Math.cbrt(Number(user_value)));

    } else if (id == "2x") {
        showbox.value = "2<sup>" + user_value + "</sup>";
        answerebox.value = String(Math.pow(2, Number(user_value)));

    } else if (id == "logyx") {
        showbox.value = "cube-root(" + user_value + ")";
        answerebox.value = String(Math.cbrt(Number(user_value)));

    } else if (id == "ex") {
        showbox.value = "e<sup>" + user_value + "</sup>";
        answerebox.value = String(Math.pow(Math.E, Number(user_value)));

    }


}



//bracket function
function bodmas(id: string) {

    if (id == "open-brace") {
        if (textcounter == 1) {
            clearscr("clrans");
            textcounter = 0;
        }
        if (rcount == 0 && lcount == 0) {
            if (fcount == 1) {
                answerebox.value += "*(";
                fcount = 0;
            } else {
                answerebox.value += "(";
            }

        } else {
            answerebox.value += "(";
        }


        rcount++;
    }

    if (id == "close-brace" && rcount > 0) {

        let data = answerebox.value;
        let datalenght = data.length;
        if (data[datalenght - 1] === "(") {
            if (rcount == 1) {
                answerebox.value += "0)*";
                fcount = 0;
            } else {

                answerebox.value += "0)";
                temp = 1;

            }
        } else {
            if (temp == 1 && rcount == 1) {

                answerebox.value += ")*";
                temp = 0;
                fcount = 0;
            } else {
                answerebox.value += ")";

                fcount = 1;
            }

        }

        rcount--;
        lcount++;

        if (rcount == 0) {
            lcount = 0;

        }

    }

    if (rcount > 1) {
        signcounter = 1;
    }
}
let change = 0;
let changecol = 0;
//function for degree, function btn, trignomarty value change
function degree(id: string) {
    let btnvalue = document.getElementById(id);
    if (id == "deg") {
        if (btnvalue!.innerText == "DEG") {
            btnvalue!.innerText = "RAD";
        } else if (btnvalue!.innerText == "RAD") {
            btnvalue!.innerText = "GRAD";
        } else if (btnvalue!.innerText == "GRAD") {
            btnvalue!.innerText = "DEG";
        }

    } else if (id == "change") {
        if (change == 0) {
            document.getElementById("sine")!.innerHTML = "sin<sup>-1</sup>";
            document.getElementById("sine")!.id = "sinin";
            document.getElementById("coas")!.innerHTML = "cos<sup>-1</sup>";
            document.getElementById("coas")!.id = "cosin";
            document.getElementById("tenn")!.innerHTML = "ten<sup>-1</sup>";
            document.getElementById("tenn")!.id = "tenin";
            document.getElementById("seec")!.innerHTML = "sec<sup>-1</sup>";
            document.getElementById("seec")!.id = "secin";
            document.getElementById("cssc")!.innerHTML = "sct<sup>-1</sup>";
            document.getElementById("cssc")!.id = "sctin";
            document.getElementById("coot")!.innerHTML = "cot<sup>-1</sup>";
            document.getElementById("coot")!.id = "cotin";
        } else if (change == 1) {
            document.getElementById("sinin")!.id = "sine";
            document.getElementById("sine")!.innerHTML = "sin";
            document.getElementById("cosin")!.id = "coas";
            document.getElementById("coas")!.innerHTML = "cos";
            document.getElementById("tenin")!.id = "tenn";
            document.getElementById("tenn")!.innerHTML = "ten";
            document.getElementById("secin")!.id = "seec";
            document.getElementById("seec")!.innerHTML = "sec";
            document.getElementById("sctin")!.id = "cssc";
            document.getElementById("cssc")!.innerHTML = "sct";
            document.getElementById("cotin")!.id = "coot";
            document.getElementById("coot")!.innerHTML = "cot";


        }
        if (change == 1) {
            change = 0;
        } else if (change == 0) {
            change = 1;
        }

    } else if (id == "2nd") {
        if (changecol == 0) {
            document.getElementById("square")!.innerHTML = "x<sup>3</sup>";
            document.getElementById("square")!.id = "cube";
            document.getElementById("root")!.innerHTML = "3<i class='fa-sharp fa-solid fa-square-root-variable'></i>";
            document.getElementById("root")!.id = "cube-root";
            document.getElementById("power")!.innerHTML = "y<i class='fa-sharp fa-solid fa-square-root-variable'></i>";
            document.getElementById("power")!.id = "yrootx";
            document.getElementById("ten")!.innerHTML = "2<sup>x</sup>";
            document.getElementById("ten")!.id = "2x";
            document.getElementById("log")!.innerHTML = "log<sub>y</sub><sup>x</sup>";
            document.getElementById("log")!.id = "logyx";
            document.getElementById("ln")!.innerHTML = "e<sup>x</sup>";
            document.getElementById("ln")!.id = "ex";
        } else if (changecol == 1) {
            document.getElementById("cube")!.id = "square";
            document.getElementById("square")!.innerHTML = "x<sup>2</sup>";
            document.getElementById("cube-root")!.id = "root";
            document.getElementById("root")!.innerHTML = "2<i class='fa-sharp fa-solid fa-square-root-variable'></i>";
            document.getElementById("yrootx")!.id = "power";
            document.getElementById("power")!.innerHTML = "x<sup>y</sup>";
            document.getElementById("2x")!.id = "ten";
            document.getElementById("ten")!.innerHTML = "10<sup>x</sup>";
            document.getElementById("logyx")!.id = "log";
            document.getElementById("log")!.innerHTML = "log";
            document.getElementById("ex")!.id = "ln";
            document.getElementById("ln")!.innerHTML = "ln";
        }
        if (changecol == 1) {
            changecol = 0;
        } else if (changecol == 0) {
            changecol = 1;
        }

    }
}

//function for mc,mr,...
function memory(id: string) {
    console.log(memory_array.length);
    if (id == "mc") {
        while (memory_array.length > 0) {
            memory_array.pop();
            arr_sum = 0;
        }

        localStorage.setItem("data", JSON.stringify(memory_array));
    } else if (id == "mr") {
        if (answerebox.value != "") {
            answerebox.value = "";

        }
        if (memory_array.length == 0) {
            answerebox.value = "0";
        } else {
            answerebox.value += memory_array[memory_array.length - 1];
        }

        signcounter = 1;
    } else if (id == "m+") {

        arr_sum += Number(answerebox.value);
        if (memory_array.length == 0) {
            memory_array[memory_array.length] = arr_sum;
        }
        else {
            memory_array[memory_array.length - 1] = arr_sum;
        }

        localStorage.setItem("data", JSON.stringify(memory_array));


    } else if (id == "m-") {

        arr_sum -= Number(answerebox.value);
        if (memory_array.length == 0) {
            memory_array[memory_array.length] = arr_sum;
        }
        else {
            memory_array[memory_array.length - 1] = arr_sum;
        }
        localStorage.setItem("data", JSON.stringify(memory_array));

    } else if (id == "ms") {
        if (answerebox.value == "") {
            memory_array.push(0);
            localStorage.setItem("data", JSON.stringify(memory_array));
        } else {
            memory_array.push(Number(answerebox.value));
            localStorage.setItem("data", JSON.stringify(memory_array));
        }


    }
    console.log("available data in memory := " + memory_array);
}
//operation for trignomatry
function trignomarty(id: String) {

    signcounter = 1;
    afteror = 1;
    let user_value = answerebox.value;
    if (id == "sine") {

        showbox.value = "sin(" + user_value + ")";
        answerebox.value = String(Math.sin(Number(user_value)));
        console.log("sine calling");
    } else if (id == "coas") {
        showbox.value = "cos(" + user_value + ")";
        answerebox.value = String(Math.cos(Number(user_value)));
    } else if (id == "tenn") {
        showbox.value = "tan(" + user_value + ")";
        answerebox.value = String(Math.tan(Number(user_value)));
    } else if (id == "seec") {
        showbox.value = "sec(" + user_value + ")";
        answerebox.value = String(Math.cos(1/Number(user_value)));
    } else if (id == "coot") {
        showbox.value = "cot(" + user_value + ")";
        answerebox.value = String(Math.tan(1/Number(user_value)));
    } else if (id == "sinin") {
        showbox.value = "asin(" + user_value + ")";
        answerebox.value = String(Math.asin(Number(user_value)));
    } else if (id == "cosin") {
        showbox.value = "acos(" + user_value + ")";
        answerebox.value = String(Math.acos(Number(user_value)));
    } else if (id == "tenin") {
        showbox.value = "atan(" + user_value + ")";
        answerebox.value = String(Math.atan(Number(user_value)));
    } else if (id == "secin") {
        showbox.value = "asec(" + user_value + ")";
        answerebox.value = String(Math.acos(1/Number(user_value)));
    } else if (id == "cotin") {
        showbox.value = "acot(" + user_value + ")";
        answerebox.value = String(Math.atan(1/Number(user_value)));
    } else if (id == "floor") {
        showbox.value = "Floor(" + user_value + ")";
        answerebox.value = String(Math.floor(Number(user_value)));
    } else if (id == "round") {
        showbox.value = "round(" + user_value + ")";
        answerebox.value = String(Math.round(Number(user_value)));
    } else if (id == "ceiling") {
        showbox.value = "ceiling(" + user_value + ")";
        answerebox.value = String(Math.ceil(Number(user_value)));
    } else if (id == "randd") {
        answerebox.value = String(Math.random());
        signcounter = 1;
        textcounter = 0;
        equalcounter = 0;
    } else if (id == "dms") {
        //showbox.value = Math.random();
        //answerebox.value = Math.ceil(user_value);
    } else if (id == "deg") {
        showbox.value = "deg(" + user_value + ")";
        answerebox.value = eval(String((Number(user_value) * 180 / Math.PI)));
    }

}
