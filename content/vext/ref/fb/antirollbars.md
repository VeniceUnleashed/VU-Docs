---
title: AntiRollBars
---


## Summary
### Constructors
| |
| ----------- |
| **[AntiRollBars](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "front" >}} | [AntiRollBar](/vext/ref/fb/antirollbar) \| nil |
| {{< prop "rear" >}} | [AntiRollBar](/vext/ref/fb/antirollbar) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AntiRollBars](/vext/ref/fb/antirollbars) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntiRollBars" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntiRollBars {#constructor-0}
> **AntiRollBars**()

Creates a new [AntiRollBars](/vext/ref/fb/antirollbars) frostbite structure.

## Properties
### {{% prop-heading "front" %}}
> **[AntiRollBar](/vext/ref/fb/antirollbar)** | **nil**

### {{% prop-heading "rear" %}}
> **[AntiRollBar](/vext/ref/fb/antirollbar)** | **nil**

## Methods
### Clone
> **Clone**(): [AntiRollBars](/vext/ref/fb/antirollbars)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AntiRollBars](/vext/ref/fb/antirollbars)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntiRollBars](/vext/ref/fb/antirollbars) type.

