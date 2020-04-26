---
title: LicenseInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[LicenseInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "stagingPlatform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "allowStaging" >}} | bool |
| {{< prop "clientOnly" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LicenseInfo](/vext/ref/fb/licenseinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LicenseInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LicenseInfo {#constructor-0}
> **LicenseInfo**()

Creates a new [LicenseInfo](/vext/ref/fb/licenseinfo) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "stagingPlatform" %}}
> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "allowStaging" %}}
> **bool**

### {{% prop-heading "clientOnly" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [LicenseInfo](/vext/ref/fb/licenseinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LicenseInfo](/vext/ref/fb/licenseinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LicenseInfo](/vext/ref/fb/licenseinfo) type.

