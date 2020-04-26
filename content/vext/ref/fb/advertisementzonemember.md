---
title: AdvertisementZoneMember
---


## Summary
### Constructors
| |
| ----------- |
| **[AdvertisementZoneMember](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "identifier" >}} | string |
| {{< prop "filename" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AdvertisementZoneMember](/vext/ref/fb/advertisementzonemember) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AdvertisementZoneMember" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AdvertisementZoneMember {#constructor-0}
> **AdvertisementZoneMember**()

Creates a new [AdvertisementZoneMember](/vext/ref/fb/advertisementzonemember) frostbite structure.

## Properties
### {{% prop-heading "identifier" %}}
> **string**

### {{% prop-heading "filename" %}}
> **string**

## Methods
### Clone
> **Clone**(): [AdvertisementZoneMember](/vext/ref/fb/advertisementzonemember)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AdvertisementZoneMember](/vext/ref/fb/advertisementzonemember)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AdvertisementZoneMember](/vext/ref/fb/advertisementzonemember) type.

