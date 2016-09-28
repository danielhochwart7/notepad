function regExpParsing(content) { 
 
    var ret = {};
    var regex = new RegExp("(Mt|Mc)([0-9]){1,2}:*([0-9]{0,3}),*-*([0-9]{1,3})", "g");
    results = regex.exec(content);
  
    for (var n=0; n < results.length; n++) {
        console.log(results[n]);
    }
    //
   
    console.log(results);

}

regExpParsing("Fazendo teste de expressao regular com match em Mt5:15-25 e Mc2:5");