import {Observable} from "tns-core-modules/data/observable";
 export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Getting Started TypeScript \nAction Bar Example");
    vm.set("snippet", "<ActionBar title=\"Gettings Started\" class=\"action-bar\"/>");
    page.bindingContext = vm;
}
