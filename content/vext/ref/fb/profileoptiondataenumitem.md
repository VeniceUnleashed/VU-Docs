---
title: ProfileOptionDataEnumItem
---


## Summary
### Constructors
| |
| ----------- |
| **[ProfileOptionDataEnumItem](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "displayName" >}} | string |
| {{< prop "default" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ProfileOptionDataEnumItem](/vext/ref/fb/profileoptiondataenumitem) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ProfileOptionDataEnumItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ProfileOptionDataEnumItem {#constructor-0}
> **ProfileOptionDataEnumItem**()

Creates a new [ProfileOptionDataEnumItem](/vext/ref/fb/profileoptiondataenumitem) frostbite structure.

## Properties
### {{% prop-heading "displayName" %}}
> **string**

### {{% prop-heading "default" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [ProfileOptionDataEnumItem](/vext/ref/fb/profileoptiondataenumitem)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ProfileOptionDataEnumItem](/vext/ref/fb/profileoptiondataenumitem)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ProfileOptionDataEnumItem](/vext/ref/fb/profileoptiondataenumitem) type.

