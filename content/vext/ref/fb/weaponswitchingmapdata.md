---
title: WeaponSwitchingMapData
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponSwitchingMapData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "fromWeapon" >}} | [WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum) |
| {{< prop "action" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "toWeapon" >}} | [WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum)[] |
| {{< prop "fireAndSwitchBackToPrev" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponSwitchingMapData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponSwitchingMapData {#constructor-0}
> **WeaponSwitchingMapData**()

Creates a new [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata) frostbite structure.

## Properties
### {{% prop-heading "fromWeapon" %}}
> **[WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum)**

### {{% prop-heading "action" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "toWeapon" %}}
> **[WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum)**[]

### {{% prop-heading "fireAndSwitchBackToPrev" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata) type.

