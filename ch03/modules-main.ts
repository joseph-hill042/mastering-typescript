/* -----MODULES----- */

/* IMPORTING & EXPORTING MODULES */
import { Module1 } from "./modules/Module1.ts";
const mod1 = new Module1();
mod1.print();

/* MODULE RENAMING */
import { Module1 as MyMod1 } from "./modules/Module1.ts";
const myRenamedMod = new MyMod1();
myRenamedMod.print();

/* MULTIPLE EXPORTS */
import { MultipleClass1, MultipleClass2 } from "./modules/MultipleExports.ts";
const mc1 = new MultipleClass1();
const mc2 = new MultipleClass2();
mc1.print();
mc2.print();

/* MODULE NAMESPACES */
import * as MultipleExports from "./modules/MultipleExports.ts";
const meMc1 = new MultipleExports.MultipleClass1();
const meMc2 = new MultipleExports.MultipleClass2();
meMc1.print();
meMc2.print();