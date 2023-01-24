/// Fill in a form field for the user

/// 1. Select the form field whose ID is "x".

$("input#x");

/// 2. Read what the user has entered in the field whose id is "ZIP". Store it in the variable userZIP.

$("input#zip").val();

/// 3.a string has been stored in the variable firstName. Fill in the blank to insert it in the name1 field.
$("input#name1").val(firstName);

/// 4. A string has been stored in the variable city. Fill in the blank to insert it into the field with an ID of "muni".

$("input#muni").val(city);

$("input#UserAge").val(age);

/// 6. Insert the string stored in the variable sqFt in the form field with an ID of "size".

$("input#Size").val(sqFt);

/// 7. Insert the string stored in the variable x into the form field whose ID is "y".

$("input#y").val(x);

/// 8. Insert the string stored in the variable city into the form field with an ID of "muni".

$("input#muni").val(city);

/// 9. Insert the string stored in a variable of your choice into the form field whose ID is "z".

$("input#z").val(title);

/// 10. Insert the string stored in a variable of your choice into the form field whose ID is an ID of your choice.

$("input#random").val(a);

/// 11. Instead of using a variable, insert a string itself into a form field. Make up the string and the ID of the form field.

$("input#a").val(b);

/// 12. Read what the user has entered in a field and insert it into another field. Make up the IDs of the two fields.

$("input#main").val($("main#main"));
