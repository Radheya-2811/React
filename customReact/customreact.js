
const mainContainer =document.querySelector('#root');

const reactElement={
    type:'a',
    props:{
        href:'https://instagram.com',
        target:'_blank'
    },
    children:"click to visit children"
}

function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target);
    // mainContainer.appendChild(domElement)

    console.log(reactElement.props);

    for(const prop in reactElement.props){
        if(prop=='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement)
}
customRender(reactElement,mainContainer)