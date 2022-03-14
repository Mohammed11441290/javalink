document.getElementById('copy-btn').onclick = function(){
    navigator.clipboard.writeText(document.getElementById('text-copy').innerText).then(function(){
        console.log('text is copy')
    })
}
document.getElementById('copy-btn-2').onclick = function(){
    navigator.clipboard.writeText(document.getElementById('text-copy-2').innerText).then(function(){
        console.log('text is copy')
    })
}
document.getElementById('copy-btn-3').onclick = function(){
    navigator.clipboard.writeText(document.getElementById('text-copy-3').innerText).then(function(){
        console.log('text is copy')
    })
}
document.getElementById('copy-btn-4').onclick = function(){
    navigator.clipboard.writeText(document.getElementById('text-copy-4').innerText).then(function(){
        console.log('text is copy')
    })
}