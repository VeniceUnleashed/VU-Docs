---
title: GunMasterWeaponsPreset
---


## Summary
### Constructors
| |
| ----------- |
| **[GunMasterWeaponsPreset](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "gunMasterLevelInfos" >}} | [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo)[] |
| {{< prop "levelOverrides" >}} | [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunMasterWeaponsPreset](/vext/ref/fb/gunmasterweaponspreset) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunMasterWeaponsPreset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunMasterWeaponsPreset {#constructor-0}
> **GunMasterWeaponsPreset**()

Creates a new [GunMasterWeaponsPreset](/vext/ref/fb/gunmasterweaponspreset) frostbite structure.

## Properties
### {{% prop-heading "gunMasterLevelInfos" %}}
> **[GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo)**[]

### {{% prop-heading "levelOverrides" %}}
> **[CustomizeSoldierData](/vext/ref/fb/customizesoldierdata)**[]

## Methods
### Clone
> **Clone**(): [GunMasterWeaponsPreset](/vext/ref/fb/gunmasterweaponspreset)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunMasterWeaponsPreset](/vext/ref/fb/gunmasterweaponspreset)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunMasterWeaponsPreset](/vext/ref/fb/gunmasterweaponspreset) type.

