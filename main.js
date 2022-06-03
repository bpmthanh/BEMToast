function toast({title='', message='',type='info',duration=3000}) {
    const main=document.getElementById('toast')
    if(main){
        const toast=document.createElement('div')

        const autoRemoveId=setTimeout(function(){
            main.removeChild(toast)
        },duration+1000)

        toast.onclick=function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }
        const icons={
            success:'fa-solid fa-circle-check',
            error:'fa-solid fa-circle-xmark',
            warning:'fa-solid fa-xmark'
        }
        const icon=icons[type]
        const delay =(duration/1000).toFixed(2);
        toast.classList.add('toast',`toast--${type}`)
        toast.style.animation=`sildeInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
        <div class="toast__icon">
           <i class="${icon}"></i>
        </div>

        <div class="toast__body">
           <h2 class="toast__title">${title}</h2>
           <p class="toast__msg">${message}</p>
        </div>

        <div class="toast__close">
           <i class="fa-solid fa-xmark"></i>
        </div>`
    
        main.appendChild(toast)// Ham nay dung de them 1 the con vao id toast
        
    }
}

// toast(
//     {
//         title: 'Success',
//         message: 'Your account has beeen saved',
//         type: 'success',
//         duration: 3000
//     })

function showSuccessToast(){
    toast(
        {
            title: 'Success',
            message: 'Your account has been saved',
            type: 'success',
            duration: 2000
        });
}
function showErrorToast(){
    toast(
        {
            title: 'Error',
            message: 'Your email address is invalid',
            type: 'error',
            duration: 2000
        });
}
function showWarningToast(){
    toast(
        {
            title: 'Warning',
            message: 'Don\'t forget to enter your email',
            type: 'warning',
            duration: 2000
        });
}