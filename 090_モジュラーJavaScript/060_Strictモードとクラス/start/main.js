function fn() {
  console.log(this);
}
class C {
  constructor() {
    // function fn() {
    //   console.log(this);
    // }
    fn();
  }

  method() {
    console.log(this);
  }
}

const c = new C();
c.method();
