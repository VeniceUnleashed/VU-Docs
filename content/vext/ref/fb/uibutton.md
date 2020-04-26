---
title: UIButton
---


## Summary
### Constructors
| |
| ----------- |
| **[UIButton](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "buttonLabel" >}} | string |
| {{< prop "buttonId" >}} | string |
| {{< prop "isPremium" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIButton](/vext/ref/fb/uibutton) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIButton" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIButton {#constructor-0}
> **UIButton**()

Creates a new [UIButton](/vext/ref/fb/uibutton) frostbite structure.

## Properties
### {{% prop-heading "buttonLabel" %}}
> **string**

### {{% prop-heading "buttonId" %}}
> **string**

### {{% prop-heading "isPremium" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [UIButton](/vext/ref/fb/uibutton)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIButton](/vext/ref/fb/uibutton)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIButton](/vext/ref/fb/uibutton) type.

