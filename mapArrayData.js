function productArray(a , n)
    {
        var sum = 0;
        for (var i = 0; i < n; i++)
            sum += Math.log10(a[i]);
        for (var i = 0; i < n; i++)
            document.write(parseInt(( Math.pow(10.00, sum - Math.log10(a[i]))))+ " ");
    }

var a = [16,17,4,3,5,2];
var n = a.length;
document.write(`productArray ([${a}]) =>`);

productArray(a, n);
 