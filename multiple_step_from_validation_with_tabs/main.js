const tabs = document.querySelectorAll("a[custom-toggle='tab']");

var visible_tab = document.querySelector(".active_tab");

function vshow_elm(elm){
    elm.classList.add("visible");
};

function vhide_elm(elm){
    elm.classList.remove("visible");
};

function invalid_input(tooltip, tooltip_text){
    tooltip.innerText = tooltip_text;
    vshow_elm(tooltip);
}

function validate_email(email, tooltip){
    if (email.validity.valueMissing) {
        invalid_input(tooltip, 'ইমেইল দিতে হবে');
    }
    else if (email.validity.typeMismatch) {
        invalid_input(tooltip, 'ইমেইল ঠিক নেই');
    } 
    else {
        vhide_elm(tooltip);
    };
};

function email_check(email){
    var tooltip = email.nextElementSibling;
    email.addEventListener('focus', (event) => {
        validate_email(email, tooltip);
    });
    email.addEventListener('input', (event) => {
        validate_email(email, tooltip);
    });
    email.addEventListener('focusout', (event) => {
        vhide_elm(tooltip);
    });
};

function validate_name(name, tooltip){
    if (name.validity.valueMissing) {
        invalid_input(tooltip, 'নাম দিতে হবে');
    }
    else {
        vhide_elm(tooltip);
    }
};

function name_check(fname){
    var fname_tooltip = fname.nextElementSibling;
    fname.addEventListener('input', (event) => {
        validate_name(fname, fname_tooltip);
    });
    fname.addEventListener('focus', (event) => {
        validate_name(fname, fname_tooltip);
    });

    fname.addEventListener('focusout', (event) => {
        vhide_elm(fname_tooltip);
    });
};

// function validate_email(email, tool_tip){
//     if (email.validity.valueMissing) {
//         tool_tip.innerText = 'ইমেইল দিতে হবে';
//         // showing tooltip by adding bs visible class
//         tool_tip.classList.add('visible');
//         // console.log('email missing!');
//     }
//     else if (email.validity.typeMismatch) {
//         tool_tip.innerText = 'ইমেইল ঠিক নেই';
//         // showing tooltip by adding bs visible class
//         tool_tip.classList.add('visible');
//         // console.log('email type mismatched!');
//     } 
//     else {
//         // hiding tooltip by removing bs visible class
//         tool_tip.classList.remove('visible');
//         // console.log('email validated.');
//     };

// };

// function email_check(email){

//     var tool_tip = email.nextElementSibling;
//     // console.log(tool_tip);

//     email.addEventListener('focus', (event) => {
//         // console.log('Email focused: ', email);
//         validate_email(email, tool_tip);
//     });
    
//     email.addEventListener('input', (event) => {
//         // console.log('Input Triggered!')
//         validate_email(email, tool_tip);
//     });

//     email.addEventListener('focusout', (event) => {
//         tool_tip.classList.remove('visible');
//         // console.log('tool_tip visibility removed');
//     });

// };

// function validate_name(name, tooltip){
//     if (name.validity.valueMissing) {
//         tooltip.innerText = 'নাম দিতে হবে';
//         tooltip.classList.add('visible');
//     } 
//     else {
//         tooltip.classList.remove('visible');
//     }
// }




tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
        event.preventDefault();
        if (!tab.classList.contains("active_tab")) {
            // selecting from link to tab
            var tab_id = tab.getAttribute("href");
            tab_id = tab_id.slice(1, tab_id.length); 
            var tab_pane = document.getElementById(tab_id);
            
            // selecting form tab to link
            var visible_tab = document.querySelector(".tab_pane:not(.d-none)");
            var visible_tab_id = visible_tab.getAttribute("id");
            var selector = 'a[href="#'+visible_tab_id+'"]';
            var tab_link = document.querySelector(selector);
            // console.log(tab_link);

            tab_link.classList.remove('active_tab');
            visible_tab.classList.add("d-none");

            tab.classList.add("active_tab");
            // console.log('clicked: ' + tab)
            // console.log(tab_id.slice(1, tab_id.length));
            tab_pane.classList.remove("d-none");
        }
    });
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          var email = form.querySelector("input[type='email']");
          var fname = form.querySelector("input[name='fname']");
          email_check(email);
          name_check(fname);

        };
  
        form.classList.add('was-validated');
      }, false)
    })

  })()













// var email = visible_tab.querySelector("input[type='email']");
// var fname = visible_tab.querySelector("input[name='fname']");
// const submits = document.querySelectorAll("button[type='submit']");
// var submit = document.querySelector("button[type='submit']");
// console.log(submits);

// var n=0;

// function get_it(elm){
//     console.log(elm);
//     return(elm);
// };


// function is_valid(elm){
//     elm.classList.remove("is-invalid");
// };

// function is_invalid(elm){
//     elm.classList.add("is-invalid");
// };

// function test_func(email){
//     console.log('email is slkajs focused', email);
// }

// parent.classList. contains()


