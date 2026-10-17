export function ledgerCsv(rows){
 const cell=value=>{let text=String(value??'');if(/^[=+@\-]/.test(text))text="'"+text;return '"'+text.replaceAll('"','""')+'"'};
 return '\uFEFF'+[['cat','kind','value','note','logged_at'],...rows.map(r=>[r.cat_name,r.kind,r.value,r.note,r.logged_at])].map(row=>row.map(cell).join(',')).join('\r\n');
}
