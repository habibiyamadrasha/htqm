function pass() {
	if (ps.value=="") {
		alert("Please Enter Password!");
		ps.value="";
		ps.focus();
		}
	else if (ps.value=="clproton") {
		cloride()
		}
	else if (ps.value=="dosproton") {
		dosing()
		}
	else if (ps.value=="volproton") {
		volium()
		}
	else if (ps.value=="conproton") {
		conversions()
		}
	else if (ps.value=="tdsproton") {
		tdscont()
		}
	else {
		alert("Invalid Password")
		location="index.htm"
		}
	}

function cloride() {
	alert("Cl Ok");
	}

function dosing() {
	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Dosing Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>DOSING CALCULATION</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B>Total Water(M<SUP>3</SUP>) <INPUT TYPE="text" NAME="txtwater" VALUE="" size="4"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>Total Time(hh) <INPUT TYPE="text" NAME="txttime" VALUE="1" size="1"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B>Chemical Percentage(%) <INPUT TYPE="text" NAME="txtparcent" VALUE="100" size="2"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>Dosing (ppm) <INPUT TYPE="text" NAME="txtppm" VALUE="1" size="2"></B></FONT></P></td></tr>');

	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="SUBMIT" Name="Cmdsm" VALUE="Result" onClick="sumdos()"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="back()"></B></FONT></P></td></tr>');

	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
	txtwater.focus();
	}

function volium() {
	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Volum Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" height="136" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>VOLUM CALCULATION</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');

	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdsqer" VALUE="Round Ship" onClick="round()"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdrect" VALUE="Rectangular" onClick="rect()"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="back()"></B></FONT></P></td></tr>');

	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
	}
function tdscont() {
	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Volum Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" height="136" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>TDS/Cont Conversion</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#00CCCC"><div align="center"><H4 ALIGN="CENTER">Unit <select class=select size=1 name="comtdscont"></H4>');
        document.write('<option value="0" selected>TDS</option>');
	document.write('<option value="1">Cont</option></select></div></td></tr>');

	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="text" NAME="txttdscont" VALUE="" size="1"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="SUBMIT" Name="Cmdsm" VALUE="Result" onClick="sumtdscont()"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="back()"></B></FONT></P></td></tr>');

	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');

}

function sumtdscont() {
	var unit1;
	var unit2;
	if (comtdscont.value==0) {
		unit1="Cont";
		unit2="mus"
		var sumresult=(txttdscont.value/0.65);
		}
	else if (comtdscont.value==1) {
		unit1="TDS";
		unit2="ppm";
		var sumresult=(txttdscont.value*0.65);
		}

	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Volum Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" height="22" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>TDS/Cont Conversion</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>'+unit1+' = '+sumresult+' '+unit2+'</SUP></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="tdscont()"></B></FONT></P></td></tr>');
	
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
}

function rect() {
	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Volum Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" height="136" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>VOLUM CALCULATION</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#00CCCC"><div align="center"><H4 ALIGN="CENTER">Unit <select class=select size=1 name="comunit"></H4>');
        document.write('<option value="0" selected>M</option>');
        document.write('<option value="1">CM</option>');
	document.write('<option value="2">MM</option>');
	document.write('<option value="3">Foot</option>');
	document.write('<option value="4">Inc</option></select></div></td></tr>');

	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B>Height <INPUT TYPE="text" NAME="txtheight" VALUE="" size="1"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>Width <INPUT TYPE="text" NAME="txtwidth" VALUE="" size="1"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B>Length <INPUT TYPE="text" NAME="txtlength" VALUE="" size="1"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="SUBMIT" Name="Cmdsm" VALUE="Result" onClick="sumvolumrect()"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="volium()"></B></FONT></P></td></tr>');

	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
	txtheight.focus();
	}

function round() {
	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Volum Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" height="136" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>VOLUM CALCULATION</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#00CCCC"><div align="center"><H4 ALIGN="CENTER">Unit <select class=select size=1 name="comunit"></H4>');
        document.write('<option value="0" selected>M</option>');
        document.write('<option value="1">CM</option>');
	document.write('<option value="2">MM</option>');
	document.write('<option value="3">Foot</option>');
	document.write('<option value="4">Inc</option></select></div></td></tr>');

	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B>Dia <INPUT TYPE="text" NAME="txtdia" VALUE="" size="1"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>Height <INPUT TYPE="text" NAME="txtheight" VALUE="" size="1"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="SUBMIT" Name="Cmdsm" VALUE="Result" onClick="sumvolumround()"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="volium()"></B></FONT></P></td></tr>');

	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
	txtdia.focus();

	}

