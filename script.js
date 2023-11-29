function salary (){
    const wage = prompt ("Zadejte svou hrubou mzdu za hodinu v Kč:");
    const hours = prompt ("Zadejte počet průměrně odpracovaných hodin za den:")
    const days = prompt ("Zadejte počet průměrně odpracovaných dní v měsíci:")
}

document.body.innerHTML = "<p> Vaše hrubá mzda je: " + wage * hours * days + " Kč" + "</p>"