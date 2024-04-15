import { PersistencyProps } from "../classes/interface/persistencyProps";

export class Persistency implements PersistencyProps {
  saveOrder(): void {
    console.log("order saved with success!");
  }
}
