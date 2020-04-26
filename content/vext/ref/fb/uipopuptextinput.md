---
title: UIPopupTextInput
---


## Summary
### Constructors
| |
| ----------- |
| **[UIPopupTextInput](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | string |
| {{< prop "label" >}} | string |
| {{< prop "defaultValue" >}} | string |
| {{< prop "isPassword" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIPopupTextInput](/vext/ref/fb/uipopuptextinput) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIPopupTextInput" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIPopupTextInput {#constructor-0}
> **UIPopupTextInput**()

Creates a new [UIPopupTextInput](/vext/ref/fb/uipopuptextinput) frostbite structure.

## Properties
### {{% prop-heading "id" %}}
> **string**

### {{% prop-heading "label" %}}
> **string**

### {{% prop-heading "defaultValue" %}}
> **string**

### {{% prop-heading "isPassword" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [UIPopupTextInput](/vext/ref/fb/uipopuptextinput)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIPopupTextInput](/vext/ref/fb/uipopuptextinput)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIPopupTextInput](/vext/ref/fb/uipopuptextinput) type.

