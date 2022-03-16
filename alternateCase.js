function alternateCase(str)
{
    var ln = str.length;
 
    for (var i = 0; i < ln; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
            document.write(
            String.fromCharCode(str.charCodeAt(i) - 32)
            );
        else if (str[i] >= 'A' && str[i] <= 'Z')
            document.write(
            String.fromCharCode(str.charCodeAt(i) + 32)
            );
    }
}

var str = "Hello World";
document.write(`alternateCase ("${str}") => `)
alternateCase(str);