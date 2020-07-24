var result, temp = "";

function RegisterNum(num)
{
    this.temp += num;
    document.getElementById('output').innerText = temp;

}

function RegisterOp(op)
{
    var lengthOfChar = temp.length;
    var checkLastChar = temp[lengthOfChar - 1];
    //console.log(lengthOfChar);
    //console.log(checkLastChar);

    temp += op;
    document.getElementById('output').innerText = temp;
    
    if (checkLastChar == '+' || checkLastChar == '-' || checkLastChar == '*' || checkLastChar == '/' || checkLastChar == '.')
    {
        temp = temp.slice(0, lengthOfChar);
    }

    /*
    else if ((checkLastChar) == '=')
    {
        var indexOfOp = temp.indexOf('+', '-', '*', '/');
        var op = temp.slice(indexOfOp - 1, indexOfOp);
        var variableOne = temp.slice(0, indexOfOp);
        var floatVariableOne = parseFloat(variableOne);
        var variableTwo = temp.slice(indexOfOp + 1, lengthOfChar - 1);
        var floatVariableTwo = parseFloat(variableTwo);
        console.log(indexOfOp);
        console.log(floatVariableOne);
        console.log(floatVariableTwo);
        console.log(typeof(floatVariableOne));
        console.log(typeof(result));
        //result = floatVariableOne + floatVariableTwo; 
        //temp = result;
        document.getElementById('output').innerText = temp;
        if (op == '+')
        {
            addition (floatVariableOne, floatVariableTwo);
        }
        else if (op == '-')
        {
            subtraction(floatVariableOne, floatVariableTwo);
        }
        else if (op == '*')
        {
            multiplictaion(floatVariableOne, floatVariableTwo);
        }
        else if (op == '/')
        {
            division(floatVariableOne, floatVariableTwo);
        }
    }

    var numOfChar = temp.length;
    console.log(numOfChar);
    var lastChar = temp.charAt(numOfChar);
    console.log(lastChar);
    if ((lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') && (numOfChar == 0 && (lastChar == '*' || lastChar == '+' || lastChar == '-' 
    || lastChar == '/')))
    {
        document.getElementById('output').innerText = temp;
    }
    else
    {
        temp += op;
        document.getElementById('output').innerText = temp;
    }
    */
}

function evaluation()
{
    result = eval(temp);
    temp = result;
    document.getElementById('output').innerText = temp;
}

function addition (variableOne, variableTwo)
{
    result = variableOne + variableTwo;
    temp = result;
}

function subtraction (variableOne, variableTwo) 
{
    result = variableOne - variableTwo;
    temp = result;
}

function multiplictaion (variableOne, variableTwo)
{
    result = variableOne * variableTwo;
    temp = result;
}

function division (variableOne, variableTwo)
{
    result = variableOne / variableTwo;
    temp = result;
}

if (result !== undefined)
{
    document.getElementById('output').innerHTML = result;
}
