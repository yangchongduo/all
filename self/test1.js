/*
 var funcs=[0,1]
 var rest = funcs.slice(0, -1);
 console.log(rest);*/
function test(art,ary) {
    if(art==1){
        if (ary==3){
            console.log('3')
        }else {
            console.log('4')
        }
    }else {
        console.log('2')
    }
}
test(1,3);
/*function text(art, ary) {
    if (art==1){

    }
    return console.log('2')
}*/
function text(art, ary) {
    art==1?ary==3?console.log('3'): console.log('4'):console.log('2')
}
text(1,3)