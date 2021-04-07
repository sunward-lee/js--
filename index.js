// 抽象产品
class OS {
  control() {
    throw new Error("需要派生类覆盖我");
  }
}

// 具体产品
class Ios extends OS {
  control() {
    console.log("Ios");
  }
}

class Android extends OS {
  control() {
    console.log("Android");
  }
}

// 抽象工厂
class CreateMobile {
  createOS() {
    throw new Error("需要派生类覆盖我");
  }
}

class OnePhone extends CreateMobile {
  createOS() {
    return new Android();
  }
}

class Iphone extends CreateMobile {
  createOS() {
    return new Ios();
  }
}

console.log(new OnePhone().createOS().control());
console.log(new Iphone().createOS().control());
