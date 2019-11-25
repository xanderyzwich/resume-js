import data from './data.js';

// add title
const name = data.head.name.first + ' ' + data.head.name.last;
document.title = name + ' - ROCKSTAR';

// main page container
const main = document.createElement('div');
main.id = 'main';
main.className = 'container primary'; // I'm dumb
document.body.appendChild(main);

// page heading
const headDiv = makeDiv('Heading', 'box');
main.appendChild(headDiv);

// skeleton row
//headDiv.appendChild(makeDiv('headSpace', 'row'))
const headRow = makeDiv('headRow', 'row');
headDiv.appendChild(headRow);

const nameDiv = makeDiv('Name', 'col s6 m7 l8');
tag('h1', name, nameDiv);
headRow.appendChild(nameDiv);

const contactDiv = makeDiv('Contact', 'col s6 m5 l4');
for(let entry in data.head.contact){
    tag('a', entry, contactDiv, data.head.contact[entry].url); // todo: cast entry to string
}
headRow.appendChild(contactDiv);

let headLevel = 2;

// Primary Function
for(var piece in data){
	if(piece === 'head'){	continue;	} // skip the header
	let item = data[piece];
	const box = makeDiv(piece, 'section row');
	tag(h_increment(), piece, box);

	const databox = makeDiv('data', 'set col s11 offset-s1');
	recurse(item, databox);

	box.appendChild(databox);
	document.getElementById('main').appendChild(box);
	h_decrement();
}
// SECONDARY FUNCTIONS
// recursive call for nested data
function recurse(thing, div){
	for(const piece in thing){
//		console.log(piece);
		const item = thing[piece];
		if (item == null){	continue;	}
        if (item === 'body'){
			recurse(item, div);
        }else if (Array.isArray(item) || typeof(item) === 'object'){
            collect(item, piece, div);
        }else{
            tag('p', item, div);
        }
    }
}

// UTILITIES FUNCTIONS PREVENT REPETITION
// create divs with given id and class
function makeDiv(div_id, div_class){
    let temp = document.createElement('div');
    temp.id = div_id;
    temp.className = div_class;
    return temp;
}
// create tags of given type
function tag(tag, data, parent, field = ''){
    let element = document.createElement(tag);
    let text = document.createTextNode(data);
    if (field!==''){
    	let link = document.createElement('a');
    	link.href = field;
    	link.appendChild(text);
    	element.appendChild(link);
	}else{
		element.appendChild(text);
    }
	parent.appendChild(element);
	if (tag ==='a'){
        element.href = field;
        parent.appendChild(document.createElement("br"));
    }
}
// collections should have titles
function collect(title, collection, div){
    // Div for the collection with title
    const box = makeDiv(collection, 'list');
    if (collection.hasOwnProperty('url')){
    	console.log("I found a URL on " + collection)
		tag(h_increment(), collection, box, collection['url']);
	}else{
//		console.log("no url on" + collection)
    	tag(h_increment(), collection, box);
	}
    // Div for the data elements
    const data = makeDiv('data', 'set col s11 offset-s1');
    recurse(title, data);
    h_decrement();
    // Append things
    box.appendChild(data);
    div.appendChild(box);
}
// increment and decrement header level
function h_increment(){
	let h_string = 'h' + headLevel;
	headLevel += 1;
	return h_string;
}
function h_decrement(){
	headLevel -= 1
}