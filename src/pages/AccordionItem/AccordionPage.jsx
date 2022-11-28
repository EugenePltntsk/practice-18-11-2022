import React, { useState } from 'react'

export default function AccordionItem() {

    const [isExpanded, setIsExpanded] = useState(false);

const clickerToggler = () => {
setIsExpanded(!isExpanded);


}


  return (

    <div className="container">
        <div className="accordion">
            <div className="accordion-item">
                <p onClick={clickerToggler} className={`title ${isExpanded ? "is-expanded" : "" }`}>
                  First Question
                </p>
                <div className={`content ${isExpanded ? "is-expanded" : ""}`}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
        
                    Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                  </p>
                </div>
              </div>
        </div>
    </div>
  )
}

    // const accordionItems = document.querySelectorAll(".accordion-item");
    // accordionItems.forEach(item = item.addEventListener("click", function({}){ }
    // if(target.classList.contains("title")) {target.classList.toggle("is-expanded")};
    // const content = this.querySelector(".content");
    // content.classList.toggle("is-expanded")
    // {'}'}
    // {'}'}))



