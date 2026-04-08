
// Recupero i valori passati con GET
// Per farlo creo una variabile cui assegno come valore
// il risultato della funzione vista in precedenza
var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "sito"
var b1 = get['b1'];
if (b1 == null){b1="0"}
var b2 = get['b2'];
if (b2 == null){b2="0"}
var b3 = get['b3'];
if (b3 == null){b3="0"}
var b4 = get['b4'];
if (b4 == null){b4="0"}


var r1 = get['r1'];
if (r1 == null){r1="0"}
var r2 = get['r2'];
if (r2 == null){r2="0"}
var r3 = get['r3'];
if (r3 == null){r3="0"}
var r4 = get['r4'];
if (r4 == null){r4="0"}
var r5 = get['r5'];
if (r5 == null){r5="0"}
var r6 = get['r6'];
if (r6 == null){r6="0"}
var r7 = get['r7'];
if (r7 == null){r7="0"}
var r8 = get['r8'];
if (r8 == null){r8="0"}
var r9 = get['r9'];
if (r9 == null){r9="0"}
var r10 = get['r10'];
if (r10 == null){r10="0"}
var r11 = get['r11'];
if (r11 == null){r11="0"}
var r12 = get['r12'];
if (r12 == null){r12="0"}
var r13 = get['r13'];
if (r13 == null){r13="0"}
var r14 = get['r14'];
if (r14 == null){r14="0"}
var r15 = get['r15'];
if (r15 == null){r15="0"}


// se non solo canonico (certificato contestuale)
if (b2!="2"){
//document.write("    Certificato contestuale in carta libera per uso matrimonio<br>");
document.write("<br> - Alcuni Comuni esigono una richiesta scritta del certificato contestuale da parte del parroco. In mancanza di questa rilasceranno il medesimo certificato solo al pagamento dell'imposta di bollo.");
document.write("  <a href=\"moduli/Richiesta_certificato_contestuale.pdf\" target=\"_blank\"> Modello per richiesta Certificato contestuale </a>");
}


// LUOGO DI CELEBRAZIONE
switch(b1) {
  
  case "0":
document.write(" <br>");
  break; 

  case "1":
document.write(" <br>");
  break; 
  
  case "2":
document.write(" <br>");
  break; 

  case "3":
document.write(" <br><br> <strong> MATRIMONIO DA CELEBRARSI IN ALTRA DIOCESI:</strong> ")
document.write("   <br> - Il parroco competente, raccolta la documentazione necessaria, proceda normalmente inviando il tutto all'ufficio matrimoni diocesano e allegando la licenza ad altro Parroco (Mod XIII).")
document.write("   <br> - Ottenuto il visto si richieda il debito Nulla Osta presso la curia diocesana del luogo di celebrazione.")
document.write(" <br>");
  break; 

  case "4":
document.write(" <br><br> <strong> MATRIMONIO DI ITALIANI ALL'ESTERO:</strong> ")
document.write("   <br> - Il parroco competente per l'istrittoria è quello del domicilio canonico di uno dei nubendi il quale conserverà una copia di tutta la documentazione inviata all'ufficio matrimoni diocesano.")
document.write("   <br> - Come principio generale attenersi alla legge in vigore nel paese estero di celebrazione.")
document.write("   <br> - Si sconsiglia di separare il rito religioso da quello civile, a meno che l'Ordinario non giudichi opportuno procedere diversamente per serie ragioni pastorali. In tal caso sarà necessario richiedere la debita licenza per la celebrazione del matrimonio canonico dopo il civile.")
document.write(" <br>");

break; 

//  default:
    //istruzioni
}


//--------------------------------- LICENZE E DISPENSE ----------------------------------------

