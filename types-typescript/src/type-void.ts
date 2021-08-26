// Void
// Tipo Explicito
function showInfo(user:any): any {
    console.log('User Info', user.id, user.userName, user.firstName);

}

showInfo( {
    id:1,
    userName: 'DanielFenix',
    firstName: 'Danieru'
})

function showFormatInfo(user: any) {
    console.log('User info', `
        id: ${user.id}
        username: ${user.userName}
        firstName: ${user.firstName}
    `)
}

showFormatInfo( {
    id:1,
    userName: 'DanielFenix',
    firstName: 'Danieru'
})

// Tipo Never

function handleError(code: number, menssage: string): never {
    
    throw new Error(`${menssage}. Code: ${code}`);
    
}

try {
    handleError(404, 'Not found')
} catch (error) {
    
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while (true) {
        sum++
    }
}

sumNumbers(10)