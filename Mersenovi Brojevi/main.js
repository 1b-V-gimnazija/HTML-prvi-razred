function getNumber () {
    let odlomak = document.getElementById("broj")
    let unos = document.getElementById("n").value
    let broj = (2 ** unos) - 1
    

    odlomak.innerHTML = `Traženi Mersenneov brojev je: ${broj}.`
}