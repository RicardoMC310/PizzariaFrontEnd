const FORM = document.querySelector("form");
const INPUTNAME = document.querySelector("#input-name");
const INPUTING = document.querySelector("#input-ingredientes");

FORM.onsubmit = async (event) => {
    event.preventDefault();

    if (INPUTNAME.value.trim() === "" || INPUTING.value.trim() === "") {
        INPUTNAME.value = "";
        INPUTING.value = "";

        alert("os dados precisam ser passados");
        return;
    }

    FORM.style.display = "none";

    const ing = INPUTING.value.split(",").map(item => item.trim());

    const request = await fetch("https://pizzaria-4cyt.onrender.com/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: INPUTNAME.value,
            igredientes: ing
        })
    });

    const json = await request.json();

    console.log(json);

    INPUTNAME.value = "";
    INPUTING.value = "";

    FORM.style.display = "flex";
}
