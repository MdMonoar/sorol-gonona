$(function() {
    const tabs = $("a[custom-toggle='tab']");
    const forms = $('form.needs-validation');
    // var visible_tab = $(".tab_pane.visible_tab");

    // multiple tab functionality
    $.each(tabs, (_, tab) => {
        // console.log(tab);
        $(tab).on("click", (event) => {
            event.preventDefault();
            if (!tab.classList.contains("active_tab")) {
                // selecting from link to tab
                var tab_id = $(tab).attr("href");
                tab_id = tab_id.slice(1, tab_id.length);
                var tab_pane = $(`#${tab_id}`);

                // selecting form tab to link
                var visible_tab = $(".tab_pane:not(.d-none)");
                // var visible_tab = document.querySelector(".tab_pane:not(.d-none)");
                var visible_tab_id = $(visible_tab).attr("id");
                var tab_link = $(`a[href="#${visible_tab_id}"]`);
                // console.log(tab_link);

                $(tab_link).removeClass('active_tab');
                $(visible_tab).addClass("d-none");
                
                $(tab).addClass("active_tab");
                // tab.classList.add('active_tab');
                tab_pane.removeClass("d-none");
            }
        })
    })

    // console.log(forms);
    forms.each((_, form) => {
        // console.log(form);
        $(form).on("submit", event => {
            // console.log('submit button clicked');
            event.preventDefault();
            // event.stopPropagation()
            if (!form.checkValidity()) {
                // console.log(form);
                var email = $(form).find('input[type="email"]')[0];
                // console.log('email: ',email);
                var fname = $(form).find("input[name='fname']")[0];
                // email_check(email);
                // name_check(fname);
                input_checker(email, validate_email);
                input_checker(fname, validate_name);
            }
            else{
                console.log('form is valid')
                var current_tab = $(".tab_pane:not(.d-none)")[0];
                var current_tab_id = $(current_tab).attr("id");
                // current_tab_id = '#' + current_tab_id;
                var last_tab_id = tabs[tabs.length-1].getAttribute("href");
                last_tab_id = last_tab_id.slice(1,last_tab_id.length)
                // console.log(`#${current_tab_id}`, last_tab_id);
                // console.log(current_tab_id, last_tab_id);
                // console.log(typeof(`#${current_tab_id}`));
                if(current_tab_id != last_tab_id){
                    console.log(current_tab_id, last_tab_id)
                    next_tab_id = current_tab_id.slice(0, current_tab_id.length-1) + String(Number(current_tab_id[current_tab_id.length-1])+1)
                    // console.log(current_tab_id, next_tab_id);
                    next_tab = $(".tab_pane"+`#${next_tab_id}`)[0];
                    // console.log(current_tab, next_tab);

                    var current_tab_link = $(`a[href="#${current_tab_id}"]`)[0];
                    var next_tab_link = $(`a[href="#${next_tab_id}"]`)[0];
                    console.log(current_tab_link, next_tab_link)

                    $(current_tab_link).removeClass('active_tab');
                    $(current_tab).addClass("d-none");

                    $(next_tab_link).addClass('active_tab');
                    $(next_tab).removeClass("d-none");
                };
                
            }
            $(form).addClass('was-validated');
        })
    })


    function input_checker(element, validator){
        var elm_tooltip = element.nextElementSibling; // tooltip must be the imediate nex sibling to the element
        $(element).on('focus', () => {
            validator(element, elm_tooltip);
        });
    
        $(element).on('input', () => {
            validator(element, elm_tooltip);
        });
    
        $(element).on('focusout', () => {
            vhide_elm(elm_tooltip);
        });
    };




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

    // function email_check(email){
    //     var tooltip = email.nextElementSibling;
    //     $(email).on('focus', () => {
    //         validate_email(email, tooltip);
    //     });
    //     $(email).on('input', () => {
    //         validate_email(email, tooltip);
    //     });
    //     $(email).on('focusout', () => {
    //         vhide_elm(tooltip);
    //     });
    // };

    function validate_name(name, tooltip){
        if (name.validity.valueMissing) {
            invalid_input(tooltip, 'নাম দিতে হবে');
        }
        else {
            vhide_elm(tooltip);
        }
    };

    // function name_check(fname){
    //     var fname_tooltip = fname.nextElementSibling;
    //     $(fname).on('focus', () => {
    //         validate_name(fname, fname_tooltip);
    //     });
    //     $(fname).on('input', () => {
    //         validate_name(fname, fname_tooltip);
    //     });

    //     $(fname).on('focusout', () => {
    //         vhide_elm(fname_tooltip);
    //     });
    // };

    $("marquee[id='bragFoot']").text('Functionalised by jQuery');
    // document.getElementById("bragFoot").innerText = 'red';
});


