
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

// stampo a video
//document.write("Il matrimonio sar&agrave; celebrato: b1= "+b1);
//document.write("<br>La tipologia del matrimonio &egrave;: b2= "+b2)
//document.write("<br>Circa il &quot;nulla osta&quot; civile:  b3= "+b3)
//document.write("<br>Si richiede la dispensa dalle pubblicazioni canoniche b4= "+b4)

//document.write("<hr>")

//document.write("<label>Ha dimorato in un'altra diocesi  r1= "+r1);
//document.write("<br>Ha ottenuto il divorzio r2= "+r2)
//document.write("<br>Separato/a in attesa di divorzio r3= "+r3)
//document.write("<br>Ha ottenuto la nullit&agrave; o lo scioglimento del matrimonio  r4= "+r4)
//document.write("<br>Minorenne r5= "+r5)
//document.write("<br>Vedovo/a r6= "+r6)
//document.write("<br>I nubendi sono  consanguinei r7= "+r7)
//document.write("<br>I nubendi sono girovaghi r8= "+r8)
//document.write("<br>Ha notoriamente abbandonato la fede cattolica r9= "+r9)
//document.write("<br>Non &egrave; battezzato/a  r10= "+r10)
//document.write("<br>Battezzato/a ma non cattolico/a  r11= "+r11)
//document.write("<br>Irretito/a da censura  r12= "+r12)
//document.write("<br>Dimora in un'altra parrocchia r13= "+r13)
//document.write("<br>Dimora in altra nazione  r14= "+r14)
//document.write("<br>Battezzati entrambi in questa parrocchia  r15= "+r15)

//document.write("<hr>")

