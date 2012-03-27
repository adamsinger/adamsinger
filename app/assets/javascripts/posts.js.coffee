# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script

#= require build/src/ace
#= require build/src/theme-railscasts
#= require build/src/mode-markdown
#= require_self

jQuery ->
  editor = ace.edit("editor")
  editor.setTheme("ace/theme/railscasts")

  MarkDownMode = require("ace/mode/markdown").Mode
  editor.getSession().setMode new MarkDownMode
  editor.getSession().setTabSize 2
  editor.getSession().setUseSoftTabs true
  editor.getSession().setValue $("#post_body_markdown").val()
  editor.getSession().setUseWrapMode true

  $("form").submit -> 
    $("#post_body_markdown").val editor.getSession().getValue()

  $("input.publish").click ->
    $("#post_is_draft").val(false)

  $("input.draft").click ->
    $("#post_is_draft").val(true)