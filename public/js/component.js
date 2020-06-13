export class Component extends React.Component{
    constructor (param)
    {
        super(param);
//        this.data = param;
        this.component = undefined;
    }

    render() {
        this.component = ReactDOM.createElement('div');
    }

    mount(container)
    {
        this.beforeMount()

        this.render();

//        let vsContainer = document.createElement('div');
//        vsContainer.innerHTML = componentTHML;
//        this.component = vsContainer.firstElementChild;
         
//        container.insertAdjacentElement(position || 'beforeend', this.component);


        ReactDOM.render(this.component, container);
        this.afterMount()
    }

    afterMount() {}
    beforeMount() {}

    unmount() {
        if (this.container) {
			this.container.remove();
			this.container = undefined;
		}
    }

    beforeUnmount() {}
    afterUnmount() {}

    undate() {}
}