/* ----- scrivi elenco moduli necessari --------------- */
document.write("	<a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#I\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod001-PosizioneMatrimoniale.pdf\" title =\" Contiene le domande da rivolgere ai fidanzati prima delle nozze per identificare la loro persona e garantire la validità e la liceità del matrimonio, verificando nei nubendi la libertà di stato, l’assenza di impedimenti e l’integrità del consenso (can. 1066 C.J.C.). \"  target=\"blank\">I -POSIZIONE MATRIMONIALE</a><br>")
/*se diverso da non battezzato*/
if (r10 != "lui") {
document.write("	<a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#II\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod002-CertificatoBattesimoCresimaMatrimonio.pdf \" title =\" La dichiarazione di Battesimo deve rilasciarsi per «uso matrimonio» e quindi con le eventuali annotazioni marginali. Per la validità, il documento non deve superare i sei mesi dall’emissione. \" target=\"blank\">II - CERTIFICATO DI BATTESIMO PER USO MATRIMONIO (Fidanzato)</a><br>");
}
if (r10 != "lei") {
document.write("	<a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#II\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod002-CertificatoBattesimoCresimaMatrimonio.pdf\" \" title =\" La dichiarazione di Battesimo deve rilasciarsi per «uso matrimonio» e quindi con le eventuali annotazioni marginali. Per la validità, il documento non deve superare i sei mesi dall’emissione.\" target=\"blank\">IIa - CERTIFICATO DI BATTESIMO PER USO MATRIMONIO (Fidanzata)</a><br>");
}
/*se diverso da non battezzato o da battezzato non cattolico*/
if (r10 != "lui" && r11 != "lui") {
		document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#III\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod003-CertificatoCresimaMatrimonio.pdf\" \" title =\" È una dichiarazione che rilascia il Parroco del luogo ove stata amministrata la Cresima. Può essere apposta. come nota marginale, nell’atto del Battesimo, qualora risulti trascritta nel relativo registro. Il certificato di Cresima può essere sostituito con una dichiarazione giurata da parte dell’interessato/a (can. 894 C.J.C.).\" target=\"blank\">III - CERTIFICATO DI CRESIMA PER USO MATRIMONIO (Fidanzato)</a><br>");
}
if (r10 != "lei" && r11 != "lei") {
		document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#III\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod003-CertificatoCresimaMatrimonio.pdf\" \" title =\" È una dichiarazione che rilascia il Parroco del luogo ove stata amministrata la Cresima. Può essere apposta. come nota marginale, nell’atto del Battesimo, qualora risulti trascritta nel relativo registro. Il certificato di Cresima può essere sostituito con una dichiarazione giurata da parte dell’interessato/a (can. 894 C.J.C.).\" target=\"blank\">IIIa - CERTIFICATO DI CRESIMA PER USO MATRIMONIO (Fidanzata)</a><br>");
}
/*se lui lei o entrambi sono vedovi*/
switch(r6) {
  
  case "lui":
		document.write("     <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#IV\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod004-CertificatoMorteDelConiuge.pdf\" \" title =\"Sulla base del registro dei defunti, conservato nell'ufficio parrocchiale, il Parroco pu&ograve; rilasciare il certificato di morte per una pratica di matrimonio solo canonico, in sostituzione del certificato rilasciato dal Comune. \" target=\"blank\">IV - CERTIFICATO DI MORTE DEL CONIUGE (Fidanzato)</a><br>");
  break; 

  case "lei":
		document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#IV\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod004-CertificatoMorteDelConiuge.pdf\" \" title =\" Sulla base del registro dei defunti, conservato nell'ufficio parrocchiale, il Parroco pu&ograve; rilasciare il certificato di morte per una pratica di matrimonio solo canonico, in sostituzione del certificato rilasciato dal Comune. \" target=\"blank\">IVa - CERTIFICATO DI MORTE DEL CONIUGE (Fidanzata)</a><br>");
  break; 
  
  case "entrambi":
		document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#IV\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod004-CertificatoMorteDelConiuge.pdf\" \" title =\" Sulla base del registro dei defunti, conservato nell'ufficio parrocchiale, il Parroco pu&ograve; rilasciare il certificato di morte per una pratica di matrimonio solo canonico, in sostituzione del certificato rilasciato dal Comune. \" target=\"blank\">IV - CERTIFICATO DI MORTE DEL CONIUGE (Fidanzato)</a><br>");
		document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#IV\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod004-CertificatoMorteDelConiuge.pdf\" \" title =\" Sulla base del registro dei defunti, conservato nell'ufficio parrocchiale, il Parroco pu&ograve; rilasciare il certificato di morte per una pratica di matrimonio solo canonico, in sostituzione del certificato rilasciato dal Comune. \" target=\"blank\">IVa - CERTIFICATO DI MORTE DEL CONIUGE (Fidanzata)</a><br>");
  break; 

 //  default:
    //istruzioni
}
//se celebraz altra diocesi o altra nazione o se ha dimorato in altra diocesi o nazione
// o non battezato o non cattolico

 if ((b1 ==3) || (b1==4) || (r1=="lui") || (r1=="entrambi") || (r10=="lui") || (r11=="lui") ||(r14=="lui")) {
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#V\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod005-ProvaTestimonialeStatoLibero.pdf\" \" title =\" &Egrave; il documento che redige il Parroco che istruisce la pratica quando il/la fidanzato/a, dopo il sedicesimo anno di et&agrave;, ha dimorato per pi&ugrave; di un anno in una Diocesi diversa da quella in cui ha il domicilio (art. 9 D.G.).\" target=\"blank\">V - PROVA TESTIMONIALE DI STATO LIBERO (Fidanzato)</a><br>");
 }// else {
//document.write(" nessuna prova testimoniale<br>")}
  if ((b1 ==3) || (b1==4) || (r1=="lei") || (r1=="entrambi") || (r10=="lei") || (r11=="lei") ||(r14=="lei")) {
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#V\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod005-ProvaTestimonialeStatoLibero.pdf\" \" title =\" &Egrave; il documento che redige il Parroco che istruisce la pratica quando il/la fidanzato/a, dopo il sedicesimo anno di et&agrave;, ha dimorato per pi&ugrave; di un anno in una Diocesi diversa da quella in cui ha il domicilio (art. 9 D.G.).\" target=\"blank\">Va - PROVA TESTIMONIALE DI STATO LIBERO (Fidanzata)</a><br>");
 }// else {
//document.write(" nessuna prova testimoniale<br>")}

//se minorenni r5=="lui" , r5=="lei" , r5=="entrambi"

