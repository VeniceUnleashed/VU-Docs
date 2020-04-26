---
title: FiringFunctionData
---

Inherits from 
[GameDataContainer](/vext/ref/fb/gamedatacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[FiringFunctionData](#constructor-0)**() |
| **[FiringFunctionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FiringFunctionData](#constructor-2)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FiringFunctionData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dispersion" >}} | [FiringDispersionData](/vext/ref/fb/firingdispersiondata)[] |
| {{< prop "weaponDispersion" >}} | [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion) |
| {{< prop "fireEffects1p" >}} | [FireEffectData](/vext/ref/fb/fireeffectdata)[] |
| {{< prop "fireEffects3p" >}} | [FireEffectData](/vext/ref/fb/fireeffectdata)[] |
| {{< prop "sound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "shot" >}} | [ShotConfigData](/vext/ref/fb/shotconfigdata) |
| {{< prop "fireLogic" >}} | [FireLogicData](/vext/ref/fb/firelogicdata) |
| {{< prop "ammo" >}} | [AmmoConfigData](/vext/ref/fb/ammoconfigdata) |
| {{< prop "overHeat" >}} | [OverHeatData](/vext/ref/fb/overheatdata) |
| {{< prop "selfHealTimeWhenDeployed" >}} | float |
| {{< prop "ammoCrateReloadDelay" >}} | float |
| {{< prop "unlimitedAmmoForAI" >}} | bool |
| {{< prop "usePrimaryAmmo" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FiringFunctionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FiringFunctionData {#constructor-0}
> **FiringFunctionData**()

Creates a new [FiringFunctionData](/vext/ref/fb/firingfunctiondata) frostbite instance.

### FiringFunctionData {#constructor-1}
> **FiringFunctionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FiringFunctionData](/vext/ref/fb/firingfunctiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FiringFunctionData {#constructor-2}
> **FiringFunctionData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FiringFunctionData](/vext/ref/fb/firingfunctiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FiringFunctionData](/vext/ref/fb/firingfunctiondata). |

### FiringFunctionData {#constructor-3}
> **FiringFunctionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FiringFunctionData](/vext/ref/fb/firingfunctiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FiringFunctionData](/vext/ref/fb/firingfunctiondata). |

## Properties
### {{% prop-heading "dispersion" %}}
> **[FiringDispersionData](/vext/ref/fb/firingdispersiondata)**[]

### {{% prop-heading "weaponDispersion" %}}
> **[SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion)**

### {{% prop-heading "fireEffects1p" %}}
> **[FireEffectData](/vext/ref/fb/fireeffectdata)**[]

### {{% prop-heading "fireEffects3p" %}}
> **[FireEffectData](/vext/ref/fb/fireeffectdata)**[]

### {{% prop-heading "sound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "shot" %}}
> **[ShotConfigData](/vext/ref/fb/shotconfigdata)**

### {{% prop-heading "fireLogic" %}}
> **[FireLogicData](/vext/ref/fb/firelogicdata)**

### {{% prop-heading "ammo" %}}
> **[AmmoConfigData](/vext/ref/fb/ammoconfigdata)**

### {{% prop-heading "overHeat" %}}
> **[OverHeatData](/vext/ref/fb/overheatdata)**

### {{% prop-heading "selfHealTimeWhenDeployed" %}}
> **float**

### {{% prop-heading "ammoCrateReloadDelay" %}}
> **float**

### {{% prop-heading "unlimitedAmmoForAI" %}}
> **bool**

### {{% prop-heading "usePrimaryAmmo" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FiringFunctionData](/vext/ref/fb/firingfunctiondata) type.

