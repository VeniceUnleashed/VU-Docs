---
title: RotorModelData
---


## Summary
### Constructors
| |
| ----------- |
| **[RotorModelData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "rotationRpm" >}} | float |
| {{< prop "partIndex" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [RotorModelData](/vext/ref/fb/rotormodeldata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RotorModelData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RotorModelData {#constructor-0}
> **RotorModelData**()

Creates a new [RotorModelData](/vext/ref/fb/rotormodeldata) frostbite structure.

## Properties
### {{% prop-heading "rotationRpm" %}}
> **float**

### {{% prop-heading "partIndex" %}}
> **int**

## Methods
### Clone
> **Clone**(): [RotorModelData](/vext/ref/fb/rotormodeldata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RotorModelData](/vext/ref/fb/rotormodeldata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RotorModelData](/vext/ref/fb/rotormodeldata) type.

