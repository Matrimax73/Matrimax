
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


//document.write("<hr>")
// concordatario - in attesa di divorzio
if (b2=="0" && r3!="0"){
alert("ATTENZIONE! \n Non è possibile celebrare matrimonio concordatario se uno dei nubendi è in attesa di divorzio! \n Si può valutare la possibilità di celebrare il matrimonio solo canonico.")	
history.back()}

// abbandono fede - non battezzato
if (r9=="lui" && r10=="lui"){
alert("ATTENZIONE! \n Il fidanzato non può aver abbandonato la fede cattolica se non è battezzato!")	
history.back()}

if (r9=="lei" && r10=="lei"){
alert("ATTENZIONE! \n La fidanzata non può aver abbandonato la fede cattolica se non è battezzata!")	
history.back()}

//abbandono fede - battezzato non cattolico
if (r9=="lui" && r11=="lui"){
alert("ATTENZIONE! \n Il fidanzato non può aver abbandonato la fede cattolica se non è cattolico!")	
history.back()}

else if (r9=="lei" && r11=="lei"){
alert("ATTENZIONE! \n La fidanzata non può aver abbandonato la fede cattolica se non è cattolica!")	
history.back()}

else if (r9=="lui" && r11=="lei") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una persona che ha notoriamente abbandonato la fede	\n e l'altra che non è cattolica!")	
history.back()}

else if (r9=="lei" && r11=="lui") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una persona che ha notoriamente abbandonato la fede	\n e l'altra che non è cattolica!")	
history.back()}


//non battezzato - battezzato non cattolico
else if (r10=="lui" && r11=="lui"){
alert("ATTENZIONE! \n Il fidanzato non può essere contemporaneamente non battezzato e battezzato non cattolico!")	
history.back()}

else if (r10=="lei" && r11=="lei"){
alert("ATTENZIONE! \n La fidanzata non può essere contemporaneamente non battezzata e battezzata non cattolica!")	
history.back()}

else if (r10=="lui" && r11=="lei") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona non battezzata	\n e l'altra che non cattolica!")	
history.back()}

else if (r10=="lei" && r11=="lui") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona non battezzata	\n e l'altra che non cattolica!")	
history.back()}



//non battezzato - censura
else if (r10=="lui" && r12=="lui"){
alert("ATTENZIONE! \n Il fidanzato non può essere irretito da censura se non è battezzato!")	
history.back()}

else if (r10=="lei" && r12=="lei"){
alert("ATTENZIONE! \n La fidanzata non può essere irretita da censura se non è battezzata!")	
history.back()}

else if (r10=="lui" && r12=="lei") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona non battezzata	\n e l'altra irretita da censura!")	
history.back()}

else if (r10=="lei" && r12=="lui") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona non battezzata	\n e l'altra irretita da censura!")	
history.back()}



//non cattolico - censura
else if (r11=="lui" && r12=="lui"){
alert("ATTENZIONE! \n Il fidanzato non può essere irretito da censura se non è cattolico!")	
history.back()}

else if (r11=="lei" && r12=="lei"){
alert("ATTENZIONE! \n La fidanzata non può essere irretita da censura se non è cattolica!")	
history.back()}

else if (r11=="lui" && r12=="lei") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona non cattolica \n e l'altra irretita da censura!")	
history.back()}

else if (r11=="lei" && r12=="lui") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona non cattolica \n e l'altra irretita da censura!")	
history.back()}

// una persona ha abbandonato la fede, l'altra è irretita da censura
else if (r9=="lui" && r12=="lei") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona che ha abbandonato la fede \n e l'altra irretita da censura!")	
history.back()}

else if (r9=="lei" && r12=="lui") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona che ha abbandonato la fede \n e l'altra irretita da censura!")	
history.back()}

// una persona ha abbandonato la fede, l'altra non è battezzata
else if (r9=="lui" && r10=="lei") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona che ha abbandonato la fede \n e l'altra non battezzata!")	
history.back()}

else if (r9=="lei" && r10=="lui") {
alert("ATTENZIONE! \n Non può essere celebrato il matrimonio canonico tra \n una pesona che ha abbandonato la fede \n e l'altra non battezzata!")	
history.back()}
