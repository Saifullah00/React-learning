function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)
    // we are repeating the setAttributes props so it is better to use loop

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children 
    for(const prop in reactElement.props){
        if(prop=== 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)


}
//termenology in reactElement
const reactElement = {
    type: 'a', // first param in react render Tag: p-tag or h-tag etc
    props : {  // second param objects
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit' // third Text
    // fourth variable injection i.e {username} etc

}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