switch(r5) {
  
  case "lui":
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VI\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod006-DichiarazioneNubendiMinorenni.pdf\" \" title =\" Il Parroco che istruisce la pratica, ai sensi del can. 1071, del C.J.C., deve allegare la presente dichiarazione dei genitori alla domanda rivolta al Vescovo per ottenere la licenza al matrimonio di un minore (art. 36-37 D.G.). \" target=\"blank\">VI - DICHIARAZIONE DEI GENITORI DEI NUBENDI MINORENNI (Fidanzato)</a><br>");
  break; 

  case "lei":
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VI\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod006-DichiarazioneNubendiMinorenni.pdf\" \" title =\" Il Parroco che istruisce la pratica, ai sensi del can. 1071, del C.J.C., deve allegare la presente dichiarazione dei genitori alla domanda rivolta al Vescovo per ottenere la licenza al matrimonio di un minore (art. 36-37 D.G.). \" target=\"blank\">VIa - DICHIARAZIONE DEI GENITORI DEI NUBENDI MINORENNI (Fidanzata)</a><br>");
  break; 
  
  case "entrambi":
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VI\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod006-DichiarazioneNubendiMinorenni.pdf\" \" title =\" Il Parroco che istruisce la pratica, ai sensi del can. 1071, del C.J.C., deve allegare la presente dichiarazione dei genitori alla domanda rivolta al Vescovo per ottenere la licenza al matrimonio di un minore (art. 36-37 D.G.). \" target=\"blank\">VI - DICHIARAZIONE DEI GENITORI DEI NUBENDI MINORENNI (Fidanzato)</a><br>");
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VI\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod006-DichiarazioneNubendiMinorenni.pdf\" \" title =\" Il Parroco che istruisce la pratica, ai sensi del can. 1071, del C.J.C., deve allegare la presente dichiarazione dei genitori alla domanda rivolta al Vescovo per ottenere la licenza al matrimonio di un minore (art. 36-37 D.G.). \" target=\"blank\">VIa - DICHIARAZIONE DEI GENITORI DEI NUBENDI MINORENNI (Fidanzata)</a><br>");
  break; 

//  default:
    //istruzioni
}
//se non è richiesta la dispensa...
 if (b4 == "0") {
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod007-PubblicazioniDiMatrimonio.pdf\" \" title =\" Il modulo contiene le generalità dei fidanzati e l’avvertimento ai fedeli di denunciare gli eventuali impedimenti canonici. È esposto per due Domeniche nella bacheca parrocchiale (e non per due giorni festivi). \" target=\"blank\">VII - PUBBLICAZIONI DI MATRIMONIO</a><br>");
 }
//se NON lui abbandono fede, dispensa pubblicazioni, lui batt_non_cattolico o non batt
//se lui dimora altra parr o altra diocesi o altra nazione
//
 if (r9 =="lui"){
//  document.write("abbandono fede<br> ")
  }
  else if (b4=="si"){
//  document.write("dispensa<br> ")
  }
  else if (r10=="lui"){
//  document.write("non cattolico<br>")
  }
  else if (r11=="lui"){
//  document.write("non battezzato<br>")
  }
  else if (r13=="lui"){
	 		document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod008-9-RichiestaPubblAltraParrocchia.pdf\" \" title =\" È la domanda con cui il Parroco che istruisce la pratica chiede che vengano eseguite le pubblicazioni in altra Parrocchia. La parte sottostante il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito. Le pubblicazioni devono effettuarsi nella Parrocchia del domicilio o del quasi domicilio o della dimora protratta per un mese di ciascuno dei nubendi. \" target=\"blank\">VIII - RICHIESTA DI PUBBLICAZIONI DA FARSI IN ALTRE PARROCCHIE (Fidanzato)</a><br>");
			document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod009-DichiarazioneAvvenutePubblicazioni.pdf\" \" title =\" Il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito.\" target=\"blank\">IX - DICHIARAZIONE DI AVVENUTE PUBBLICAZIONI (Fidanzato)</a><br>");
	}
  else if (r1=="lui") {
	 		document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod008-9-RichiestaPubblAltraParrocchia.pdf\" \" title =\" È la domanda con cui il Parroco che istruisce la pratica chiede che vengano eseguite le pubblicazioni in altra Parrocchia. La parte sottostante il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito. Le pubblicazioni devono effettuarsi nella Parrocchia del domicilio o del quasi domicilio o della dimora protratta per un mese di ciascuno dei nubendi. \" target=\"blank\">VIII - RICHIESTA DI PUBBLICAZIONI DA FARSI IN ALTRE PARROCCHIE (Fidanzato)</a><br>");
			document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod009-DichiarazioneAvvenutePubblicazioni.pdf\" \" title =\" Il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito.\" target=\"blank\">IX - DICHIARAZIONE DI AVVENUTE PUBBLICAZIONI (Fidanzato)</a><br>");
	}
  else if (r14=="lui"){
	 		document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod008-9-RichiestaPubblAltraParrocchia.pdf\" \" title =\" È la domanda con cui il Parroco che istruisce la pratica chiede che vengano eseguite le pubblicazioni in altra Parrocchia. La parte sottostante il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito. Le pubblicazioni devono effettuarsi nella Parrocchia del domicilio o del quasi domicilio o della dimora protratta per un mese di ciascuno dei nubendi. \" target=\"blank\">VIII - RICHIESTA DI PUBBLICAZIONI DA FARSI IN ALTRE PARROCCHIE (Fidanzato)</a><br>");
			document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod009-DichiarazioneAvvenutePubblicazioni.pdf\" \" title =\" Il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito.\" target=\"blank\">IX - DICHIARAZIONE DI AVVENUTE PUBBLICAZIONI (Fidanzato)</a><br>");
	}
