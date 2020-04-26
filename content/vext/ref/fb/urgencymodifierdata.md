---
title: UrgencyModifierData
---


## Summary
### Constructors
| |
| ----------- |
| **[UrgencyModifierData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "modifier" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UrgencyModifierData](/vext/ref/fb/urgencymodifierdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UrgencyModifierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UrgencyModifierData {#constructor-0}
> **UrgencyModifierData**()

Creates a new [UrgencyModifierData](/vext/ref/fb/urgencymodifierdata) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "modifier" %}}
> **float**

## Methods
### Clone
> **Clone**(): [UrgencyModifierData](/vext/ref/fb/urgencymodifierdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UrgencyModifierData](/vext/ref/fb/urgencymodifierdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UrgencyModifierData](/vext/ref/fb/urgencymodifierdata) type.

