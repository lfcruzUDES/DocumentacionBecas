/// <reference path="Settings.ts" />

/**
 * Crea un rango con los datos de la hoja.
 */
function set_range() {
    let book = SpreadsheetApp.openByUrl(SETTINGS.BOOK);
    let sheet = book.getSheetByName(SETTINGS.SHEET_DATA);
    let range = sheet?.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn());
    book.setNamedRange(SETTINGS.RANGE_NAME, range);
}