if (b4=="si"){
document.write(" <br><br> <strong> RICHIESTA DI DISPENSA DALLE PUBBLICAZIONI CANONICHE:</strong> ")
document.write("   <br> - Per questo matrimonio si richiede la dispensa dalle pubblicazioni canoniche")
document.write(" <br> - Per la concessione della dispenza occorre una \"giusta causa\" Es. i nubendi convivono e sono ritenuti già legittimamente sposati; sono anziani e intendono evitare dicerie; hanno urgenza di contrarre matrimonio.");
document.write(" <br> - Si alleghi, se necessario, la documentazione inerente al caso la quale attesti la situazione dei nubendi e che nulla osti alla celebrazione.");
}
if (b3=="1"){
document.write(" <br><br> <strong> MATRIMONIO DA CELEBRARSI PRIMA DELLA RICHIESTA DEL NULLA OSTA CIVILE:</strong> ")
document.write("  <br>  - Si tratta di un matrimonio concordatario che sarà celebrato prima che l’Ufficiale di Stato civile abbia rilasciato l'attestato di eseguite pubblicazioni civili (\"nulla osta\") poiché le pubblicazioni sono ancora in corso.");
document.write("<br> - Si tenga conto della necessità di celebrare il matrimonio nel territorio del Comune in cui sono state iniziate le pratiche civili per evitare difficoltà di trascrizione. <br> - È opportuno che alla domanda si alleghi una dichiarazione dell’Ufficiale di Stato civile, che attesti l’inizio e le date delle pubblicazioni civili.")
document.write("<br> - Il parroco proceda non appena possibile alla trascrizione tardiva del matrimonio al civile allegando una copia della Licenza concessa dall'Ordinario.")
}
if (b3=="2"){
document.write(" <br><br> <strong> MATRIMONIO DA CELEBRARSI SENZA LA RICHIESTA DEL NULLA OSTA CIVILE:</strong> ")
document.write("<br> - Il matrimonio precede la richiesta del nulla osta civile per vari motivi (ad esempio per l’impossibilità di reperire tempestivamente i documenti civili e l’urgenza del matrimonio per impegni improrogabili; le difficoltà connesse con l’età avanzata dei nubendi o il loro stato di salute, ecc.)")
document.write("<br> - Si tenga conto della necessità di celebrare il matrimonio nel territorio del Comune in cui sono state iniziate le pratiche civili per evitare difficoltà di trascrizione.")
document.write("<br> - Il parroco proceda non appena possibile alla trascrizione tardiva del matrimonio al civile allegando una copia della Licenza concessa dall'Ordinario.")

}
if (b2=="2"){
document.write(" <br><br> <strong> MATRIMONIO SOLO CANONICO:</strong> ")
document.write("  <br>  - Il modulo Num. 04 riguarda il matrimonio canonico che di diritto può essere fatto trascrivere in seguito dai contraenti (cfr. Decreto generale, 40-42).")
document.write("<br> - Indicare la motivazione addotta dai contraenti. Ad esempio, quella ricorrente nel caso di vedovi di conservare con lo stato civile il diritto alla pensione del coniuge defunto.")
document.write("<br> - Se si tratta di persone anziane e veramente bisognose, descrivere la condizione di vita di entrambi precisando gli aspetti: personale (se vivono da soli e con altri); familiare (se hanno persone a carico, o se sono assistiti dai figli); economico-patrimoniale (se sono benestanti o bisognosi di aiuto). Se invece si tratta di persone non anziane, ma in situazione di emergenza, descrivere la difficoltà del caso e le conseguenze negative della trascrizione del matrimonio agli effetti civili.")
document.write("<br> - Se i nubendi non sono della stessa parrocchia, è necessario chiedere il parere dell’altro parroco e allegare la sua attestazione nel merito. Così pure occorre la testimonianza scritta del cappellano quando lo sposo è militare che a norma di legge civile non può contrarre matrimonio (cfr. Decreto generale, n41).");
document.write("<br> - Durante la celebrazione si leggano gli articoli del Codice Civile al fine di favorire le condizioni di un'eventuale trascirizione tardiva del matrimonio civile.");
document.write("<br> - Si faccia presente che qualora la trascrizione avvenisse dopo la nascita di un figlio, questi risulterebbe illegittimo per la legge civile.");
}
if (b3!="0"){
document.write(" <br><br> <strong> TRASCRIZIONE TARDIVA DEL MATRIMONIO:</strong> ")
document.write(" <br> -  Si ricorre alla trascrizione tardiva del matrimonio quando gli interessati hanno celebrato il matrimonio canonico senza aver fatto richiesta di pubblicazioni civili oppure quando sono trascorsi i 5 giorni prescritti per la trascrizione del matrimonio al civile (cfr. art. 8 dell'accordo di revisione del Concordato Lateranense).<br>");
}
if (b2=="1"){
document.write(" <br><br> <strong> MATRIMONIO CANONICO NON TRASCRIVIBILE AL CIVILE:</strong> ")
document.write(" <br> -  I nubendi non possono contrarre matrimonio civile né ottenere il riconoscimento agli effetti civili del matrimonio canonico")
document.write(" <br> -  Nella fattispecie ci si riferisce ai casi in cui non esiste impedimento canonico, ma esiste un divieto civile non dispensabile: <li>matrimonio di persona civilmente interdetta (cfr. Decreto generale, 38); </li><li>matrimonio di persona cattolica sposata civilmente, separata e in attesa di divorzio (cfr. Decreto generale, 44); </li><li>matrimonio di persona religiosamente libera a seguito di sentenza di nullità o dispensa (ib.).</li>");
document.write(" <br> -  Le cause che giustificano la licenza dovranno essere tanto più gravi quanto maggiore è il rischio che il consenso matrimoniale non sia valido.")
}
if (b2=="3"){
document.write(" <br><br> <strong> MATRIMONIO CANONICO DOPO IL CIVILE:</strong> ")
document.write(" <br> - Questo matrimonio è già stato trascritto al civile, quindi non è necessario compilare la copia dell'atto di matrimonio da trasmettere al Comune, né leggere agli sposi gli articoli del codice civile durante la celebrazione.");
document.write("<br> - È bene che i nubendi siano invitati a rivolgere personalmente la domanda all’Ordinario diocesano esponendo le circostanze che hanno determinato in precedenza la scelta del matrimonio civile. Dal canto suo il parroco sarà più attento con coloro che domandano il matrimonio religioso per motivazioni estranee a un cammino di fede, ma unicamente per ragioni di convenienza sociale.")
document.write("<br> - Si valuti l'opportunità di eseguire o meno le pubblicazioni canoniche richiedendo, nel caso, la debita dispensa.")
}
if (r2!="0"){
document.write(" <br><br> <strong> MATRIMONIO DI DIVORZIATI:</strong> ")
document.write(" <br> ")
		if(r2=="lui"){document.write(" - Il Fidanzato ha contratto un precedente matrimonio civile ed ha ottenuto il divorzio.")}
		else if(r2=="lei"){document.write(" - La Fidanzata ha contratto un precedente matrimonio civile ed ha ottenuto il divorzio.")} 
		else {document.write(" - Entrambi i nubendi hanno contratto un precedente matrimonio civile ed hanno ottenuto il divorzio.")}
document.write("<br> - Si espongano al Vescovo per iscritto le motivazioni che hanno spinto a compiere la prima scelta e a chiedere ora il matrimonio-sacramento. ");
document.write("<br> - Contestualmente l’Ordinario verificherà se il precedente matrimonio sia stato celebrato solo civilmente, visionando la <strong>sentenza definitiva di divorzio</strong> allegata.")
document.write("<br> - Ci si assicuri che entrambi i nubendi non rifiutino gli impegni derivanti dalla precedente unione civile, in particolare per quanto riguarda l'educazione dei figli.");

}
if (r12!="0"){
document.write(" <br><br> <strong> MATRIMONIO DI CHI &Egrave; IRRETITO DA CENSURA:</strong> ")
document.write(" <br> - Si tratta solo del caso in cui al Parroco risulti in foro esterno che una persona è incorsa nella censura (es. scomunica) e se non è stato possibile ottenere la riconciliazione.");
		if(r12=="lui"){document.write(" Nella fattispecie si tratta del Fidanzato.<br>")}
		else if(r12=="lei"){document.write(" Nella fattispecie si tratta della Fidanzata.<br>")} 
document.write(" - L'Ordinario procederà a norma dei cann. 1345-1363 oppure a norma del can. 1071 § 1,5°.")		
		//else {document.write(" (Entrambi)</a><br>")}

}
if (r9!="0"){
document.write(" <br><br> <strong> MATRIMONIO DI CHI HA NOTORIAMENTE ABBANDONATO LA FEDE CATTOLICA:</strong> ")
document.write(" <br> - Si tratta del caso di matrimonio tra una persona cattolica credente e un’altra battezzata nella Chiesa cattolica, ma che ha <i>notoriamente</i> abbandonato la fede.")
document.write(" <br> - In concreto non è facile riconoscere il configurarsi della fattispecie del notorio abbandono della fede. Molte persone, anche se dichiarano di non riconoscersi più come credenti, non danno segni pubblici chiari e inequivocabili di abbandono della fede. È bene, tuttavia, che il parroco nel dubbio ricorra all’Ordinario del luogo, il quale valuterà, caso per caso, se sia necessario esigere la procedura, di cui al c. 1071 §2. (cfr. Decreto generale, 43.)");
document.write(" <br> - Il Parroco si accerti che nessuno dei contraendi escluda le proprietà essenziali del matrimonio. ")
}
if (r5!="0"){
document.write(" <br><br> <strong> MATRIMONIO DI MINORENNI:</strong> ")
		if(r5=="lui"){document.write("<br> - Per la validità del matrimonio il Fidanzato deve aver compiuto il sedicesimo anno di età.")}
		else if(r5=="lei"){document.write("<br> -  Per la validità del matrimonio la Fidanzata deve aver compiuto il quattordicesimo anno di età.")} 
		else {document.write(" Per la validità del matrimonio il Fidanzato deve aver compiuto il sedicesimo anno di età e la Fidanzata il quattordicesimo anno di età.")}
document.write("<br> - Se i contraenti non hanno compiuto l'età minima richiesta per la validità (16 anni lui e 14 lei) occorre la <i>Dispensa</i> dell'Ordinario del Luogo.")
document.write(" <br> - Se almeno uno dei contraenti non ha compiuto il 16° anno di età il matrimonio è trascrivibile al civile previa autorizzazione del Tribunale dei minori. ")
document.write(" <br> - La dispensa può essere concessa solo per ragioni gravissime! ")
document.write(" <br> - Per la liceità del matrimonio l'età minima richiesta è di 18 anni compiuti. In caso contrario occorre la <i>Licenza</i> dell'Ordinario del Luogo.");
document.write(" <br> - In ogni caso si ottenga l'autorizzazione a procedere da parte del Tribunale dei minori.");


}
if (r11!="0"){
	document.write(" <br><br> <strong> MATRIMONIO TRA UNA PERSONA CATTOLICA E UNA BATTEZZATA NON CATTOLICA:</strong> ")
document.write("<br> - Si tratta di un matrimonio detto \"misto\" (o \"interconfessionale\"), tra cristiani: can. 1124-1125 C.J.C.")
document.write("<br> - Sono validi i Battesimi degli Ortodossi, Anglicani, Metodisti, Valdesi, Battisti, Luterani, e in genere quelli amministrati nel nome della SS. Trinità (cfr Ad Te, 13 a); non sono validi i battesimi dei Testimoni di Geova e dei Mormoni. ")
document.write("<br> - La parte contraente cattolica sottoscriva la dichiarazione di essere pronta ad allontanare i pericoli di abbandonare la fede e la promessa di fare quanto è in suo potere perché tutti i figli siano battezzati ed educati nella Chiesa cattolica (mod. 11)")
document.write(" <br> - Non è consentita la celebrazione della S. Messa. Solo per gravi motivi pastorali si potrà richiedere l’autorizzazione all’Ordinario. ");
document.write(" <br> - Il Parroco si accerti che nessuno dei contraendi escluda le proprietà essenziali del matrimonio e che entrambi siano di stato libero. ")
document.write(" <br> - L'eventuale celebrazione del matrimonio nella Chiesa o Comunità non cattolica richiede la Dispensa dalla forma canonica (pena l'invalidità), che sarà concessa solo in caso di gravi difficoltà a celebrare il matrimonio secondo la forma canonica. In ogni caso si richieda l'autorizzazione all'Ordinario del luogo di celebrazione e ci si assicuri che il celebrante sia un legittimo ministro di culto.")
}
if (r10!="0"){
	document.write(" <br><br> <strong> MATRIMONIO TRA UNA PERSONA CATTOLICA E UNA NON BATTEZZATA:</strong> ")
document.write("<br> - Si tratta di un matrimonio detto \"interreligioso\" (o \"di disparità di culto\").")
document.write("<br> - La parte contraente cattolica sottoscriva la dichiarazione di essere pronta ad allontanare i pericoli di abbandonare la fede e la promessa di fare quanto è in suo potere perché tutti i figli siano battezzati ed educati nella Chiesa cattolica (mod. 11)")
document.write(" <br> - Il Parroco si accerti che nessuno dei contraendi escluda le proprietà essenziali del matrimonio e che entrambi siano di stato libero. ")
document.write(" <br> - Per la celebrazione del matrimonio ci si attenga a quanto previso da Rito del Matrimonio al capitolo riguardante il matrimonio in questione.")
document.write(" <br> - Non è consentita la celebrazione della S. Messa. Solo per gravi motivi pastorali si potrà richiedere l’autorizzazione all’Ordinario. ");

}
if (r7!="0"){
	document.write(" <br><br> <strong> MATRIMONIO TRA PERSONE CONSENGUINEE:</strong> ")
document.write(" <br> - La consanguineità in linea retta (padre-figlio-nipote) rende nullo il matrimonio. ")
document.write(" <br> - La consanguineità in linea collaterale nel 2° grado (fratello-sorella) rende nullo il matrimonio. ")
document.write(" <br> - La consanguineità in linea collaterale nel 3° grado (zio-nipote) e nel 4° grado (primi cugini) è un impedimento che può essere dispensato. ")
document.write(" <br> - La consanguineità in linea collaterale oltre il 4° grado non costituisce impedimento. ")
}

