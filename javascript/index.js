function touchFoot()
{
	footMsg = Date();
	return footMsg;
}

function textFormatForNews(title,sentece)
{
	strNewsFormat="<h2>"+title+"</h2>";
	for(i in sentece)
	{
		strNewsFormat += "<p>"+sentece[i]+"</p>";
	}
	return strNewsFormat;
}

function onNews()
{
	text=[];
	text[0]="<h2>welcome</h2><p>welcome to srcDock, my name is zhangzhiwen.nice to meet you!</p><p>srcDock was used to help students or people who concern about develop.everything is here is free.srcDock have a lot of stuffs, include c++,javascript,vim,python,sql...and so on.</p>";
	text[1]="<h2>about</h2><p>srcDock is establishing now, we also have a lot of work to do. in 2016,srcDock was born, and I am just a fresh man for web developing, a lot of skill need to study and understand, I think no need to much time, this website could be touched by friendly visitors. thinks for everyone who support my efforts.</p>";
	text[2]=textFormatForNews("Go", ["Recently, I tryed use GoLanguage to complete some work", "Go is very useful likepython and more efficently", "keep going"]);
	var NewsIndex = 0;
	var news = "";
	for(NewsIndex in text)
	{
		news+=text[NewsIndex]+"\n";
	}
	$("#section").html(news+"<br><font color=grey> updated at "+touchFoot()+"</font>");
}

function onVim()
{
	$("#section").html("<h2>vim8.0 Released!</h2><p>I am very happy to heard that vim8.0 was released on 2016/9/21. since vim7.0 was released on 2006, it is already 10 years past.</p>");
}
function onCplus()
{
	$("#section").html("<h2>empty</h2>");
}
function onPyton()
{
	$("#section").html("<h2>empty</h2>");
}
function onBash()
{
	$("#section").html("<h2>empty</h2>");
}
function onLinux()
{
	$("#section").html("<h2>empty</h2>");
}
function onWindows()
{
	$("#section").html("<h2>empty</h2>");
}
function onDownload()
{
	$("#section").html("<h2>empty</h2>");
}
