function solve(a: string[]): string[] {
    let output: string[] = [];
    output.push('*****'+'\n');
    a.forEach(v => output.push('*'+v+'*'+'\n') );
    output.push('*****'+'\n');
    return output;
}

const picture = ["abc", "ded"];
let result = solve(picture).toString();
result = result.replaceAll(',', '');
console.log(result);