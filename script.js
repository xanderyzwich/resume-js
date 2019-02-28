import data from './data.js';

const name = data.Name.first + ' ' + data.Name.last;
document.title = name + ' - ROCKSTAR';

// main page container
const main = document.createElement('div');
main.id = 'main';
main.class = 'primary';
document.body.appendChild(main);

// page heading
const headDiv = makeDiv('heading', 'row text-center');
main.appendChild(headDiv);
// add name
const nameDiv = makeDiv('name', 'col-sm-8');
tag('h1', name, nameDiv);
headDiv.appendChild(nameDiv);
// add contact info
const contactDiv = makeDiv('contactInfo', 'col-sm-4');
tag('a', data.Contact.Phone, contactDiv, 'tel:');
tag('a', data.Contact.Email, contactDiv, 'mailto:');
tag('a', data.Contact.Profile, contactDiv);
tag('a', data.Contact.Repository, contactDiv);
headDiv.appendChild(contactDiv);

// THIS HANDLES THE TOP LEVEL PIECES
for(let piece in data){
//    console.log(piece);
    if (piece != 'Name' && piece !='Contact' ) {
        let item = data[piece];
    //    console.log(item);
        const box = makeDiv(piece, 'section');
        tag('h2', piece, box);

        const databox = makeDiv('data', 'set');
        recurse(item, databox);

        box.appendChild(databox);
        document.getElementById('main').appendChild(box);
    }
}

function tag(tag, data, parent, field = ''){
    let element = document.createElement(tag);
    let text = document.createTextNode(data);
    element.appendChild(text);
    parent.appendChild(element);
    if (tag ==='a'){
        element.href = field + data;
        parent.appendChild(document.createElement("br"));
    }
}

function recurse(thing, div){
    for(const piece in thing){
        const item = thing[piece];
        if (item == null){
            continue;
        }
        if (Array.isArray(item)|| (typeof(item) === 'object')){
            collect(item, piece, div);
        }else{
            console.log(item);
            tag('p', item, div);
        }

    }
}

function collect(title, collection, div){
    // Div for the collection with title
    const box = makeDiv(collection, 'collection');
    if (collection ==='Responsibilities'){
        tag('h4', collection, box);
    }else{
        tag('h3', collection, box);
    }

    // Div for the data elements
    const data = makeDiv('data', 'set');
    recurse(title, data);

    // Append things
    box.appendChild(data);
    div.appendChild(box);

}

function makeDiv(div_id, div_class){
    let temp = document.createElement('div');
    temp.id = div_id;
    temp.className = div_class;
    return temp;
}