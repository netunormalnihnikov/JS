// 1. Создать функцию, генерирующую шахматную доску.При этом можно использовать любые
// html - теги по своему желанию. Доска должна быть разлинована соответствующим образом,
// т.е.чередовать черные и белые ячейки.Строки должны нумероваться числами от 1 до 8,
// столбцы – латинскими буквами A, B, C, D, E, F, G, H.

const chess = {
    gameContainerElemnent: document.getElementById('chess'),

    renderMap() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1];
        const cols = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerElemnent.appendChild(tr);

            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (rows[row] === 0 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                } else if (cols[col] === 0 && rows[row] !== 0) {
                    td.innerHTML = rows[row].toString();
                }

                if (this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = 'grey';
                }
            }
        }
    },

    isCellIsBlack(rowNum, colNum) {
        if (rowNum === 0 || colNum === 0) {
            return false;
        }

        return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
    },
};

chess.renderMap();