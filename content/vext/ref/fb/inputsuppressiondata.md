---
title: InputSuppressionData
---


## Summary
### Constructors
| |
| ----------- |
| **[InputSuppressionData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "suppressVehicleInput" >}} | [ActionSuppressor](/vext/ref/fb/actionsuppressor)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InputSuppressionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InputSuppressionData {#constructor-0}
> **InputSuppressionData**()

Creates a new [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) frostbite structure.

## Properties
### {{% prop-heading "suppressVehicleInput" %}}
> **[ActionSuppressor](/vext/ref/fb/actionsuppressor)**[]

## Methods
### Clone
> **Clone**(): [InputSuppressionData](/vext/ref/fb/inputsuppressiondata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[InputSuppressionData](/vext/ref/fb/inputsuppressiondata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) type.

