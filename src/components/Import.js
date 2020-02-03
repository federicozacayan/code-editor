class ImportFile {
    upload(e, render) {
        var file = e.target.files[0];
        var textType = 'application/json'    ;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                localStorage.setItem('data', reader.result);
                render(reader.result)
            }

            reader.readAsText(file);    
        } else {
            console.error('error', e)
        }
    }
}
const Import = new ImportFile();
export default Import;