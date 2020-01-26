const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');
window.addEventListener('load', createTree(structure,rootNode));

function createTree(structure, node) {
    const list = document.createElement('ul');
    node.appendChild(list);
    if (list.parentNode !== rootNode) {
        list.classList.toggle('hide');
    }

    for (let item of structure) {
        const content = document.createElement('div');
        const title = document.createElement('span');
        const listChild = document.createElement('li');
        const img = document.createElement('i');


        img.classList.add('material-icons');
        content.appendChild(img);
        content.appendChild(title);
        title.innerHTML = item.title;
        listChild.appendChild(content);
        list.appendChild(listChild);
        if (item.folder) {
            content.classList.toggle('folder');
            img.innerText = 'folder';
            content.addEventListener('click', function() {
                img.innerText === 'folder' ? img.innerText = 'folder_open' : img.innerText = 'folder';
                listChild.querySelector('.hide').classList.toggle('show');
            });
            if (item.children) {
                createTree(item.children, listChild);
            } else {
                let poor_folder = document.createElement('div');
                poor_folder.classList.add('poor_folder', 'hide');
                poor_folder.innerText = 'Folder is empty';
                listChild.appendChild(poor_folder);
            }
        } else {
            content.classList.toggle('name');
            img.innerText = 'insert_drive_file';
            img.classList.add('file_image');
        }
    }
}