const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>
    {
        if(faq.classList.contains('active'))
        {
            faq.classList.remove('active')
        }
        else
        {
            faq.classList.add('active')
            faqs.forEach((otherFaq)=>{
                if(otherFaq != faq)
                {
                    otherFaq.classList.remove('active')
                }
            })
        }
    })
})

const signin = document.getElementById('Signin');
signin.addEventListener('click',()=>
{
    setTimeout(function(){
    window.location.href = "login.html";
    },500);

})

function NavigateToPageFilipino(){
    const selectElement = document.getElementById('english')
    const selectvalue = selectElement.value;
    setTimeout(function() {
        window.location.href = selectvalue;
      }, 500); 
    }

function NavigateToPageEnglish(){
    const selectElement = document.getElementById('filipino')
    const selectvalue = selectElement.value;
    setTimeout(function() {
        window.location.href = selectvalue;
      }, 500); 
}