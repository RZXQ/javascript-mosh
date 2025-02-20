const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  show() {
    return _radius.get(this);
  }
}