if (r8=="si"){
	document.write(" <br><br> <strong> MATRIMONIO DI GIROVAGHI:</strong> ")
document.write("<br> -  Il Parroco proprio dei girovaghi è il Parroco del luogo in cui essi dimorano di fatto (can. 107, 3 C.J.C.).") 
document.write("<br> - L’istruttoria matrimoniale non deve iniziarsi senza la licenza dell’Ordinario (can. 1071, 1). ")
document.write("<br> - Poiché la legge civile non contempla il caso dei girovaghi in quanto ritiene inconcepibile la coesistenza di un individuo nella nazione senza che questi abbia una residenza anagrafica, a costoro si potrà consigliare di chiedere al Tribunale la dispensa dalle pubblicazioni civili (art. 94 CC.). Alla domanda di dispensa, oltre i documenti civili richiesti per il matrimonio, deve essere unito un atto di notorietà redatto davanti al Pretore e a due testimoni. Ottenuta la dispensa dalle pubblicazioni civili, non ci sarà difficoltà ad ottenere la trascrizione del matrimonio agli effetti civili. ")
}

// -------------------------- ALTRI DOCUMENTI ----------------------------------------------
document.write("<br>");




// STESSE CONDIZIONI DELLA RICHIESTA DI PUBBLICAZIONI CIVILI
// se NON: senza nulla osta civ, solo canonico non trascrivibile, sposati solo civilmente
if (b3 =="2"){
document.write("");
} else if (b2 =="1"){
document.write("");
} else if (b2 =="3"){
document.write("");
} else {
//document.write("    Attestato di eseguite pubblicazioni civili<br>");
}

