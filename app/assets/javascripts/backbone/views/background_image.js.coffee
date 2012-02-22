window.BackgroundImage = class BackgroundImage extends Backbone.View
  el: "#back"

  initialize: ->
    _.bindAll @, "getImageAttributes", "updateImageDimensions"
    @initializeImage()
    $(window).resize @updateImageDimensions

  initializeImage: ->
    @image = new Image
    @image.onload = @getImageAttributes
    @image.src = "/assets/adam.jpg"
    $(@el).html @image

  getImageAttributes: ->
    @image = $(@el).find("img")
    @imageWidth = @image.width()
    @imageHeight = @image.height()
    @imageRatio = @imageWidth / @imageHeight
    @updateImageDimensions()


  updateImageDimensions: ->
    width = $(window).width()
    height = $(window).height()
    ratio = width / height
    $(@el).css width: "#{width}px", height: "#{height}px"
    if ratio > @imageRatio
      @image.width(width)
      newHeight = width / @imageRatio
      @image.height(newHeight)
      @image.css top: "-#{(newHeight - height) / 2}px", left: "0px"
    else
      @image.height(height)
      newWidth = height * @imageRatio
      @image.width(newWidth)
      @image.css left: "-#{(newWidth - width) / 2}px", top: "0px"

