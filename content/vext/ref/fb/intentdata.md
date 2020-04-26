---
title: IntentData
---


## Summary
### Constructors
| |
| ----------- |
| **[IntentData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "defaultModifier" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [IntentData](/vext/ref/fb/intentdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "IntentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### IntentData {#constructor-0}
> **IntentData**()

Creates a new [IntentData](/vext/ref/fb/intentdata) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "defaultModifier" %}}
> **float**

## Methods
### Clone
> **Clone**(): [IntentData](/vext/ref/fb/intentdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[IntentData](/vext/ref/fb/intentdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [IntentData](/vext/ref/fb/intentdata) type.

