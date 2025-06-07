class X {
    um(): void {
        console.log("um");
    }
}

class Y extends X {
    dois(): void {
        console.log("dois");
        this.um();
    }
}

class Z extends Y {
    tres(): void {
        console.log("três");
        this.dois();
    }
}

const z = new Z();
z.tres();