/*global table, axe */

/**
 * Determine if a `HTMLTableCellElement` is a header
 * @param  {HTMLTableCellElement}  node The table cell to test
 * @return {Boolean}
 */
table.isHeader = function (cell) {
	if (table.isColumnHeader(cell) || table.isRowHeader(cell)) {
		return true;
	}

	if (cell.getAttribute('id')) {
		const id = axe.utils.escapeSelector(cell.getAttribute('id'));
		return !!document.querySelector(`[headers~="${id}"]`);
	}

	return false;
};
