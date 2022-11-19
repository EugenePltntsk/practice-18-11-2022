import React, { useState } from 'react'

export default function FAQ() {

const [isExpanded, setIsExpanded] = useState(false);

const changeIsExpandedValueToTrue = () => {
    setIsExpanded(true);
}

const changeIsExpandedValueToFalse = () => {
    setIsExpanded(false);
}

  return (
    <div className="container">
        <div className="accordion">
           <h1>FAQ</h1>
           <button onClick={changeIsExpandedValueToTrue} type="button" className="btn" id="expand-all">Expand All</button>
           <button onClick={changeIsExpandedValueToFalse} type="button" className="btn" id="collapse-all">Collapse All</button>
            <div className="accordion-item">
              <p className={`title ${isExpanded ? "is-expanded" : ""}`}>
                First Question
              </p>
              <div className={`content ${isExpanded ? "is-expanded" : ""}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
              </div>
            </div>
            <div className="accordion-item">
            <p className={`title ${isExpanded ? "is-expanded" : ""}`}>
                Second Question
              </p>
              <div className={`content ${isExpanded ? "is-expanded" : ""}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
              </div>
            </div>
            <div className="accordion-item">
            <p className={`title ${isExpanded ? "is-expanded" : ""}`}>
                Third Question
              </p>
              <div className={`content ${isExpanded ? "is-expanded" : ""}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
              </div>
            </div>
            <div className="accordion-item">
            <p className={`title ${isExpanded ? "is-expanded" : ""}`}>
                Furth Question
              </p>
              <div className={`content ${isExpanded ? "is-expanded" : ""}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
              </div>
            </div>
            <div className="accordion-item">
            <p className={`title ${isExpanded ? "is-expanded" : ""}`}>
                Fifth Question
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


// <script>
//       const accordionItems = document.querySelectorAll(".accordion-item");

//       const buttonExpandAll = document.getElementById("expand-all");
//       const buttonCollapseAll = document.getElementById("collapse-all");

//       accordionItems.forEach(item => item.addEventListener("click", function({target}){
//           if(target.classList.contains("title")) {
//               target.classList.toggle("is-expanded");
//               const content = this.querySelector(".content");
//               content.classList.toggle("is-expanded")
//           }
//       }))
  
//       buttonExpandAll.addEventListener("click", function (e) {
//         e.preventDefault();
//         accordionItems.forEach(item => {
//           const title = item.querySelector(".title");
//           const content = item.querySelector(".content");

//           title.classList.add("is-expanded");
//           content.classList.add("is-expanded")
//         })
//       });

//       buttonCollapseAll.addEventListener("click", function (e) {
//         e.preventDefault();
//         accordionItems.forEach(item => {
//           const title = item.querySelector(".title");
//           const content = item.querySelector(".content");

//           title.classList.remove("is-expanded");
//           content.classList.remove("is-expanded")
//         })
//       });
//   </script>