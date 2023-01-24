/// Setting versus getting content

/// 1. Read the text in the paragraph whose ID is "p2" and store it in a variable of your choice.

let name = $("p#p2").text();

/// 2. Insert HTML, including an opening and closing tag and some text, in a div. Make up the div's ID.

$("div#p2").html("<p>hello world</p>");

/// 3. Read the HTML in a paragraph whose ID is an ID of your choice. Store it in a variable of your choice.

let a = $("p#p2").html();

/// 4. Insert some text of your choice--a text string itself not a variable--into a paragraph whose ID is an ID of your choice.

$("p#p2").text("<p>Hello World</p>");

$("p#p1").text($("p#18").text());

/// 6. Read the HTML in a div whose ID is "d3" and store it in the variable contents.

let contents = $("div#d3").html(a);

/// 7. Insert the string "wombat" in the form field whose ID is "animal".

$("input#animal").val("wombat");

/// 8. Read the text in a list item whose ID is "item4" and store it in a variable of your choice.

let b = $("li#item4").text();

/// 9. Insert the text stored in the variable filler in all h3 headings whose class is "whatever".

$("h3.whatever").text(filler);

let filler = $("h3.whatever").text();

/// 10. Insert HTML of your choice, including an opening and closing tag and some text, in a heading--your choice of heading size and ID.

$("h2#header2").html("<p>hello there</p>");

/// 11. Insert a string of your choice into a form field whose ID is an ID of your choice.

$("input#i").text("hi there");

/// 12. Insert text from a form field into a paragraph. Make up the IDs of both the form field and the paragraph.

$("input#formName").text($("p#p2").val());
