// // Underline active navbar links 

// let windowpathname=window.location.pathname;
// console.log(activePage);
// let navbar_links = document.querySelectorAll('.navbar-link');

//     navbar_links.forEach(link => {
//         console.log('Link Href:', link.href);
//         if (link.pathname === windowpathname){
//             link.classList.add('active')
//         } 
//         else{
//             link.classList.remove('active')
//         }
//     }) 
// document.addEventListener('DOMContentLoaded', function () {
//     let windowpathname = window.location.pathname;
//     console.log(windowpathname);
  
//     let navbar_links = document.querySelectorAll('.navbar-link');
  
//     navbar_links.forEach(link => {
//       // Compare the link's pathname with the current window's pathname
//       if (link.pathname === windowpathname) {
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });

    
  
//     // Add click event listeners to update the active state when a link is clicked
//     navbar_links.forEach(link => {
//       link.addEventListener('click', function () {
//         // Remove 'active' class from all links
//         navbar_links.forEach(navlink => navlink.classList.remove('active'));
//         // Add 'active' class to the clicked link
//         link.classList.add('active');
//       });
//     });
//   });

let navbar_links = document.querySelectorAll('.navbar-link');
navbar_links.forEach(link => {

    link.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        link.classList.add('active');

    })

})
