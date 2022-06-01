class Component {
  $target: Element;

  state: any;

  props: any;

  constructor($target: Element, props: any = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}

  mounted() {}

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}

  setState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent(
    eventType: keyof HTMLElementEventMap,
    selector: string,
    callback: Function,
    options?: boolean | AddEventListenerOptions
  ) {
    const children = [...this.$target.querySelectorAll(selector)];

    const isTarget = (target: Element) => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(
      eventType,
      (e) => {
        if (!isTarget(e.target as Element)) return;
        callback(e);
      },
      options
    );
  }
}

export default Component;
