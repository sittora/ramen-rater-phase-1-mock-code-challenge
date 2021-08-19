// write your code here
// See all ramen images in the `div` with the id of `ramen-menu`.
//  When the page loads, request the data from the server to get all the ramen objects. 
//  Then, display the image for each of the ramen using an an `img` tag inside the `#ramen-menu` div.


const ramenMenu = document.querySelector(`div#ramen-menu`);

fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenArr => {

        ramenArr.forEach(ramenObject => {
            function renderRamenImg (ramenObject){

            }
        })
    })

    // Click on an image from the `#ramen-menu` div and 
    // see all the info about that ramen displayed inside the `#ramen-detail` div,
    //  as well as the current rating and comment for the ramen displayed in the `#ramen-rating` form.



    // Create a new ramen after submiting the `new-ramen` form. 
    // The new ramen should be added to the`#ramen-menu` div.  
    // The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
    const newRamenForm = document.querySelector('#new-ramen')

    newRamenForm.addEventListener('submit', event => {
        event.preventDefault()
        

       const nameInput = event.target.name.value
       const restaurantInput = event.target.restaurant.value
       const imageInput = event.target.image.value
       const ratingtInput = event.target.rating.value
       const commentInput = event.target.['new-comment'].value

       const newRamen = {
           name:nameInput,
           restaurant: restaurantInput,
           image: imageInput,
           rating: ratingtInput,
           comment: commentInput
       }
       renderRamenImg(newRamen)
    })

    function renderRamenImg {ramenObject} {
        console.log (ramenObject)
        const imgTag = document.createElement('img')
        console.log(imgTag)

        imgTag.src = ramenObject.image
        ramenMenu.append(imgTag)

        imgTag.addEventListener('click', event => {
            console.log(ramenObject)
        
        const detailImg = document.querySelector('img.detail-image')
        detailImg.src = ramenObject.image

        const nameH2 = document.querySelector('.name')
        nameH2.textContent = ramenObject.name

        const restaurantH3 = document.querySelector('h3.restaurant')
        restaurantH3.textContent = ramenObject.restaurant

        const ratingSpan = document.querySelector('#rating-display')
        ratingSpan.textContent = ramenObject.rating

        const commentPtag = document.querySelector('#comment-display')
        commentPtag.textContent = ramenObject.comment
        })
    }

// NOT FINISHED YET!