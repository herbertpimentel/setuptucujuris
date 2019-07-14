import "@babel/polyfill";
import ko from "knockout-es5";
import { addition } from "../../lib/math";

import "../../componentes/edit/edit";

const ViewModel = function() {
  const self = {};

  self.contador = 0;

  self.obj = {
    pessoa: null
  };

  self.lista = null;

  self.increment = () => {
    self.contador = addition(self.contador, 1);
    console.log(self.contador);
  };

  self.createPessoa = () => {
    self.obj.pessoa = ko.track({
      nome: "beto"
    });
  };

  self.returnPromise = () => {
    return new Promise((resolve, reject) => resolve("OK"));
  };

  self.fetchFromApi = async () => {
    self.lista = await fetch(
      "http://tucujuris.tjap.jus.br/api/publico/buscar-tipos-certidao-publica"
    );

    self.lista = await self.lista.json();
    console.log(self.lista.dados);
  };

  ko.track(self);
  ko.track(self.obj);
  window.vm = self;
  return self;
};

ko.applyBindings(new ViewModel());
