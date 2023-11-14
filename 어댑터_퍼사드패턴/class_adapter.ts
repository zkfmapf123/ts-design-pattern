class Target {
    quack() {

    }
}

class Destination {
    gobble() {

    }
}

// 다중상속은 C++, JAVA 에서만 지원 => 극혐
class Adpater extends Target, Destination {
    
    quack(): void {
        return this.gobble()
    }

    gobble() {

    }
}
 