function sumvolumrect() {
	if (comunit.value==0) {
		unit="M<SUP>3</SUP>";
		var sumresult=(txtheight.value*txtwidth.value*txtlength.value);
		}
	else if (comunit.value==1) {
		unit="CM";
		var sumresult=((txtheight.value/100)*(txtwidth.value/100)*(txtlength.value/100));
		}
	else if (comunit.value==2) {
		unit="MM";
		var sumresult=((txtheight.value/1000)*(txtwidth.value/1000)*(txtlength.value/1000));
		}
	else if (comunit.value==3) {
		unit="Foot";
		var sumresult=((txtheight.value/3.28)*(txtwidth.value/3.28)*(txtlength.value/3.28));
		}
	else if (comunit.value==4) {
		unit="Inc";
		var sumresult=((txtheight.value/39.36)*(txtwidth.value/39.36)*(txtlength.value/39.36));
		}

	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Volum Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" height="22" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>VOLUM RESULT</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>Total Volum = '+sumresult+' M<SUP>3</SUP></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="rect()"></B></FONT></P></td></tr>');
	
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
	}
function sumvolumround() {
	if (comunit.value==0) {
		unit="M<SUP>3</SUP>";
		var sumresult=((((txtdia.value/2)*(txtdia.value/2))*3.14)*txtheight.value);
		}
	else if (comunit.value==1) {
		unit="CM";
		var sumresult=(((((txtdia.value/100)/2)*((txtdia.value/100)/2))*3.14)*(txtheight.value/100));
		}
	else if (comunit.value==2) {
		unit="MM";
		var sumresult=(((((txtdia.value/1000)/2)*((txtdia.value/1000)/2))*3.14)*(txtheight.value/1000));
		}
	else if (comunit.value==3) {
		unit="Foot";
		var sumresult=(((((txtdia.value/3.28)/2)*((txtdia.value/3.28)/2))*3.14)*(txtheight.value/3.28));
		}
	else if (comunit.value==4) {
		unit="Inc";
		var sumresult=(((((txtdia.value/39.36)/2)*((txtdia.value/39.36)/2))*3.14)*(txtheight.value/39.36));
		}

	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Volum Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" height="22" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>VOLUM RESULT</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>Total Volum = '+sumresult+' M<SUP>3</SUP></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="round()"></B></FONT></P></td></tr>');
	
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
	}

function conversions() {
	alert("Convartor Ok");
	}

function sumdos() {
	var result;
	var dasi;
	var pars;
	var water=txtwater.value;
	var ttime=txttime.value;
	var parcent=txtparcent.value;
	var ppm=txtppm.value;
	var sumresult=((((((((water)/1000000)*1000)*1000)*ppm)*ttime)*100)/parcent)
	dasi=(sumresult-(parseInt(sumresult)));
	pars=(txtppm.value*0.0001)+" %";
	if (dasi>0.50) {
		sumresult=((parseInt(sumresult))+1);
		}
	else if (dasi<0.51) {
		sumresult=(parseInt(sumresult));
		}
	dasi=0;
	if (sumresult<1000) {
		result=parseInt(sumresult)+" ml/Gram";
		}
	else if (sumresult>=1000) {
		dasi=(((sumresult/1000)-(parseInt(sumresult/1000)))*1000);
		if (dasi>0) {
			result=parseInt(sumresult/1000)+"."+parseInt(dasi)+" Liter/Kg.";
			}
		else if (dasi==0) { 
			result=parseInt(sumresult/1000)+" Liter/Kg.";
			}
		}
	document.close();
	document.write('<html>');
	document.write('<head>');
	document.write('<title>Volum Calculation.</title>');
	document.write('<script language="JavaScript" src="pic/logpass.js" Type="Text/JavaScript"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<table width="176" height="22" border="0" align="center" cellpadding="0" cellspacing="0">');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>DOSING RESULT</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B>'+result+'</B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>'+pars+'</B></FONT></P></td></tr>');

	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><h2 align="center"><font color="#FFFFFF"><B>DOSING CALCULATION</B></font></h2></div></td></tr>');
	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B>Total Water(M<SUP>3</SUP>) <INPUT TYPE="text" NAME="txtwater" VALUE="'+water+'" size="4"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>Total Time(hh) <INPUT TYPE="text" NAME="txttime" VALUE="'+ttime+'" size="1"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B>Chemical Percentage(%) <INPUT TYPE="text" NAME="txtparcent" VALUE="'+parcent+'" size="2"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B>Dosing (ppm) <INPUT TYPE="text" NAME="txtppm" VALUE="'+ppm+'" size="2"></B></FONT></P></td></tr>');

	document.write('<tr><td bgcolor="#00CC99"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="SUBMIT" Name="Cmdsm" VALUE="Result" onClick="sumdos()"></B></FONT></P></td></tr>');
	document.write('<tr><td bgcolor="#00CCCC"><P align="center"><FONT size=4 align="center"><B><INPUT TYPE="BUTTON" Name="Cmdback" VALUE="< Back" onClick="back()"></B></FONT></P></td></tr>');

	document.write('<tr><td align="center" bgcolor="#006666"><div align="center"><img align="top" src="barra.gif" height="5" width="175"></div></td></tr>');
	document.write('<tr><td align="center" bgcolor= "#00AA4D"><FONT size=4 align="center" color="#000000">To learn more call 01819641372</FONT></td></tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
	}
function back() {
	location="watertest.htm";
	}
function home() {
	location="index.htm";
	}