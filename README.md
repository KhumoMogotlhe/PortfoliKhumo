## styles 

I am using styled components, but there will be pages where I use pure css 

##### Notes

- positon property specifies the type of positioning method used for an element
- Static being the default, where elements render in order as they appear in the doc flow.
- there is absolute, where an element is positioned relative to its first positioned ancestor element
- fixed - The element is positioned relative to the browser window
- relative - The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position

##### The max-width property

- max-width defines the maximum width of an element. It prevents the element's width from being larger than the specific value. 
- it is useful for creating responsive layouts and to ensure content readability across varios screen sizes.

#### Positioning of elements 
- I wanted the page number on the left side of each page so I used 
```
bottom : 2 rem 
left: 3rem;

and for the button to be in the middle right 

  bottom: 2rem;    /* ← This puts it at the bottom */
  right: 3rem;     /* ← This puts it on the right */
```

