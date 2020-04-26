---
title: KillWeight
---


## Summary
### Constructors
| |
| ----------- |
| **[KillWeight](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lowIntenseWeight" >}} | float |
| {{< prop "highIntenseWeight" >}} | float |
| {{< prop "coolDownTime" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [KillWeight](/vext/ref/fb/killweight) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "KillWeight" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### KillWeight {#constructor-0}
> **KillWeight**()

Creates a new [KillWeight](/vext/ref/fb/killweight) frostbite structure.

## Properties
### {{% prop-heading "lowIntenseWeight" %}}
> **float**

### {{% prop-heading "highIntenseWeight" %}}
> **float**

### {{% prop-heading "coolDownTime" %}}
> **float**

## Methods
### Clone
> **Clone**(): [KillWeight](/vext/ref/fb/killweight)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[KillWeight](/vext/ref/fb/killweight)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [KillWeight](/vext/ref/fb/killweight) type.

