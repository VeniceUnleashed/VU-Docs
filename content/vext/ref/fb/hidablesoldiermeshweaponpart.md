---
title: HidableSoldierMeshWeaponPart
---


## Summary
### Constructors
| |
| ----------- |
| **[HidableSoldierMeshWeaponPart](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "weaponMesh" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "weaponMeshBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "boneName" >}} | string |
| {{< prop "hideAlways" >}} | bool |
| {{< prop "hideInVehicleEntries" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HidableSoldierMeshWeaponPart" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HidableSoldierMeshWeaponPart {#constructor-0}
> **HidableSoldierMeshWeaponPart**()

Creates a new [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart) frostbite structure.

## Properties
### {{% prop-heading "weaponMesh" %}}
> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** | **nil**

### {{% prop-heading "weaponMeshBlueprint" %}}
> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** | **nil**

### {{% prop-heading "boneName" %}}
> **string**

### {{% prop-heading "hideAlways" %}}
> **bool**

### {{% prop-heading "hideInVehicleEntries" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart) type.