//		   else {
//		document.write(" nessuna pubblicazione in altra parrocchia<br>")}
 
//se NON lei abbandono fede, dispensa pubblicazioni, lei batt_non_cattolica o non batt
//se lei dimora altra parr o altra diocesi o altra nazione
 if (r9 =="lei"){
//  document.write("abbandono fede<br> ")
  }
  else if (b4=="si"){
//  document.write("dispensa<br> ")
  }
  else if (r10=="lei"){
//  document.write("non cattolico<br>")
  }
  else if (r11=="lei"){
//  document.write("non battezzato<br>")
  }
  else if (r13=="lei"){
	 		document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod008-9-RichiestaPubblAltraParrocchia.pdf\" \" title =\" È la domanda con cui il Parroco che istruisce la pratica chiede che vengano eseguite le pubblicazioni in altra Parrocchia. La parte sottostante il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito. Le pubblicazioni devono effettuarsi nella Parrocchia del domicilio o del quasi domicilio o della dimora protratta per un mese di ciascuno dei nubendi. \" target=\"blank\">VIII - RICHIESTA DI PUBBLICAZIONI DA FARSI IN ALTRE PARROCCHIE (Fidanzata)</a><br>");
			document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod009-DichiarazioneAvvenutePubblicazioni.pdf\" \" title =\" Il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito.\" target=\"blank\">IX - DICHIARAZIONE DI AVVENUTE PUBBLICAZIONI (Fidanzata)</a><br>");
	}
  else if (r1=="lei") {
	 		document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod008-9-RichiestaPubblAltraParrocchia.pdf\" \" title =\" È la domanda con cui il Parroco che istruisce la pratica chiede che vengano eseguite le pubblicazioni in altra Parrocchia. La parte sottostante il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito. Le pubblicazioni devono effettuarsi nella Parrocchia del domicilio o del quasi domicilio o della dimora protratta per un mese di ciascuno dei nubendi. \" target=\"blank\">VIII - RICHIESTA DI PUBBLICAZIONI DA FARSI IN ALTRE PARROCCHIE (Fidanzata)</a><br>");
			document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod009-DichiarazioneAvvenutePubblicazioni.pdf\" \" title =\" Il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito.\" target=\"blank\">IX - DICHIARAZIONE DI AVVENUTE PUBBLICAZIONI (Fidanzata)</a><br>");
	}
  else if (r14=="lei"){
	 		document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod008-9-RichiestaPubblAltraParrocchia.pdf\" \" title =\" È la domanda con cui il Parroco che istruisce la pratica chiede che vengano eseguite le pubblicazioni in altra Parrocchia. La parte sottostante il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito. Le pubblicazioni devono effettuarsi nella Parrocchia del domicilio o del quasi domicilio o della dimora protratta per un mese di ciascuno dei nubendi. \" target=\"blank\">VIII - RICHIESTA DI PUBBLICAZIONI DA FARSI IN ALTRE PARROCCHIE (Fidanzata)</a><br>");
			document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#VIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod009-DichiarazioneAvvenutePubblicazioni.pdf\" \" title =\" Il modulo IX è l’attestato con cui il Parroco comunica le avvenute pubblicazioni ed il loro esito.\" target=\"blank\">IX - DICHIARAZIONE DI AVVENUTE PUBBLICAZIONI (Fidanzata)</a><br>");
	}
		//   else {
		//  document.write(" nessuna pubblicazione in altra parrocchia<br>")}

