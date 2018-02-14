let handleImageClick = function(event) {
console.log("Howdy")

  let theImage = jQuery(this)
  let srcValue = theImage.attr("src")
  jQuery("#main-image").attr("src", srcValue)

}

jQuery("#thumbnails img").on("click",handleImageClick)