// function email_check(email){

        // if(n == 1){
        //     // console.log('email is focused after first submission');
        //     if (email.validity.valueMissing) {
        //         email.setCustomValidity("ইমেইল দিতে হবে");
        //         // email.className = "form-control is-invalid";
        //         // is_invalid(email);
        //         console.log('email missing!');
        //     }
        //     else if (email.validity.typeMismatch) {
        //         email.setCustomValidity("ইমেইল ঠিক নাই, ইমেইল দেন !");
        //         // email.className = "form-control is-invalid";
        //         // is_invalid(email);
        //         console.log('email type mismatched!');
        //     } 
        //     else {
        //         email.setCustomValidity("");
        //         // email.className = "form-control";
        //         // is_valid(email);
        //         console.log('email validated.');
        //     }
        // };

        // if(n > 1){
        //     // console.log('email is focused after first submission');
        //     if (email.validity.valueMissing) {
        //         email.setCustomValidity("ইমেইল না দিলে হবে না!");
        //         // email.className = "form-control is-invalid";
        //         // is_invalid(email);
        //         console.log('email type mismatched!');
        //     }
        //     else if (email.validity.typeMismatch) {
        //         email.setCustomValidity("এইডা কোন ইমেইল হইলো?");
        //         // email.className = "form-control is-invalid";
        //         // is_invalid(email);
        //         console.log('email missing!');
        //     } 
        //     else {
        //         email.setCustomValidity("");
        //         // email.className = "form-control";
        //         // is_valid(email);
        //         console.log('email validated.');
        //     }
        // };

//     });
// }



// document.body.onclick = function(event) {
//     console.log('clicked in body');
//     var visible_tooltip = document.querySelector("._tooltip_text.visible");
//     if (visible_tooltip){
//         console.log('found visible tooltip: ', visible_tooltip);
//         visible_tooltip.classList.remove('visible');
//     }
// }





// function name_check(fname){
//     fname.addEventListener('input', (event) => {
//         if (n==1){
//             if (fname.validity.valueMissing) {
//                 fname.setCustomValidity("আপনার নাম দেন ।");
//                 // fname.className = "form-control is-invalid";
//                 is_invalid(fname);
//                 // console.log('fname value missing!');
//             } 
//             else {
//                 fname.setCustomValidity("");
//                 // fname.className = "form-control";
//                 is_valid(fname);
//                 // console.log('fname validated.');
//             }
//         };
//         // if (n > 1){
//         //     if (fname.validity.valueMissing) {
//         //         fname.setCustomValidity("নাম নাই আপনার?");
//         //         // fname.className = "form-control is-invalid";
//         //         is_invalid(fname);
//         //         // console.log('fname value missing!');
//         //     } 
//         //     else {
//         //         fname.setCustomValidity("");
//         //         // fname.className = "form-control";
//         //         is_valid(fname);
//         //         // console.log('fname validated.');
//         //     }
//         // };
//     });
// }


// function submit_check(submit){
//     submit.addEventListener("click", (event) => {
//         console.log(email);
//         if (email.validity.valueMissing) {
//           email.setCustomValidity("ইমেইল দিতে হবে");
//         //   email.className = "form-control is-invalid";
//         is_invalid(email);
//         //   console.log('email type mismatched!');
//         }
//         else if (email.validity.typeMismatch) {
//           email.setCustomValidity("ইমেইল ঠিক নাই, ইমেইল দেন !");
//         //   email.className = "form-control is-invalid";
//         is_invalid(email);
//         //   console.log('email missing!');
//         } 
//          else {
//           email.setCustomValidity("");
//         //   email.className = "form-control";
//         is_valid(email);
//         //   console.log('email validated.');
//         }
    
//         if (fname.validity.valueMissing) {
//           fname.setCustomValidity("আপনার নাম দেন ।");
//         //   fname.className = "form-control is-invalid";
//         is_invalid(fname);
//         //   console.log('fname value missing!');
//         } else {
//           fname.setCustomValidity("");
//         //   fname.className = "form-control";
//         is_valid(fname);
//         //   console.log('fname validated.');
//         }
//         n += 1;
//         // console.log(n);
//         console.log('submit button clicked');
//       });
// }

// email_check(email);
// name_check(fname);
// submit_check(submit);






// var active_input = document.activeElement;
// console.log(active_input)

// function is_focused(elm){
//     // return elm.activeElement; 
//     elm.addEventListener('focus', (event) => {
//         console.log('element is focused');
//         return true;
//     });
//     // console.log('element is not focused');
//     // return false;
// };

// active_input.removeProperty("is-invalid");

// if(is_focused(email)){
//     // email.style.removeProperty("is-invalid");
//     console.log('email is focused');
// };

// if(is_focused(fname)){
//     // email.style.removeProperty("is-invalid");
//     console.log('fname is focused');
// };

// email.addEventListener('focus', (event) => {
//     if(n >= 1){
//         console.log('email is focused');
//         // email.style.removeProperty("is-invalid");
//         email.className = "form-control";
    
//         if (fname.validity.valueMissing) {
//         fname.className = "form-control is-invalid";
//         // console.log('fname value missing!');
//         } else {
//         // console.log('fname validated.');
//         fname.style.removeProperty("is-invalid");
//         }
//     }

// });

