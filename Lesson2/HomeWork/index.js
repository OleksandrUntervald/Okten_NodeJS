// Створити папку “baseFolder”.
// В ній створити 5 папок
// в кожній з яких створити по 5 файлів з розширенням txt.
// Вивести в консоль шляхи до кожного файлу чи папки, також вивести поряд інформацію про те, чи є це файл чи папка.
const fsPromises = require('node:fs/promises');
const path = require('node:path')


const foo = async () => {

    const baseDir = (path.join(__dirname, 'base-folder'));
    await fsPromises.mkdir(baseDir, {recursive: true});

    await fsPromises.mkdir(path.join(__dirname, 'base-folder', 'folder1'), {recursive: true});
    await fsPromises.mkdir(path.join(__dirname, 'base-folder', 'folder2'), {recursive: true});
    await fsPromises.mkdir(path.join(__dirname, 'base-folder', 'folder3'), {recursive: true});
    await fsPromises.mkdir(path.join(__dirname, 'base-folder', 'folder4'), {recursive: true});
    await fsPromises.mkdir(path.join(__dirname, 'base-folder', 'folder5'), {recursive: true});

    for (let i = 1; i < 6; i++){
        await fsPromises.writeFile(path.join(__dirname, 'base-folder', 'folder1', `file${i}.txt`), `file${i}.txt`);
        await fsPromises.writeFile(path.join(__dirname, 'base-folder', 'folder2', `file${i}.txt`), `file${i}.txt`);
        await fsPromises.writeFile(path.join(__dirname, 'base-folder', 'folder3', `file${i}.txt`), `file${i}.txt`);
        await fsPromises.writeFile(path.join(__dirname, 'base-folder', 'folder4', `file${i}.txt`), `file${i}.txt`);
        await fsPromises.writeFile(path.join(__dirname, 'base-folder', 'folder5', `file${i}.txt`), `file${i}.txt`);

    }

    for (let f = 1; f <= 5; f++) {
        const folderPath = path.join(baseDir, `folder${f}`);
        console.log(folderPath, '- directory');

        for (let i = 1; i <= 5; i++) {
            const filePath = path.join(folderPath, `file${i}.txt`);
            console.log(filePath, '- file');
        }
    }






}

void foo();