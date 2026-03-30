// File Finder
// https://www.codewars.com/kata/59de9e6a28fcedb892000142

let directory = {
  'New folder': {
    'New folder': {}
  },
  'New folder (1)': {
    'New folder': {
      'funnyjoke.txt': 'lol i pranked you!!!',
    }
  },
  'New folder (2)': {},
  'funnyjoke.txt': 'lol i pranked you!!!',
};

function search(directory) {
  // if(Object.keys(directory).length !== 0) {

  // }
  // throw new Error('No files!');
}

// console.log(search(directory)); // New folder (1)/New folder/funnyjoke.txt

let dir = {
  'folder':{},
  'folder(1)':{'folder':{},'folder(1)':{},},
  'folder(2)':{'folder':{'folder':{},'joke.txt':'text'},'folder(1)':{}},
  'folder(3)':{},
}
// console.log(dir['folder(2)']['folder']['joke.txt']);