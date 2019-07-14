import ko from "knockout-es5";
import html from "./edit.html";

const ViewModel = function(params) {
  const self = {};

  self.pessoa = params.pessoa;

  ko.track(self);
  return self;
};

ko.components.register("editcomponente", {
  viewModel: ViewModel,
  template: html
});

console.log("chegou ao fim o register do componete", html);
