---
title: UIPopupButton
---


## Summary
### Constructors
| |
| ----------- |
| **[UIPopupButton](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inputConcept" >}} | [UIInputAction](/vext/ref/fb/uiinputaction) |
| {{< prop "label" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIPopupButton](/vext/ref/fb/uipopupbutton) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIPopupButton" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIPopupButton {#constructor-0}
> **UIPopupButton**()

Creates a new [UIPopupButton](/vext/ref/fb/uipopupbutton) frostbite structure.

## Properties
### {{% prop-heading "inputConcept" %}}
> **[UIInputAction](/vext/ref/fb/uiinputaction)**

### {{% prop-heading "label" %}}
> **string**

## Methods
### Clone
> **Clone**(): [UIPopupButton](/vext/ref/fb/uipopupbutton)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIPopupButton](/vext/ref/fb/uipopupbutton)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIPopupButton](/vext/ref/fb/uipopupbutton) type.

