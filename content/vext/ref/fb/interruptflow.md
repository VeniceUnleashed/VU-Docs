---
title: InterruptFlow
---


## Summary
### Constructors
| |
| ----------- |
| **[InterruptFlow](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "interruptEnum" >}} | [UIInterruptID](/vext/ref/fb/uiinterruptid) |
| {{< prop "interruptFlow" >}} | [UIGraphAsset](/vext/ref/fb/uigraphasset) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [InterruptFlow](/vext/ref/fb/interruptflow) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InterruptFlow" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InterruptFlow {#constructor-0}
> **InterruptFlow**()

Creates a new [InterruptFlow](/vext/ref/fb/interruptflow) frostbite structure.

## Properties
### {{% prop-heading "interruptEnum" %}}
> **[UIInterruptID](/vext/ref/fb/uiinterruptid)**

### {{% prop-heading "interruptFlow" %}}
> **[UIGraphAsset](/vext/ref/fb/uigraphasset)** | **nil**

## Methods
### Clone
> **Clone**(): [InterruptFlow](/vext/ref/fb/interruptflow)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[InterruptFlow](/vext/ref/fb/interruptflow)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InterruptFlow](/vext/ref/fb/interruptflow) type.

