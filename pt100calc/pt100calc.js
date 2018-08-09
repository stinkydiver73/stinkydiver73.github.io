import { pt100temp } from './rtd.js';

document.getElementById("gomb").addEventListener("click",
function () {
    console.log("clicked")
    let imp = document.getElementById("ohm").value
    let szam = parseFloat(imp)
    console.log(szam)
    document.getElementById("calc").innerHTML = pt100temp(szam).toFixed(1)+"&#8451;"
});
