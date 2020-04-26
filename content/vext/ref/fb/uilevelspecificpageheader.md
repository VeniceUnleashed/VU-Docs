---
title: UILevelSpecificPageHeader
---


## Summary
### Constructors
| |
| ----------- |
| **[UILevelSpecificPageHeader](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "levelNameSID" >}} | string |
| {{< prop "header" >}} | string |
| {{< prop "subHeader" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UILevelSpecificPageHeader" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UILevelSpecificPageHeader {#constructor-0}
> **UILevelSpecificPageHeader**()

Creates a new [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader) frostbite structure.

## Properties
### {{% prop-heading "levelNameSID" %}}
> **string**

### {{% prop-heading "header" %}}
> **string**

### {{% prop-heading "subHeader" %}}
> **string**

## Methods
### Clone
> **Clone**(): [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader) type.

