/// 1. In the following code, paragraphs of the class "____" are selected.
$("p.main").addClass("big");

// mian

/// 2. Type the selector for tables that have the class "fancy

$("table.fancy");

/// 3. Type the selector for all elements that have the class "dark".

$("*.dark"); // very slow selector

$("img..optional").hide();

/// 6. Hide all paragraphs that have the class "minor".

$("p.minor").hide();

/// 7. Hide all elements that have the class "extra

$("*.extra").hide();

/// 8. Hide all ordered lists that have the class "tasks"

$("ol.tasks").hide();

/// 9. Add the class "bold" to all paragraphs that have a particular class. Make up the name of the class that you're selecting.

$("p.main").addClass("bold");

/// 10. Add a new class to all elements of a particular class. Make up both class names.

$("*.oldclass").addClass("newclass");

/// Selecting divs of the class "gonzo," remove that class.

$("div.gonzo").removeClass("gonzo");

/// 12. Add two new classes to paragraphs of a particular class. Make up all three class names.

$("p.classone").addClass("classtwo, classthree");
