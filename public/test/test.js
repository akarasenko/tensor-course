import {Component} from  '../js/component.js'

// для запуска тестов npm i, node server.js, открыть http://localhost:3000/test/index.html в браузере

describe('Тестирование компонента Component', function() {

    describe('Конструирование', function() {
        it('Конструирование пустого компонента', function() {
            let comp = new Component();

            assert(comp instanceof Component);
        })
        
        it('Конструирование компонента с параметрам', function() {

            let data = 'data as string';
            let comp = new Component(data);

            assert(comp instanceof Component);
            assert.equal(comp.data, data);
            assert.equal(comp.component, undefined);
        })
    })

    describe('Рендер', function() {
        it('Рендер пустого компонента', function() {

            let comp = new Component();
            let actual = comp.render();

            let expected = '<div></div>';

            assert.equal(actual, expected);
        })
    })

    describe('Монтирование', function() {
        it('Монтирование пустого компонента', function() {

            let comp = new Component();

            let elem = document.createElement('div');

            comp.mount(elem);

            let expected = '<div></div>';

            assert.equal(elem.innerHTML, expected);
        })
    })
})

mocha.run();