// se NON: senza nulla osta civ, solo canonico non trascrivibile, sposati solo civilmente
if (b3 =="2"){
document.write("");
} else if (b2 =="1"){
document.write("");
} else if (b2 =="3"){
document.write("");
} else {
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#X\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod010-RichiestaPubblicazioniCasaComunale.pdf\" \" title =\" La domanda, firmata dal Parroco, accompagna i documenti civili per la richiesta della pubblicazione da farsi in Comune da parte dei contraenti. \" target=\"blank\">X - RICHIESTA DI PUBBLICAZIONI DA FARSI ALLA CASA COMUNALE</a><br>");
}
//se uno dei due abbandono fede, non battezzato, non cattolico
if (r9 != "0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XI\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod011-DichiarazioniPerDomandaDiMatrimonioMisto.pdf\" \" title =\" È l’impegno sottoscritto dalla parte cattolica con cui promette di aderire pienamente alla fede cattolica e di fare quanto è in suo potere perché tutti i figli vengano battezzati ed educati cattolicamente. La parte non cattolica viene informata di questo impegno, ma non è tenuta alla firma. \" target=\"blank\">XI - DICHIARAZIONI PRESCRITTE NEI MATRIMONI MISTI</a><br>");
} else if (r10 != "0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XI\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod011-DichiarazioniPerDomandaDiMatrimonioMisto.pdf\" \" title =\" È l’impegno sottoscritto dalla parte cattolica con cui promette di aderire pienamente alla fede cattolica e di fare quanto è in suo potere perché tutti i figli vengano battezzati ed educati cattolicamente. La parte non cattolica viene informata di questo impegno, ma non è tenuta alla firma. \" target=\"blank\">XI - DICHIARAZIONI PRESCRITTE NEI MATRIMONI MISTI</a><br>");
} else if (r11 != "0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XI\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod011-DichiarazioniPerDomandaDiMatrimonioMisto.pdf\" \" title =\" È l’impegno sottoscritto dalla parte cattolica con cui promette di aderire pienamente alla fede cattolica e di fare quanto è in suo potere perché tutti i figli vengano battezzati ed educati cattolicamente. La parte non cattolica viene informata di questo impegno, ma non è tenuta alla firma. \" target=\"blank\">XI - DICHIARAZIONI PRESCRITTE NEI MATRIMONI MISTI</a><br>");
} //else {
//}

//se solo canonico o solo canonico non trascrivibile
if (b2 == "1") {
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod012-DichiarazionePreviaMatrimonioSoloCanonico.pdf\" \" title =\" La presente dichiarazione, sottoscritta dai contraenti davanti al Parroco e da lui controfirmata, si allega alla domanda rivolta al Vescovo per ottenere la licenza alla celebrazione di un matrimonio canonico. \" target=\"blank\">XII - DICHIARAZIONE PREVIA ALLA CELEBRAZIONE DEL MATRIMONIO SOLO CANONICO</a><br>");
} else if (b2 == "2") {
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod012-DichiarazionePreviaMatrimonioSoloCanonico.pdf\" \" title =\" La presente dichiarazione, sottoscritta dai contraenti davanti al Parroco e da lui controfirmata, si allega alla domanda rivolta al Vescovo per ottenere la licenza alla celebrazione di un matrimonio canonico. \" target=\"blank\">XII - DICHIARAZIONE PREVIA ALLA CELEBRAZIONE DEL MATRIMONIO SOLO CANONICO</a><br>");
}
//se celebrato in altra parrocchia o diocesi o nazione
if (b1== "1" || b1 == "3" || b1 == "4"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XIII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod013-LicenzaAltroParroco.pdf\" \" title =\" È l’autorizzazione che l’Ordinario del luogo o il Parroco proprio di uno dei due nubendi, concede ad un terzo Parroco perché l’istruttoria matrimoniale e la celebrazione delle nozze avvenga nella sua Parrocchia. Questa licenza può essere accordata solo in presenza di una seria motivazione pastorale (es. inserimento dei nubendi nei gruppi parrocchiali). \" target=\"blank\">XIII - LICENZA AD ALTRO PARROCO</a><br>");
}
// SEMPRE
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XIV\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod014-StatoDeiDocumenti.pdf\" \" title =\" Riassume le notizie religiose e civili circa i nubendi. Riporta la data delle pubblicazioni canoniche e civili, contiene lo spazio per la licenza ad altro Parroco se il matrimonio si celebra fuori Parrocchia, la delega al sacerdote celebrante, la firma del Cancelliere diocesano e la firma del Cancelliere di Curia del luogo ove si celebra il matrimonio (fuori diocesi), gli indirizzi delle Parrocchie di battesimo, ove trasmettere e annotare, a norma del can. 1122, 2 C.J.C., la notizia dell’avvenuto matrimonio. \" target=\"blank\">XIV - STATO DEI DOCUMENTI</a><br>");
//celebrato in questa parrocchia da altro parroco
if (b1== "2"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XIVa\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod014a-DelegaPerUnSacerdoteNeLimitiDellaPropriaParrocchia.pdf\" \" title =\" Delega al sacerdote celebrante nei limiti della propria parrocchia\" target=\"blank\">XIVa - DELEGA PER UN SACERDOTE NEI LIMITI DELLA PROPRIA PARROCCHIA</a><br>");
}
// se NO celebrato in altra diocesi o altra parrocchia o altra nazione
if (b1 != "1" && b1 != "3" && b1 != "4"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XV\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod015-AttoDiMatrimonio.pdf\" \" title =\" Contiene, oltre le generalità degli sposi, le date delle pubblicazioni canoniche e civili, anche eventuali altri adempimenti, quali la separazione dei beni e il riconoscimento dei figli naturali. \" target=\"blank\">XV - ATTO DI MATRIMONIO</a><br>");
}

