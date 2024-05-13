Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

Analizzando la consegna, procedo di conseguenza:
Mi servirà un contatore che produca i numero da 1 a 100, e ho intenzione di utilizzare un ciclo for per farlo.
aggiungerò poi un console.log, per provare il contatore, una volta scritto un contatore funzionante, passso alle condizioni di divisibilità:
mi basteranno 3 condizioni di controllo, per verificare che:
se il numero è divisibile per 3 e 5, stamperà fizzbuzz,
se il numero è divisibile per 3 : stamperà fizz ,
se il numero è divisibile per 5 stamperà buzz .
<!-- ----------Bonus 1---------  -->
Procediamo con i bonus, allora il primo ci chiede innanzitutto di creare un container nel dom, quindi procediamo così,
una volta creato, creo degli article per poter creare la classe, la provo, e poi elimino l'article dal doom 
 sicuro della classe che andrà poi applicata ai numeri,
procedo richiamando l'elemento container in una costante che sarà il container,
poi creo un'altra variabile, che corrisponderà al contatore, ovviamente la variabile in questione sarà creata fuori dallo scope,
 e verrà poi assegnata all'interno dello stesso in base al contenuto.
 poi creiamo una nuova costante, che creerà il nuovo elemento all'interno del dom, 
 infine utilizziamo la funzione append per inserire i box,
 e riulizziamo append per inserire le stringhe all'interno dei box.
 <!-- -------------------------Bonus 2---------------------- -->
 Per il secondo bonus, bisogna differenziarli:
 per farlo basta creare i box prima degli if, così possiamo assegnargli una classe differente in base all'if in cui entra.
 procediamo con il creare le 3 classi, e le inseriamo all'interno degli if con la funzione .classlist.add.

