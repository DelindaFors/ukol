function salary (){
    const wage = Number (prompt ("Zadejte svou hrubou mzdu za hodinu v Kč:"));
    const hours = Number (prompt ("Zadejte počet průměrně odpracovaných hodin za den:"));
    const days = Number (prompt ("Zadejte počet průměrně odpracovaných dní v měsíci:"));

    let hrubaMzda = wage * hours * days

    hrubaMzda = Math.ceil (hrubaMzda);

    document.body.innerHTML += `<p>Vaše hrubá mzda je: ${hrubaMzda} Kč.</p>`;
}

salary ()