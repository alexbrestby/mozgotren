import { GameNames } from '../types/types';
import SlozhenieController from '../games/slozhenie/SlozhenieController';
import VychitanieController from '../games/vychitanie/VychitanieController';
import UmnozhenieController from '../games/umnozhenie/UmnozhenieController';
import DelenieController from '../games/delenie/DelenieController';
import ArifmetikaController from '../games/arifmetika/ArifmetikaController';
import SchulteTableController from '../games/schulte-table/SchulteTableController';
import ShulteAlfavitController from '../games/shulte-alfavit/ShulteAlfavitController';
import ShulteCvetController from '../games/shulte-cvet/ShulteCvetController';
import SortirovshchikCifrController from '../games/sortirovshchik-cifr/SortirovshchikCifrController';
import SortirovshchikCvetovController from '../games/sortirovshchik-cvetov/SortirovshchikCvetovController';
import SortirovshchikSlovController from '../games/sortirovshchik-slov/SortirovshchikSlovController';
import StranaStolicaController from '../games/strana-stolica/StranaStolicaController';
import StranaValytaController from '../games/strana-valyta/StranaValytaController';
import AngliyskiySlovarController from '../games/angliyskiy-slovar/AngliyskiySlovarController';

export type GameControllers = SlozhenieController |
VychitanieController |
UmnozhenieController |
DelenieController |
ArifmetikaController |
SchulteTableController |
ShulteAlfavitController |
ShulteCvetController |
SortirovshchikCifrController |
SortirovshchikCvetovController |
SortirovshchikSlovController |
StranaStolicaController |
StranaValytaController |
AngliyskiySlovarController;

export function getGameController(nameGame: GameNames): GameControllers {
  let gameController: GameControllers;
  if (nameGame === GameNames.Slozhenie) {
    gameController = new SlozhenieController();
  } else if (nameGame === GameNames.Vychitanie) {
    gameController = new VychitanieController();
  } else if (nameGame === GameNames.Umnozhenie) {
    gameController = new UmnozhenieController();
  } else if (nameGame === GameNames.Delenie) {
    gameController = new DelenieController();
  } else if (nameGame === GameNames.Arifmetika) {
    gameController = new ArifmetikaController();
  } else if (nameGame === GameNames.TablicaShulte) {
    gameController = new SchulteTableController(GameNames.TablicaShulte);
  } else if (nameGame === GameNames.ShulteAlfavit) {
    gameController = new ShulteAlfavitController(GameNames.ShulteAlfavit);
  } else if (nameGame === GameNames.ShulteCvet) {
    gameController = new ShulteCvetController(GameNames.ShulteCvet);
  } else if (nameGame === GameNames.SortirovshchikCifr) {
    gameController = new SortirovshchikCifrController(GameNames.SortirovshchikCifr);
  } else if (nameGame === GameNames.SortirovshchikCvetov) {
    gameController = new SortirovshchikCvetovController(GameNames.SortirovshchikCvetov);
  } else if (nameGame === GameNames.SortirovshchikSlov) {
    gameController = new SortirovshchikSlovController(GameNames.SortirovshchikSlov);
  } else if (nameGame === GameNames.StranaStolica) {
    gameController = new StranaStolicaController(GameNames.StranaStolica);
  } else if (nameGame === GameNames.StranaValyta) {
    gameController = new StranaValytaController(GameNames.StranaValyta);
  } else if (nameGame === GameNames.AngliyskiySlovar) {
    gameController = new AngliyskiySlovarController(GameNames.AngliyskiySlovar);
  } else {
    gameController = new SlozhenieController();
  }
  return gameController;
}