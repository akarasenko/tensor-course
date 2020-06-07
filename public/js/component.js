export class Component extends React.Component{
    constructor (props)
    {
        this.state = props;
        this.component = undefined; // это содержимое компонента, html элемент
    }

    render() {
        return <div></div>;
    }

    mount(container, position)
    {
        this.beforeMount()

//       let componentTHML = this.render();

//       let vsContainer = document.createElement('div');
//        vsContainer.innerHTML = componentTHML;
//        this.component = vsContainer.firstElementChild;
         
//        container.insertAdjacentElement(position || 'beforeend', this.component);

        ReactDOM.render(this.render(), container)

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