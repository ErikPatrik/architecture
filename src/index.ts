class Person {
    sayHello(name?: string): string {
        return `Olá ${name}`
    }
}

const p = new Person()
p.sayHello('Vagabundo')