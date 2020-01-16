
# Double quoted attribute

A double quoted attribute is an attribute that has a value.

As an example, let's say we have a void tag `<dog/>` (fictional, not valid HTML).  
And let's say it can have the attribute `age` with positive integer as value.

Let's also say we have two dogs, that are 3 and 5 years old respectively.

These would be their equivalent declarations:
* `<dog age="3"/>`
* `<dog age="5"/>`

*Note: you can also use single quotes instead of double quotes.*  
*Eg: `<dog age='3'>`*

*You can also use no quotes at all
(while being careful to not have any spaces in your attribute values)*  
*Eg: `<dog age=3>`*

*This is defined by the HTML standard
but most of the internet tends to gravitate around double qoutes though.* 
