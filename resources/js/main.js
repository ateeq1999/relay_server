let form = document.querySelector("form")
let fileInput  = form.querySelector(".fileInput")
let progressArea = document.querySelector(".progress-area")
let uploadedArea = document.querySelector(".uploaded-area")

form.addEventListener('click', () => {
    fileInput.click();
})

fileInput.onchange = ({target}) => {
    let file = target.files[0]
    if(file){
        let fileName = file.name
        if (fileName.length >= 12) {
            let splitName = fileName.split('.')
            fileName = splitName[0].substring(0, 12) + '... .' + splitName[1]
        }
        uploadFile(fileName)
    }
    console.log(target.files)
}

function uploadFile(name){
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:3333/upload/minio")
    xhr.upload.addEventListener("progress", ({loaded, total}) => {
        let fileLoaded = Math.floor((loaded / total ) * 100)
        let fileTotal = Math.floor(total / 1000)
        let progressHTML = `<li class="row">
                                <i class="fas fa-file-alt"></i>
                                <div class="content">
                                    <div class="details">
                                        <span class="name">${name} * uploading</span>
                                        <span class="precent">${fileLoaded}%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress" style="width: ${fileLoaded}%"></div>
                                    </div>
                                </div>
                            </li>`
        progressArea.innerHTML = progressHTML
        
        if (loaded == total) {
            let MB_SIZE = Math.floor(fileTotal / 1024)
            let FILE_DISPLAY_FORMAT = 'MB'

            if(MB_SIZE >= 1024){
                MB_SIZE = Math.floor(MB_SIZE / 1024)
                FILE_DISPLAY_FORMAT = 'GB'
            }

            console.log(MB_SIZE)
            progressArea.innerHTML = ""
            
            let uploadedHTML = `<li class="row">
                                    <i class="fas fa-file-alt"></i>
                                    <div class="content">
                                        <div class="details">
                                            <span class="name">${name} * uploaded</span>
                                            <span class="size">${MB_SIZE} ${FILE_DISPLAY_FORMAT}</span>
                                        </div>
                                    </div>
                                    <i class="fas fa-check"></i>
                                </li>`
            uploadedArea.insertAdjacentHTML('afterbegin',uploadedHTML)
        }

    })
    let formData = new FormData(form)
    xhr.send(formData)
}