import data from './data.js';

// add title
const name = data.Name.first + ' ' + data.Name.last;
document.title = name + ' - ROCKSTAR';

// main page container
const main = document.createElement('div');
main.id = 'main';
main.class = 'primary row';
document.getElementsByTagName('body')[0].appendChild(main);

// page heading
const headDiv = makeDiv('Heading', 'container');
main.appendChild(headDiv);

// skeleton row
headDiv.appendChild(makeDiv('headSpace', 'row'))
const headRow = makeDiv('headRow', 'row');
headDiv.appendChild(headRow);

// add name
const nameDiv = makeDiv('Name', 'seven columns');
tag('h1', name, nameDiv);
headRow.appendChild(nameDiv);

// add contact info
const contactDiv = makeDiv('Contact', 'five columns');
tag('a', data.Contact.Phone, contactDiv, 'tel:');
tag('a', data.Contact.Email, contactDiv, 'mailto:');
tag('a', data.Contact.Profile, contactDiv, 'https://www.');
tag('a', data.Contact.Repository, contactDiv, 'https://www.');
headRow.appendChild(contactDiv);

// PRIMARY FUNCTION
// iterates through top level elements
for(let piece in data){
    if (piece != 'Name' && piece !='Contact' ) {
        let item = data[piece];
        const box = makeDiv(piece, 'section container');
        tag('h2', piece, box);

        const databox = makeDiv('data', 'set container');
        recurse(item, databox);

        box.appendChild(databox);
        document.getElementById('main').appendChild(box);
    }
}

// SECONDARY FUNCTIONS
// recursive call for nested data
function recurse(thing, div){
    for(const piece in thing){
        const item = thing[piece];
        if (item == null){
            continue;
        }
        if (Array.isArray(item)|| (typeof(item) === 'object')){
            collect(item, piece, div);
        }else{
            tag('p', item, div);
        }

    }
}

// collections should have titles
function collect(title, collection, div){
    // Div for the collection with title
    const box = makeDiv(collection, 'collection');
    if (collection ==='Responsibilities'){
        tag('h5', collection, box);
    }else{
        tag('h3', collection, box);
    }

    // Div for the data elements
    const data = makeDiv('data', 'set container');
    recurse(title, data);

    // Append things
    box.appendChild(data);
    div.appendChild(box);

}

// UTILITIES FUNCTIONS PREVENT REPETITION
// create divs
function makeDiv(div_id, div_class){
    let temp = document.createElement('div');
    temp.id = div_id;
    temp.className = div_class;
    return temp;
}

// create tags
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
