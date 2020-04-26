---
title: UIFontMapping
---


## Summary
### Constructors
| |
| ----------- |
| **[UIFontMapping](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "scaleformFontName" >}} | string[] |
| {{< prop "fontLongName" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIFontMapping](/vext/ref/fb/uifontmapping) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIFontMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIFontMapping {#constructor-0}
> **UIFontMapping**()

Creates a new [UIFontMapping](/vext/ref/fb/uifontmapping) frostbite structure.

## Properties
### {{% prop-heading "scaleformFontName" %}}
> **string**[]

### {{% prop-heading "fontLongName" %}}
> **string**

## Methods
### Clone
> **Clone**(): [UIFontMapping](/vext/ref/fb/uifontmapping)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIFontMapping](/vext/ref/fb/uifontmapping)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIFontMapping](/vext/ref/fb/uifontmapping) type.