// fname.addEventListener('focus', (event) => {
//     if(n >= 1){
//         console.log('fname is focused');
//         // fname.style.removeProperty("is-invalid");
//         fname.className = "form-control";

//         // email.className = "form-control";
//         if (email.validity.typeMismatch) {
//             email.className = "form-control is-invalid";
//             // console.log('email type mismatched!');
//           }
//           else if (email.validity.valueMissing) {
//             email.className = "form-control is-invalid";
//             // console.log('email missing!');
//           } 
//            else {
//             // console.log('email validated.');
//             email.style.removeProperty("is-invalid");
//           }
//     }
// });

// email.addEventListener('input', (event) => {
//     if(n >= 1){
//         // console.log('email is focused after first submission');
//         if (email.validity.typeMismatch) {
//             email.setCustomValidity("I am expecting an email address!");
//             // email.className = "form-control is-invalid";
//             is_invalid(email);
//             // console.log('email type mismatched!');
//         }
//         else if (email.validity.valueMissing) {
//             email.setCustomValidity("You have to provide an email address!");
//             // email.className = "form-control is-invalid";
//             is_invalid(email);
//             // console.log('email missing!');
//         } 
//         else {
//             email.setCustomValidity("");
//             // email.className = "form-control";
//             is_valid(email);
//             // console.log('email validated.');
//         }
//     };
// });

// fname.addEventListener('input', (event) => {
//     if (n >= 1){
//         if (fname.validity.valueMissing) {
//             fname.setCustomValidity("Please enter your name");
//             // fname.className = "form-control is-invalid";
//             is_invalid(fname);
//             // console.log('fname value missing!');
//         } 
//         else {
//             fname.setCustomValidity("");
//             // fname.className = "form-control";
//             is_valid(fname);
//             // console.log('fname validated.');
//         }
//     };
// });


// fname.addEventListener('focus', (event) => {
//     // fname.className = "form-control";
//     // console.log('fname is focused');
// });



// submit.addEventListener("click", () => {
//     // console.log(email);

//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("I am expecting an email address!");
//     //   email.className = "form-control is-invalid";
//     is_invalid(email);
//     //   console.log('email type mismatched!');
//     }
//     else if (email.validity.valueMissing) {
//         email.setCustomValidity("You have to provide an email address!");
//     //   email.className = "form-control is-invalid";
//     is_invalid(email);
//     //   console.log('email missing!');
//     } 
//         else {
//         email.setCustomValidity("");
//     //   email.className = "form-control";
//     is_valid(email);
//     //   console.log('email validated.');
//     }

//     if (fname.validity.valueMissing) {
//         fname.setCustomValidity("Please enter your name");
//     //   fname.className = "form-control is-invalid";
//     is_invalid(fname);
//     //   console.log('fname value missing!');
//     } else {
//         fname.setCustomValidity("");
//     //   fname.className = "form-control";
//     is_valid(fname);
//     //   console.log('fname validated.');
//     }
//     n += 1;
//     // console.log(n);
//     console.log('submit button clicked');
// });


// submits.forEach((submit) => {
    
//     submit.addEventListener("click", () => {

//     // console.log(email);

//     if (email.validity.typeMismatch) {
//       email.setCustomValidity("I am expecting an email address!");
//     //   email.className = "form-control is-invalid";
//     is_invalid(email);
//     //   console.log('email type mismatched!');
//     }
//     else if (email.validity.valueMissing) {
//       email.setCustomValidity("You have to provide an email address!");
//     //   email.className = "form-control is-invalid";
//     is_invalid(email);
//     //   console.log('email missing!');
//     } 
//      else {
//       email.setCustomValidity("");
//     //   email.className = "form-control";
//     is_valid(email);
//     //   console.log('email validated.');
//     }

//     if (fname.validity.valueMissing) {
//       fname.setCustomValidity("Please enter your name");
//     //   fname.className = "form-control is-invalid";
//     is_invalid(fname);
//     //   console.log('fname value missing!');
//     } else {
//       fname.setCustomValidity("");
//     //   fname.className = "form-control";
//     is_valid(fname);
//     //   console.log('fname validated.');
//     }
//     n += 1;
//     // console.log(n);
//     console.log('submit button clicked');
//   });
// })




// var tooltips = document.querySelectorAll('._tooltip');
// console.log(tooltips);

// tooltips.forEach((tooltip) => {
//     var elm = tooltip.querySelector('input');
//     var elmType = elm.getAttribute('name');
//     console.log(elm);
//     console.log(elmType);
//     elm.addEventListener('click', (event) => {
//         if (elmType == 'email'){
//             var tooltipText = tooltip.querySelector('._tooltip_text');
//             tooltipText.innerText = "ইমেইল না দিলে হবে না!";
//         }
//     });
// })

// const emails = document.querySelectorAll("input[type='email']"); 
// emails.forEach((email) => {
//     email.addEventListener('focusout', (event) => {
//         // console.log('Email lost focus: ', email);
//         var toll_tip = email.nextElementSibling;
//         toll_tip.classList.remove('visible');
//         // console.log('tool_tip visibility removed');
//     });
// });

  
  