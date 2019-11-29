const popover = document.createElement("div");
popover.id = "example-popover";
const popover2 = document.createElement("div");
popover2.id = "example2-popover";

const removePopover = () => {
  const existingPopover = document.getElementById(popover.id);
  if (existingPopover && existingPopover.parentElement) {
    existingPopover.parentElement.removeChild(existingPopover);
  }
};

removePopover();

popover2.style.backgroundColor = "#5578D4";
popover2.style.color = "green";
popover2.style.border = "1px solid black";
popover2.style.position = "fixed";
popover2.style.bottom = "10px";
popover2.style.right = "20px";
popover2.style.width = "200px";
popover2.style.height = "100px";
popover2.style.padding = "10px";
popover2.style.webkitBorderRadius = "4px";

popover.style.backgroundColor = "#112233";
popover.style.color = "green";
popover.style.border = "1px solid black";
popover.style.position = "fixed";
popover.style.bottom = "50px";
popover.style.right = "110px";
popover.style.width = "200px";
popover.style.height = "100px";
popover.style.padding = "10px";
popover.style.webkitBorderRadius = "4px";

const message = document.createElement("p");
message.textContent = "Here is an example popover";

const closeButton = document.createElement("a");
closeButton.textContent = "X";
closeButton.style.position = "absolute";
closeButton.style.top = "3px";
closeButton.style.right = "8px";
closeButton.style.color = "white";

closeButton.onclick = () => {
  removePopover();
};

popover.appendChild(message);
popover2.appendChild(closeButton);
document.body.appendChild(popover);
document.body.appendChild(popover2);