if (b2 == "3") {
//document.write("    Certificato di matrimonio civile<br>");
//document.write("    Lettera dei nubendi all'Ordinario per matrimonio canonico dopo il civile<br>");
}

if (r2 != "0") {
//document.write("    Sentenza definitiva di divorzio civile");
//	document.write(" <br><br> <strong> MATRIMONIO DI DIVORZIATI:</strong> ")

//		if(r2=="lui"){document.write(" Il Fidanzato ha contratto precedente matrimonio civile e ha ottenuto il divorzio<br>")}
//		else if(r2=="lei"){document.write(" La Fidanzata ha contratto precedente matrimonio civile e ha ottenuto il divorzio<br>")} 
//		else {document.write(" Entrambi i nubendi hanno contratto precedente matrimonio civile e hanno ottenuto il divorzio<br>")}

}
else if (r4 != "0") {
//document.write("    Sentenza definitiva di divorzio civile");
//		if(r4=="lui"){document.write(" (Fidanzato)</a><br>")}
//		else if(r4=="lei"){document.write(" (Fidanzata)</a><br>")} 
//		else {document.write(" (Entrambi)</a><br>")}

}
if (r4 != "0") {
//	document.write("    Sentenza di nullit&agrave; o scioglimento di matrimonio");
document.write(" <br><br> <strong> MATRIMONIO DI PERSONE CHE HANNO OTTENUTO LA SENTENZA CANONICA DI NULLIT&Agrave; O SCIOGLIMENTO DI MATRIMONIO:</strong> ")

if(r4=="lui"){document.write("<br> -   IL Fidanzato ha ottenuto la sentenza canonica <strong>definitiva</strong> di nullità di matrimonio o lo scioglimento del vincolo.<br>")}
		else if(r4=="lei"){document.write("<br> -   La Fidanzata ha ottenuto la sentenza canonica <strong>definitiva</strong> di nullità di matrimonio<br>")} 
		else {document.write("<br> -   Entrambi i nubendi hanno ottenuto la sentenza canonica <strong>definitiva</strong> di nullità di matrimonio<br>")}
document.write("<BR>")
document.write(" a) DICHIARAZIONE DI NULLIT&Agrave; <BR> Coloro che hanno ottenuto la dichiarazione di nullità del precedente matrimonio, per contrarre un nuovo vincolo dovranno esibire, oltre ai regolari documenti, anche il «dispositivo» della dichiarazione di nullità per verificare l’esistenza o meno di <strong>divieti a passare a nuove nozze</strong>, ed ottenerne eventualmente la revoca da parte dell’Ordinario (art. 59 D.G.). Qualora la sentenza ecclesiastica non fosse ancora delibata in Italia gli sposi, per motivi gravi ed urgenti, potranno chiedere all’Ordinario l’autorizzazione per la celebrazione del matrimonio concordatario con trascrizione tardiva (art. 44, 4 D.G.) .<br>") 
document.write("Ottenuta la licenza i nubendi ricordino che la trascrizione può essere effettuata anche posteriormente su richiesta dei due contraenti od anche di uno di essi con la conoscenza e senza l’opposizione dell’altro, (art. 8 di Revisione dei Concordato e art. 44, 4 D.G.). <br>")

document.write("<BR>")
document.write("b) SCIOGLIMENTO DEL MATRIMONIO <BR>Coloro invece che hanno ottenuto la dispensa pontificia \"super rato et non consummato\" dovranno esibire il rescritto della Congregazione dei Sacramenti e il permesso di passare a nuove nozze. <br>")
document.write("Dopo la sentenza della Corte Costituzionale del 1983 la dispensa super rato e non consumato non può avere efficacia in Italia. Pertanto coloro che non hanno ancora sciolto il vincolo civile, dovranno celebrare distintamente il matrimonio canonico e il rito civile delle nozze. <br>")

}

 