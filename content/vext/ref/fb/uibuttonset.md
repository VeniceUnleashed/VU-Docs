---
title: UIButtonSet
---


## Summary
### Constructors
| |
| ----------- |
| **[UIButtonSet](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "buttons" >}} | [UIButton](/vext/ref/fb/uibutton)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIButtonSet](/vext/ref/fb/uibuttonset) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIButtonSet" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIButtonSet {#constructor-0}
> **UIButtonSet**()

Creates a new [UIButtonSet](/vext/ref/fb/uibuttonset) frostbite structure.

## Properties
### {{% prop-heading "buttons" %}}
> **[UIButton](/vext/ref/fb/uibutton)**[]

## Methods
### Clone
> **Clone**(): [UIButtonSet](/vext/ref/fb/uibuttonset)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIButtonSet](/vext/ref/fb/uibuttonset)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIButtonSet](/vext/ref/fb/uibuttonset) type.

