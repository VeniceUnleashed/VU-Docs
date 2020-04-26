---
title: BasicUnlockInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[BasicUnlockInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "unlockGuid" >}} | [Guid](/vext/ref/shared/class/guid) |
| {{< prop "identifier" >}} | int |
| {{< prop "unlockScore" >}} | int |
| {{< prop "licenses" >}} | string[] |
| {{< prop "additionalLicenses" >}} | string[] |
| {{< prop "stringId" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BasicUnlockInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BasicUnlockInfo {#constructor-0}
> **BasicUnlockInfo**()

Creates a new [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo) frostbite structure.

## Properties
### {{% prop-heading "unlockGuid" %}}
> **[Guid](/vext/ref/shared/class/guid)**

### {{% prop-heading "identifier" %}}
> **int**

### {{% prop-heading "unlockScore" %}}
> **int**

### {{% prop-heading "licenses" %}}
> **string**[]

### {{% prop-heading "additionalLicenses" %}}
> **string**[]

### {{% prop-heading "stringId" %}}
> **string**

## Methods
### Clone
> **Clone**(): [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo) type.

