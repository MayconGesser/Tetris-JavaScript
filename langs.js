var langs = {
	"en-US" : 
	{
		"h1" : "This Game Was Created By ",
		"score" : "Score: ",
		"tetris" : "Tetris (Russian: Тетрис [ˈtɛtrʲɪs]; from \"tetromino\" and \"tennis\") is a tile-matching puzzle video game originally designed and programmed by Soviet Russian game designer Alexey Pajitnov (Russian: Алексе́й Леони́дович Па́житнов). The first playable version was completed on June 6, 1984, while he was working for the Dorodnitsyn Computing Centre of the Academy of Science of the Soviet Union in Moscow. He derived its name from the Greek numerical prefix tetra- (all of the game's pieces contain four segments) and tennis, Pajitnov's favorite sport.",
		"today" : "Today is: ",
		"time" : "Local time: ",
		"link" : "https://en.wikipedia.org/wiki/Tetris"
	},

	"pt-BR" :
	{
		"h1" : "Esse jogo foi criado por ",
		"score" : "Pontuação: ",
		"tetris" : "Tetris (em russo: Тетрис) é um jogo electrônico muito popular, desenvolvido por Alexey Pajitnov, Dmitry Pavlovsky e Vadim Gerasimov, e lançado em Junho de 1984. Pajitnov e Pavlovsky eram engenheiros informáticos no Centro de Computadores da Academia Russa das Ciências e Vadim era um aluno com 16 anos. Tetris foi um dos primeiros itens de exportação de sucesso da União Soviética e um dos primeiros a ser visto como um tipo de vício. Atingiu um público alvo inédito na história dos videogames.",
		"today" : "Hoje é: ",
		"time"	: "Horário local: ",
		"link" : "https://pt.wikipedia.org/wiki/Tetris"
	},

	"es-ES" :
	{
		"h1" : "Este juego fue creado por ",
		"score" : "Puntuación: ",
		"tetris" : "Tetris (en ruso: Те́трис)? es un videojuego de puzzle originalmente diseñado y programado por Alekséi Pázhitnov en la Unión Soviética. Fue lanzado el 6 de junio de 1984,2​ mientras trabajaba para el Centro de Computación Dorodnitsyn de la Academia de Ciencias de la Unión Soviética en Moscú, RSFS de Rusia.3​ Su nombre deriva del prefijo numérico griego tetra- (todas las piezas del juego, conocidas como Tetrominós que contienen cuatro segmentos) y del tenis, el deporte favorito de Pázhitnov. En el Tetris se juega con los tetrominós, el caso especial de cuatro elementos de poliominós. Los poliominós se han utilizado en los rompecabezas populares por lo menos desde 1907, y el nombre fue dado por el matemático Solomon W. Golomb en 1953. Sin embargo, incluso la enumeración de los pentominós data de la antigüedad.",
		"today" : "Hoy es: ",
		"time" : "Hora local: ",
		"link" : "https://es.wikipedia.org/wiki/Tetris"
	},

	"de-DE" :
	{
		"h1" : "Dieses Spiel wurde von %s erstellt",
		"score" : "Punktzahl: ",
		"tetris" : "Tetris (russisch Тетрис) ist ein puzzleartiges Computerspiel des russischen Programmierers Alexei Paschitnow, der die erste spielbare Version am 6. Juni 1984 auf einem Elektronika-60-Rechner fertigstellte. Tetris gilt heute als Computerspiel-Klassiker, hat sich inzwischen über 100 Millionen Mal verkauft, wurde vielfach ausgezeichnet und ist für mehr als 65 Computerplattformen erschienen.",
		"today" : "Heute ist: ",
		"time" : "Ortszeit: ",
		"link" : "https://de.wikipedia.org/wiki/Tetris"
	},

	"ru" :
	{
		"h1" : "Эта игра была создана",
		"score" : "Cчет: ",
		"tetris" : "Те́трис (производное от «тетрамино» и «теннис») — компьютерная игра, первоначально изобретённая и разработанная советским программистом Алексеем Пажитновым. Игра была выпущена 6 июня 1984 года — в это время Пажитнов работал в Вычислительном центре Академии наук СССР. «Тетрис» представляет собой головоломку, построенную на использовании геометрических фигур «тетрамино» — разновидности полимино, состоящих из четырёх квадратов. Полимино в том или ином виде использовались в настольных играх и головоломках задолго до создания «Тетриса». Идею «Тетриса» Пажитнову подсказала игра в пентамино. ",
		"today" : "Cегодня: ",
		"time" : "Mестное время: ",
		"link" : "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%82%D1%80%D0%B8%D1%81"
	},

	"el-GR" :
	{
		"h1" : "Αυτό το παιχνίδι δημιουργήθηκε από ",
		"score" : "Σκορ: ",
		"tetris" : "Το Tetris είναι το κλασικό παιχνίδι με τα τουβλάκια που πέφτουν και τώρα έχετε τη δυνατότητα να το παίξετε στον υπολογιστή σας. Με όλα τα κλασικά σχήματα τούβλων που εισήγαγε το αυθεντικό Tetris στο Nintendo, τώρα μπορείτε να το αποκτήσετε και να το παίξετε στον υπολογιστή σας. Ολοκληρώστε τις πίστες για να πάρετε περισσότερους πόντους και για να ανακαλύψετε αν είστε ένας πραγματικός μάστερ του Tetris!",
		"today" : "Σήμερα είναι: ",
		"time" : "Τοπική ώρα: "
	},

	"ja-JP" : 
	{
		"h1" : "このゲームはCodeExplainedによって作成されました",
		"score" : "スコア: ",
		"tetris" : "テトリス（ロシア語: Тетрис）は、落ち物パズルに分類されるコンピュータゲームシリーズの総称。この種のゲームの元祖的存在であり、1980年代末から1990年代初めにかけ、世界各国で大流行し、現在に至るまで様々な形で移植・アレンジされ、プレイされ続けている。",
		"today" : "今日は: ",
		"time" : "現地時間: "
	}
};

var credit = document.getElementById('credit');
var descp = document.getElementById('descp');
var today = document.getElementById('today');
var time = document.getElementById('time');
var scr_name = document.getElementById('scr_name');

var current_date = document.getElementById('current_date');
var local_time = document.getElementById('local_time');

function getLang(){
	console.log(this.name);
	credit.innerHTML = langs[this.name].h1;
	descp.innerHTML = langs[this.name].tetris;
	today.innerHTML = langs[this.name].today;
	time.innerHTML = langs[this.name].time;
	scr_name.innerHTML = langs[this.name].score;
	var x = new Date();
	console.log(x);
	console.log(current_date);
	current_date.innerHTML = x.toLocaleDateString(this.name);;
	local_time.innerHTML = x.getHours() + ":" + (x.getMinutes() < 10 ? "0" + x.getMinutes() : x.getMinutes());
}

var pt = document.getElementById('pt-br');
var en = document.getElementById('en-us');
var es = document.getElementById('es');
var de = document.getElementById('de');
var ru = document.getElementById('ru');
var gr = document.getElementById('gr');
var ja = document.getElementById('ja');

pt.addEventListener('click',getLang);
en.addEventListener('click',getLang);
es.addEventListener('click',getLang);
de.addEventListener('click',getLang);
ru.addEventListener('click',getLang);
gr.addEventListener('click',getLang);
ja.addEventListener('click',getLang);