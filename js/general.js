 $(window).load(function() {
	 $(".wrapper").css('opacity','1');
 });

/* Menu JS Start */
	$(document).ready(function(){
	$('#menu-icon').on('click', function(){
	  $('.navbar').toggleClass('expand');
	  return false;
	});
	
	$('.eu header .navbar ul li a').on('click', function(){
	  $('.navbar').removeClass('expand');
	  $('.menu-box').removeClass('active');
	  $("body").removeClass('add');
	});
	
  });
  $(".menu-box").bind("touch click", function () {
	  $(this).toggleClass("active");
  })
  
  $(document).ready(function(){
	$(".menu-box").on("click",function(){
	$("body").toggleClass("add");
	});
  });

/* Menu JS Ends */



//Form Validator
if($("#formDefualt").length){
    $("#formDefualt input[type=checkbox]").on("change", function(){
        $("#formDefualt").validate().element($(this)[0]);
    });
}

$(document).ready(function(){

            // Custom method to validate username
            $.validator.addMethod("usernameRegex", function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
            }, "Username must contain only letters, numbers");

            $(".next").click(function(){
                var form = $("#formDefualt");
                form.validate({
                    errorElement: 'span',
                    errorClass: 'help-block',
                    highlight: function(element, errorClass, validClass) {
                        $(element).closest('.form-group').addClass("has-error");
                    },
                    unhighlight: function(element, errorClass, validClass) {
                        $(element).closest('.form-group').removeClass("has-error");
                    },
                    rules: {
                        fname: {
                            required: true,
                        },
                        
                        mobile:{
                            required: true,
                        },
                        
                        email: {
                            required: true,
                            email: true,
                        },
                        checkbox:{
                            required: true,
                        },
                        otp:{
                            required: true,
                        },
                    },
                    messages: {
                        fname: {
                            required: "This field is required.",
                        },
                        mobile : {
                            required: "This field is required.",
                        },
                        
                        email: {
                            required: "This field is required.",
                            email: "Please enter a valid email address",
                            
                        },
                        checkbox: {
                            required: "This field is required.",
                        },
                        otp: {
                            required: "This field is required.",
                        },
                    },
                    errorPlacement: function (error, element) {
                        if ($(element).is("input")) {
                            error.insertAfter($(element).closest(".form-msg"));
                        } 
                        else if ($(element).is("select")) {
                            error.insertAfter($(element).closest(".form-msg"));
                        }
                        else {
                            error.insertAfter(element)
                        }
                    },
                    submitHandler: function(form) {
                        window.location = "thankyou.html"
                        
                      }
                });
                if (form.valid() === true){
                    if ($('#account_information').is(":visible")){
                        current_fs = $('#account_information');
                        next_fs = $('#company_information');
                    }
                    
                    next_fs.show();
                    current_fs.hide();
                }

                  
            });

            $('#previous').click(function(){
                if($('#company_information').is(":visible")){
                    current_fs = $('#company_information');
                    next_fs = $('#account_information');
                }else if ($('#personal_information').is(":visible")){
                    current_fs = $('#personal_information');
                    next_fs = $('#company_information');
                }
                next_fs.show();
                current_fs.hide();
            });

            
        });

	 
// slider
$('.slider_video').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
  ]
});

//After Before
$(document).ready(function () {
         
$(window).resize(function(){
    checkScreenSize();
});
         
function checkScreenSize(){
    var newWindowWidth = window.innerWidth;
    if (newWindowWidth < 969) {
    $(".product-list").detach().appendTo(".responsive-list");
               
               
    }
    else
    {
      $(".product-list").detach().appendTo(".product_desktop");
              
    }
}
// Execute on load
checkScreenSize();
// Bind event listener
$(window).resize(checkScreenSize);
});
