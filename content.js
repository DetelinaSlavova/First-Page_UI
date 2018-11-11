document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();
    // Get all element with class dropdown - Nodelist
    var dropdowns = document.querySelectorAll('.dropdown');

    //Add event to every element of the nodelist if it's class name is hideContent. Toogle class name to showContent.
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.addEventListener('click', function () {
            for (var numberOfChild = 0; numberOfChild < this.children.length; numberOfChild++) {
                if (this.children[numberOfChild].className === "hideContent") {
                    this.children[numberOfChild].classList.toggle('showContent')
                } else {
                    if (this.children[numberOfChild].classList.contains('showContent')) {
                        this.children[numberOfChild].classList.remove('showContent')
                    }
                }
            }
        })
    }
})