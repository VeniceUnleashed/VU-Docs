---
title: GunMasterLevelInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[GunMasterLevelInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "customizeData" >}} | [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata) \| nil |
| {{< prop "killsNeeded" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunMasterLevelInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunMasterLevelInfo {#constructor-0}
> **GunMasterLevelInfo**()

Creates a new [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo) frostbite structure.

## Properties
### {{% prop-heading "customizeData" %}}
> **[CustomizeSoldierData](/vext/ref/fb/customizesoldierdata)** | **nil**

### {{% prop-heading "killsNeeded" %}}
> **int**

## Methods
### Clone
> **Clone**(): [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo) type.

