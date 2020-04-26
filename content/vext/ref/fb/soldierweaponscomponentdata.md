---
title: SoldierWeaponsComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[SoldierWeaponsComponentData](#constructor-0)**() |
| **[SoldierWeaponsComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoldierWeaponsComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SoldierWeaponsComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoldierWeaponsComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierWeaponsComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "aimDir" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "weaponSkeleton" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "primaryWeaponId" >}} | int |
| {{< prop "animatedWeaponBinding" >}} | [AnimatedWeaponBinding](/vext/ref/fb/animatedweaponbinding) |
| {{< prop "animated1pOnlyWeaponBinding" >}} | [Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding) |
| {{< prop "animated3pOnlyWeaponBinding" >}} | [Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding) |
| {{< prop "lockTimeMultiplier" >}} | float |
| {{< prop "grenadeIncrease" >}} | int |
| {{< prop "ammoClipIncreaseMultiplier" >}} | float |
| {{< prop "explosiveIncreaseMultiplier" >}} | float |
| {{< prop "underslungGrenadeIncrease" >}} | int |
| {{< prop "useExternalAimDir" >}} | bool |
| {{< prop "unlimitedAmmo" >}} | bool |
| {{< prop "unlimitedMags" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierWeaponsComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierWeaponsComponentData {#constructor-0}
> **SoldierWeaponsComponentData**()

Creates a new [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata) frostbite instance.

### SoldierWeaponsComponentData {#constructor-1}
> **SoldierWeaponsComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoldierWeaponsComponentData {#constructor-2}
> **SoldierWeaponsComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata). |

### SoldierWeaponsComponentData {#constructor-3}
> **SoldierWeaponsComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata). |

### SoldierWeaponsComponentData {#constructor-4}
> **SoldierWeaponsComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata). |

### SoldierWeaponsComponentData {#constructor-5}
> **SoldierWeaponsComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata). |

## Properties
### {{% prop-heading "aimDir" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "weaponSkeleton" %}}
> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** | **nil**

### {{% prop-heading "primaryWeaponId" %}}
> **int**

### {{% prop-heading "animatedWeaponBinding" %}}
> **[AnimatedWeaponBinding](/vext/ref/fb/animatedweaponbinding)**

### {{% prop-heading "animated1pOnlyWeaponBinding" %}}
> **[Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding)**

### {{% prop-heading "animated3pOnlyWeaponBinding" %}}
> **[Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding)**

### {{% prop-heading "lockTimeMultiplier" %}}
> **float**

### {{% prop-heading "grenadeIncrease" %}}
> **int**

### {{% prop-heading "ammoClipIncreaseMultiplier" %}}
> **float**

### {{% prop-heading "explosiveIncreaseMultiplier" %}}
> **float**

### {{% prop-heading "underslungGrenadeIncrease" %}}
> **int**

### {{% prop-heading "useExternalAimDir" %}}
> **bool**

### {{% prop-heading "unlimitedAmmo" %}}
> **bool**

### {{% prop-heading "unlimitedMags" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata) type.

