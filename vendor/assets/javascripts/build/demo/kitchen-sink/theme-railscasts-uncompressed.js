
define('ace/theme/railscasts', ['require', 'exports', 'module' , 'pilot/dom'], function(require, exports, module) {

    var dom = require("pilot/dom");

    var cssText = "\
.ace--railscasts .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace--railscasts .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace--railscasts .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace--railscasts .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace--railscasts .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace--railscasts .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace--railscasts .ace_scroller {\
  background-color: #2B2B2B;\
}\
\
.ace--railscasts .ace_text-layer {\
  cursor: text;\
  color: #E6E1DC;\
}\
\
.ace--railscasts .ace_cursor {\
  border-left: 2px solid #FFFFFF;\
}\
\
.ace--railscasts .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FFFFFF;\
}\
 \
.ace--railscasts .ace_marker-layer .ace_selection {\
  background: rgba(90, 100, 126, 0.88);\
}\
\
.ace--railscasts .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace--railscasts .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #404040;\
}\
\
.ace--railscasts .ace_marker-layer .ace_active_line {\
  background: #333435;\
}\
\
       \
.ace--railscasts .ace_invisible {\
  color: #404040;\
}\
\
.ace--railscasts .ace_keyword {\
  color:#CC7833;\
}\
\
.ace--railscasts .ace_keyword.ace_operator {\
  \
}\
\
.ace--railscasts .ace_constant {\
  color:#6D9CBE;\
}\
\
.ace--railscasts .ace_constant.ace_language {\
  color:#6E9CBE;\
}\
\
.ace--railscasts .ace_constant.ace_library {\
  \
}\
\
.ace--railscasts .ace_constant.ace_numeric {\
  color:#A5C261;\
}\
\
.ace--railscasts .ace_invalid {\
  color:#FFFFFF;\
background-color:#990000;\
}\
\
.ace--railscasts .ace_invalid.ace_illegal {\
  \
}\
\
.ace--railscasts .ace_invalid.ace_deprecated {\
  \
}\
\
.ace--railscasts .ace_support {\
  \
}\
\
.ace--railscasts .ace_support.ace_function {\
  color:#DA4939;\
}\
\
.ace--railscasts .ace_function.ace_buildin {\
  \
}\
\
.ace--railscasts .ace_string {\
  color:#A5C261;\
}\
\
.ace--railscasts .ace_string.ace_regexp {\
  \
}\
\
.ace--railscasts .ace_comment {\
  font-style:italic;\
color:#BC9458;\
}\
\
.ace--railscasts .ace_comment.ace_doc {\
  \
}\
\
.ace--railscasts .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace--railscasts .ace_variable {\
  \
}\
\
.ace--railscasts .ace_variable.ace_language {\
  color:#D0D0FF;\
}\
\
.ace--railscasts .ace_xml_pe {\
  \
}\
\
.ace--railscasts .ace_meta {\
  \
}\
\
.ace--railscasts .ace_meta.ace_tag {\
  color:#E8BF6A;\
}\
\
.ace--railscasts .ace_meta.ace_tag.ace_input {\
  \
}\
\
.ace--railscasts .ace_entity.ace_other.ace_attribute-name {\
  color:#E8BF6A;\
}\
\
.ace--railscasts .ace_markup.ace_underline {\
    text-decoration:underline;\
}\
\
.ace--railscasts .ace_markup.ace_heading {\
  \
}\
\
.ace--railscasts .ace_markup.ace_heading.ace_1 {\
  \
}\
\
.ace--railscasts .ace_markup.ace_heading.ace_2 {\
  \
}\
\
.ace--railscasts .ace_markup.ace_heading.ace_3 {\
  \
}\
\
.ace--railscasts .ace_markup.ace_heading.ace_4 {\
  \
}\
\
.ace--railscasts .ace_markup.ace_heading.ace_5 {\
  \
}\
\
.ace--railscasts .ace_markup.ace_heading.ace_6 {\
  \
}\
\
.ace--railscasts .ace_markup.ace_list {\
  \
}\
\
.ace--railscasts .ace_collab.ace_user1 {\
     \
}\
";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace--railscasts";
});
/* vim:ts=4:sts=4:sw=4:
 * ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Ajax.org Code Editor (ACE).
 *
 * The Initial Developer of the Original Code is
 * Ajax.org B.V.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *      Fabian Jakobs <fabian AT ajax DOT org>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

define('pilot/dom', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {
    console.warn("DEPRECATED: 'pilot/dom' is deprecated. Use 'ace/lib/dom' instead");
    module.exports = require("ace/lib/dom");
});
