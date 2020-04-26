---
title: UICreditsLine
---


## Summary
### Constructors
| |
| ----------- |
| **[UICreditsLine](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "textType" >}} | [UICreditsTextType](/vext/ref/fb/uicreditstexttype) |
| {{< prop "text" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UICreditsLine](/vext/ref/fb/uicreditsline) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UICreditsLine" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UICreditsLine {#constructor-0}
> **UICreditsLine**()

Creates a new [UICreditsLine](/vext/ref/fb/uicreditsline) frostbite structure.

## Properties
### {{% prop-heading "textType" %}}
> **[UICreditsTextType](/vext/ref/fb/uicreditstexttype)**

### {{% prop-heading "text" %}}
> **string**

## Methods
### Clone
> **Clone**(): [UICreditsLine](/vext/ref/fb/uicreditsline)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UICreditsLine](/vext/ref/fb/uicreditsline)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UICreditsLine](/vext/ref/fb/uicreditsline) type.

