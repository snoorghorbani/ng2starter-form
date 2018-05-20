// import { ComponentFactoryResolver, ComponentRef, OnChanges, OnInit, Type, ViewContainerRef, Directive, Input } from '@angular/core';
// import { FormGroup } from '@angular/forms';

// import { CheckboxComponent, ColorComponent, EmailComponent, SelectComponent } from "../form-controls"

// import { Field, FieldConfig } from '../../models';

// const components: { [type: string]: Type<Field> } = {
//   checkbox: CheckboxComponent,
//   color: ColorComponent,
//   email: EmailComponent,
//   select: SelectComponent
// };

// @Directive({
//   selector: '[dynamicField]'
// })
// export class DynamicFieldDirective implements Field, OnChanges, OnInit {
//   @Input()
//   config: FieldConfig;

//   @Input()
//   group: FormGroup;

//   component: ComponentRef<Field>;

//   constructor(
//     private resolver: ComponentFactoryResolver,
//     private container: ViewContainerRef
//   ) { }

//   ngOnChanges() {
//     if (this.component) {
//       this.component.instance.config = this.config;
//       this.component.instance.group = this.group;
//     }
//   }

//   ngOnInit() {
//     if (!components[this.config.type]) {
//       const supportedTypes = Object.keys(components).join(', ');
//       throw new Error(
//         `Trying to use an unsupported type (${this.config.type}).
//         Supported types: ${supportedTypes}`
//       );
//     }
//     const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
//     this.component = this.container.createComponent(component);
//     this.component.instance.config = this.config;
//     this.component.instance.group = this.group;
//   }
// }
