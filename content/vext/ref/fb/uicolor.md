---
title: UIColor
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UIColor](#constructor-0)**() |
| **[UIColor](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIColor](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "color" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "colorType" >}} | [UIColorType](/vext/ref/fb/uicolortype) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIColor" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIColor {#constructor-0}
> **UIColor**()

Creates a new [UIColor](/vext/ref/fb/uicolor) frostbite instance.

### UIColor {#constructor-1}
> **UIColor**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIColor](/vext/ref/fb/uicolor) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIColor {#constructor-2}
> **UIColor**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIColor](/vext/ref/fb/uicolor). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIColor](/vext/ref/fb/uicolor). |

## Properties
### {{% prop-heading "color" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "colorType" %}}
> **[UIColorType](/vext/ref/fb/uicolortype)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIColor](/vext/ref/fb/uicolor) type.