// se NON: senza nulla osta civ, solo canonico non trascrivibile, sposati solo civilmente
if (b3 =="2"){
document.write("");
} else if (b2 =="1"){
document.write("");
} else if (b2 =="3"){
document.write("");
} else {
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XVI\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod016-RichiestaTrascrizioneAgliEffettiCivili.pdf\" \" title =\" È il foglio che accompagna l’atto di Matrimonio per la sua trascrizione nei registri di stato civile. Il tagliando sottostante vale come ricevuta. \" target=\"blank\">XVI - RICHIESTA DI TRASCRIZIONE AGLI EFFETTI CIVILI</a><br>");
}
//battezzati in questa parrocchia
if (r15!="si"){
	 		document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#XVII\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/Mod017-NotificaDiMatrimonio.pdf\" \" title =\" È una cartolina di comunicazione del Matrimonio al Parroco di Battesimo dei nubendi. Ad essa è unita la risposta per la notifica della eseguita registrazione della nota marginale.\" target=\"blank\">XVII - NOTIFICA DI MATRIMONIO</a><br>");
}


//--------------------------------- LICENZE E DISPENSE ----------------------------------------
document.write("<br>");

if (b4=="si"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#1\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_01-dispensapubblicazionicanoniche.pdf\" \" title =\" È una domanda rivolta dal Parroco all’Ordinario per ottenere la dispensa da una o più pubblicazioni. La richiesta è seguita dalla motivazione. \" target=\"blank\">Num 01_Domanda di Dispensa dalle pubblicazioni canoniche</a><br>");
}
if (b3=="1"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#2\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_02-licenzacelebrazionematrimonioprimaN_Ocivile.pdf\" \" title =\" Il Parroco chiede all’Ordinario la licenza per celebrare un matrimonio concordatario mentre sono in corso le pubblicazioni civili (art. 12 della Legge 27 maggio 1929 n. 847). Ottenuta l’autorizzazione, i nubendi sono tenuti a celebrare il matrimonio nel territorio del Comune dove sono state iniziate le pratiche civili, per evitare difficoltà di trascrizione al civile. \" target=\"blank\">Num 02_Domanda di Licenza per la celebrazione del matrimonio prima del rilascio del Nulla Osta civile</a><br>");
}
if (b3=="2"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#3\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_03-licenzamatrimoniosenzarichiestapub_civili.pdf\" \" title =\" Il Parroco chiede all’Ordinario la licenza di celebrare un matrimonio concordatario senza effettuare le pubblicazioni civili, per motivi ritenuti pastoralmente validi (art. 13 della Legge 27 maggio 1929 n. 847). \" target=\"blank\">Num 03_Domanda di Licenza per la celebrazione del matrimonio senza il rilascio del Nulla Osta civile</a><br>");
}
if (b2=="2"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#4\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_04-domandamatrimoniosolocanonico.pdf\" \" title =\" Questo schema di domanda riguarda il matrimonio canonico, che di diritto può essere trascritto in seguito dai contraenti (art. 8 dell’accordo di revisione del Concordato Lateranense). \" target=\"blank\">Num 04_Licenza per matrimonio solo canonico</a><br>");
}
if (b3!="0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#5\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_05-domandavistoOrdinariopertrascrizionetardivaattomatrimonio.pdf\" \" title =\" È il documento che accompagna i documenti civili per la trascrizione tardiva del matrimonio concordatario (art. 8 dell’accordo di revisione del Concordato Lateranense). \" target=\"blank\">Num 05_Richiesta del visto dell'Ordinario per la trascrizione tardiva del matrimonio</a><br>");
}
if (b2=="1"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#6\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_06-licenzamatrimoniocanoniconontrascrivibilealcivile.pdf\" \" title =\" La richiesta riguarda quei casi in cui la legge canonica vieta il matrimonio, ma contestualmente prevede la possibilità della dispensa dall’impedimento (es. età: can. 1083 C.J.C). \" target=\"blank\">Num 06_Licenza per matrimonio solo canonico non trascrivibile</a><br>");
}
if (b2=="3"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#7\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_07-domandamatrimoniocanonicodopoilcivile.pdf\" \" title =\" La domanda vuol significare che la richiesta del Sacramento del Matrimonio non deve intendersi come una mera sistemazione di fatto, ma l’espressione di un cammino di fede. \" target=\"blank\">Num 07_Licenza per matrimonio canonico dopo il civile</a><br>");
}
if (r2!="0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#8\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_08-domandamatrimoniodidivorziati.pdf\" \" title =\" Come nel Matrimonio dopo il civile, gli interessati espongono al Vescovo le motivazioni che li hanno spinti a compiere la prima scelta e a chiedere ora il matrimonio-sacramento. Contestualmente l’Ordinario verificherà se il precedente matrimonio sia stato celebrato solo civilmente, visionando la sentenza di divorzio allegata. \" target=\"blank\">Num 08_Licenza per matrimonio di divorziati");
		if(r2=="lui"){document.write(" (Fidanzato)<br>")}
		else if(r2=="lei"){document.write(" (Fidanzata)</a><br>")} 
		else {document.write(" (Entrambi)</a><br>")}
}
if (r12!="0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#9\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_09-domandamatrimonioperirretitodacensura.pdf\" \" title =\" La richiesta è rivolta all’Ordinario solo se al Parroco risulta in foro esterno che una persona è incorsa nella censura (es. scomunica) e se non è stato possibile ottenere la riconciliazione. \" target=\"blank\">Num 09_Richiesta di dispensa per la celebrazione del matrimonio di chi è irretito da censura");
		if(r12=="lui"){document.write(" (Fidanzato)</a><br>")}
		else if(r12=="lei"){document.write(" (Fidanzata)</a><br>")} 
		//else {document.write(" (Entrambi)</a><br>")}

}
if (r9!="0"){
document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#10\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_10-domandamatrimonioperchinotoriamentehaabbandonatofedecattolica.pdf\" \" title =\" Questo schema di domanda serve solo nel caso di matrimonio tra una persona cattolica credente e un’altra battezzata nella Chiesa cattolica, ma che ha notoriamente abbandonato la fede. \" target=\"blank\"> Num 10_Richiesta di dispensa per il matrimonio di chi ha notoriamente abbandonato la fede cattolica");
		if(r9=="lui"){document.write(" (Fidanzato)</a><br>")}
		else if(r9=="lei"){document.write(" (Fidanzata)</a><br>")} 
		else {document.write(" (Entrambi)</a><br>")}

}
if (r5!="0"){
document.write("   <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#11\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_11-domandamatrimoniodiminorenni.pdf\" \" title =\" Questa traccia serve per ottenere la licenza nel caso di minorenne che abbia già compiuto il sedicesimo anno di età (D.G., 37; can. 1071, 1,6). \" target=\"blank\">Num 11_Richiesta di dipensa per matimonio di minorenni");
		if(r5=="lui"){document.write(" (Fidanzato)</a><br>")}
		else if(r5=="lei"){document.write(" (Fidanzata)</a><br>")} 
		else {document.write(" (Entrambi)</a><br>")}

}
if (r11!="0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#12\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_12-domandamatrimoniotrapersonacattolicaeunabattezzatamanoncattolica.pdf\" \" title =\" La domanda riguarda i matrimoni misti, tra cristiani: can. 1124-1125 C.J.C. (cfr. Mod. XI). \" target=\"blank\">Num 12_ Domanda di dispensa per il matrimonio tra una parte cattolica e una parte battezzata non cattolica");
		if(r11=="lui"){document.write(" (Fidanzato)</a><br>")}
		else if(r11=="lei"){document.write(" (Fidanzata)</a><br>")} 
		//else {document.write(" (Entrambi)</a><br>")}

}
if (r10!="0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#13\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_13-dispensadaimpedimentomatrimoniotraunapartecattolicaeunanonbattezzata.pdf\" \" title =\" La richiesta riguarda i matrimoni interreligiosi o di disparità di culto: can. 1086 C.J.C. \" target=\"blank\">Num 13_ Domanda di dispensa per matrimonio tra una parte cattolica e una non battezzata");
		if(r10=="lui"){document.write(" (Fidanzato)</a><br>")}
		else if(r10=="lei"){document.write(" (Fidanzata)</a><br>")} 
		//else {document.write(" (Entrambi)</a><br>")}

}
if (r7!="0"){
document.write("    <a title=\"Visualizza la descrizione del modulo\" href=\"info_moduli.htm#14\" target=\"blank\"><img src=\"images/info.gif\" width=\"14\" height=\"14\" border=\"0\" align = \"middle\"></a> &nbsp;<a href=\"moduli/F_14-Dispensadaimpedimentodiconsanguineita.pdf\" \" title =\" Questa traccia può essere usata anche per la domanda di dispensa da altri impedimenti; es. rapimento: can. 1089 C.J.C .- pubblica onestà: can. 1093 C.J.C.\" target=\"blank\">Num 14_Richiesta di dispensa per impedimento di consanguineità</a><br>");
}
if (r8=="si"){
document.write("    Licenza di celebrazione per il matrimonio dei girovaghi<br>");
document.write("    Atto notorio sottoscritto davanti al Pretore e a due testimoni<br>");
}

