---
title: BulletHitInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[BulletHitInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "direction" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "spawnPosition" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "weaponUnlockAsset" >}} | [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset) \| nil |
| {{< prop "weaponType" >}} | [AntHitReactionWeaponType](/vext/ref/fb/anthitreactionweapontype) |
| {{< prop "boneType" >}} | int |
| {{< prop "shooterPlayerId" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BulletHitInfo](/vext/ref/fb/bullethitinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BulletHitInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BulletHitInfo {#constructor-0}
> **BulletHitInfo**()

Creates a new [BulletHitInfo](/vext/ref/fb/bullethitinfo) frostbite structure.

## Properties
### {{% prop-heading "direction" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "spawnPosition" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "weaponUnlockAsset" %}}
> **[SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset)** | **nil**

### {{% prop-heading "weaponType" %}}
> **[AntHitReactionWeaponType](/vext/ref/fb/anthitreactionweapontype)**

### {{% prop-heading "boneType" %}}
> **int**

### {{% prop-heading "shooterPlayerId" %}}
> **int**

## Methods
### Clone
> **Clone**(): [BulletHitInfo](/vext/ref/fb/bullethitinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BulletHitInfo](/vext/ref/fb/bullethitinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BulletHitInfo](/vext/ref/fb/bullethitinfo) type.

