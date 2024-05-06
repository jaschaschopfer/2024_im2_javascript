function steuerrechner(einkommen, steuersatz, steuerfuss, freibetrag) {
    einkommen = einkommen * 12;
    if (einkommen <= freibetrag) {
        return 0;
    }
    else {
        let steuereinkommen = einkommen - freibetrag;
        let steuern = steuereinkommen/100 * steuersatz /100 * steuerfuss;
        return steuern;
    }
}

let MeinEinkommen = prompt("Enter einkommen:");
let MeinSteuersatz = prompt("Enter steuersatz:");
let MeinSteuerfuss = prompt("Enter steuerfuss:");
let MeinFreibetrag = prompt("Enter freibetrag:");

let meineSteuern = steuerrechner(MeinEinkommen, MeinSteuersatz, MeinSteuerfuss, MeinFreibetrag);
console.log(`Du zahlst pro Jahr ${meineSteuern} Franken Steuern.`);