// -------------------------- ALTRI DOCUMENTI ----------------------------------------------
document.write("<br>");


// se non solo canonico
if (b2!="2"){
document.write("    Certificato contestuale in carta libera per uso matrimonio (Entrambi)</a><br>");
}


// STESSE CONDIZIONI DELLA RICHIESTA DI PUBBLICAZIONI CIVILI
// se NON: senza nulla osta civ, solo canonico non trascrivibile, sposati solo civilmente
if (b3 =="2"){
document.write("");
} else if (b3 =="1"){
document.write("Attestato di eseguite pubblicazioni civili (per la trascrizione tardiva)<br>");
} else if (b3 =="2"){
document.write("Attestato di eseguite pubblicazioni civili (per la trascrizione tardiva)<br>");
} else if (b2 =="1"){
document.write("");
} else if (b2 =="2"){
document.write("Attestato di eseguite pubblicazioni civili (per la trascrizione tardiva)<br>");
} else if (b2 =="3"){
document.write("");
} else {
document.write("    Attestato di eseguite pubblicazioni civili<br>");
}

if (b2 == "3") {
document.write("    Certificato di matrimonio civile<br>");
document.write("    Lettera dei nubendi all'Ordinario per matrimonio canonico dopo il civile<br>");
}

if (r2 != "0") {
document.write("    Sentenza definitiva di divorzio civile");
		if(r2=="lui"){document.write(" (Fidanzato)</a><br>")}
		else if(r2=="lei"){document.write(" (Fidanzata)</a><br>")} 
		else {document.write(" (Entrambi)</a><br>")}

}
else if (r4 != "0") {
document.write("    Sentenza definitiva di divorzio civile");
		if(r4=="lui"){document.write(" (Fidanzato)</a><br>")}
		else if(r4=="lei"){document.write(" (Fidanzata)</a><br>")} 
		else {document.write(" (Entrambi)</a><br>")}

}
if (r4 != "0") {
document.write("    Sentenza di nullit&agrave; o scioglimento di matrimonio");
		if(r4=="lui"){document.write(" (Fidanzato)</a><br>")}
		else if(r4=="lei"){document.write(" (Fidanzata)</a><br>")} 
		else {document.write(" (Entrambi)</a><br>")}
}

 