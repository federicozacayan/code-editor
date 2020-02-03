class ExportFile {
    download() {
        let fileContent = localStorage.getItem('data') || [];
        var fileName = prompt("File name", "Demo");
        if (fileName != null) {
            const blob = new Blob([fileContent], { type: 'application/json' });
            const a = document.createElement('a');
            a.setAttribute('download', fileName);
            a.setAttribute('href', window.URL.createObjectURL(blob));
            a.click();
            
        }
        

    }

    downloadHTML() {
        document.querySelector('.styler').style = "display: none";
        let fileContent = '<!DOCTYPE html>'+document.querySelector('html').outerHTML;

        // let fileContent = localStorage.getItem('data') || [];
        var fileName = prompt("File name", "index");
        if (fileName != null) {
            const blob = new Blob([fileContent], { type: 'text/html' });
            const a = document.createElement('a');
            a.setAttribute('download', fileName);
            a.setAttribute('href', window.URL.createObjectURL(blob));
            a.click();
            document.querySelector('.styler').style = "display: block";
        }

    }
}
const Export = new ExportFile();
export default Export;