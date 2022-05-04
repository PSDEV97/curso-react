export const procesoPesado = ( iteraciones ) => {
    for( let i = 0; i < iteraciones; i++){
        console.log('MemoHook');
    }

    return `${ iteraciones } iteraciones realizadas`
}