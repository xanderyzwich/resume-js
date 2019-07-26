"use strict";

var _data = _interopRequireDefault(require("./data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// add title
var name = _data.default.Name.first + ' ' + _data.default.Name.last;
document.title = name + ' - ROCKSTAR'; // main page container

var main = document.createElement('div');
main.id = 'main';
main.class = 'primary row';
document.body.appendChild(main); // page heading

var headDiv = makeDiv('Heading', 'container');
main.appendChild(headDiv); // skeleton row

headDiv.appendChild(makeDiv('headSpace', 'row'));
var headRow = makeDiv('headRow', 'row');
headDiv.appendChild(headRow); // add name

var nameDiv = makeDiv('Name', 'seven columns');
tag('h1', name, nameDiv);
headRow.appendChild(nameDiv); // add contact info

var contactDiv = makeDiv('Contact', 'five columns');
tag('a', _data.default.Contact.Phone, contactDiv, 'tel:');
tag('a', _data.default.Contact.Email, contactDiv, 'mailto:');
tag('a', _data.default.Contact.Profile, contactDiv, 'https://www.');
tag('a', _data.default.Contact.Repository, contactDiv, 'https://www.');
headRow.appendChild(contactDiv); // PRIMARY FUNCTION
// iterates through top level elements

for (var piece in _data.default) {
  //    console.log(piece);
  if (piece != 'Name' && piece != 'Contact') {
    var item = _data.default[piece]; //    console.log(item);

    var box = makeDiv(piece, 'section container');
    tag('h2', piece, box);
    var databox = makeDiv('data', 'set container');
    recurse(item, databox);
    box.appendChild(databox);
    document.getElementById('main').appendChild(box);
  }
} // SECONDARY FUNCTIONS
// recursive call for nested data


function recurse(thing, div) {
  for (var _piece in thing) {
    var _item = thing[_piece];

    if (_item == null) {
      continue;
    }

    if (Array.isArray(_item) || _typeof(_item) === 'object') {
      collect(_item, _piece, div);
    } else {
      //            console.log(item);
      tag('p', _item, div);
    }
  }
} // collections should have titles


function collect(title, collection, div) {
  // Div for the collection with title
  var box = makeDiv(collection, 'collection');

  if (collection === 'Responsibilities') {
    tag('h5', collection, box);
  } else {
    tag('h3', collection, box);
  } // Div for the data elements


  var data = makeDiv('data', 'set container');
  recurse(title, data); // Append things

  box.appendChild(data);
  div.appendChild(box);
} // UTILITIES FUNCTIONS PREVENT REPETITION
// create divs


function makeDiv(div_id, div_class) {
  var temp = document.createElement('div');
  temp.id = div_id;
  temp.className = div_class;
  return temp;
} // create tags


function tag(tag, data, parent) {
  var field = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var element = document.createElement(tag);
  var text = document.createTextNode(data);
  element.appendChild(text);
  parent.appendChild(element);

  if (tag === 'a') {
    element.href = field + data;
    parent.appendChild(document.createElement("br"));
  }
}
