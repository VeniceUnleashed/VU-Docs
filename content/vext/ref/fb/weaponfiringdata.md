---
title: WeaponFiringData
---

Inherits from [GameDataContainer](/vext/ref/fb/gamedatacontainer)

## Summary

### Constructors

|  |
| --- |
| **[WeaponFiringData](#constructor-0)**() |
| **[WeaponFiringData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponFiringData](#constructor-2)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[WeaponFiringData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "primaryFire" >}} | [FiringFunctionData](/vext/ref/fb/firingfunctiondata) \| nil |
| {{< prop "deployTime" >}} | float |
| {{< prop "reactivateCooldownTime" >}} | float |
| {{< prop "disableZoomOnDeployTime" >}} | float |
| {{< prop "altDeployTime" >}} | float |
| {{< prop "altDeployId" >}} | int |
| {{< prop "weaponSway" >}} | [WeaponSwayData](/vext/ref/fb/weaponswaydata) \| nil |
| {{< prop "supportDelayProne" >}} | float |
| {{< prop "supportDelayStand" >}} | float |
| {{< prop "rumble" >}} | [RumbleFiringData](/vext/ref/fb/rumblefiringdata) |
| {{< prop "inflictSelfDamage" >}} | bool |
| {{< prop "useAutoAiming" >}} | bool |
| {{< prop "showEnemyNametagOnAim" >}} | bool |
| {{< prop "reloadWholeMags" >}} | bool |
| {{< prop "disableReloadWhileSprinting" >}} | bool |
| {{< prop "abortReloadOnSprint" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponFiringData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponFiringData {#constructor-0}

> **WeaponFiringData**()

Creates a new [WeaponFiringData](/vext/ref/fb/weaponfiringdata) frostbite instance.

### WeaponFiringData {#constructor-1}

> **WeaponFiringData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponFiringData](/vext/ref/fb/weaponfiringdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponFiringData {#constructor-2}

> **WeaponFiringData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [WeaponFiringData](/vext/ref/fb/weaponfiringdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [WeaponFiringData](/vext/ref/fb/weaponfiringdata). |

### WeaponFiringData {#constructor-3}

> **WeaponFiringData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponFiringData](/vext/ref/fb/weaponfiringdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponFiringData](/vext/ref/fb/weaponfiringdata). |

## Properties

### {{% prop-heading "primaryFire" %}}

> **[FiringFunctionData](/vext/ref/fb/firingfunctiondata)** \| **nil**

### {{% prop-heading "deployTime" %}}

> **float**

### {{% prop-heading "reactivateCooldownTime" %}}

> **float**

### {{% prop-heading "disableZoomOnDeployTime" %}}

> **float**

### {{% prop-heading "altDeployTime" %}}

> **float**

### {{% prop-heading "altDeployId" %}}

> **int**

### {{% prop-heading "weaponSway" %}}

> **[WeaponSwayData](/vext/ref/fb/weaponswaydata)** \| **nil**

### {{% prop-heading "supportDelayProne" %}}

> **float**

### {{% prop-heading "supportDelayStand" %}}

> **float**

### {{% prop-heading "rumble" %}}

> **[RumbleFiringData](/vext/ref/fb/rumblefiringdata)**

### {{% prop-heading "inflictSelfDamage" %}}

> **bool**

### {{% prop-heading "useAutoAiming" %}}

> **bool**

### {{% prop-heading "showEnemyNametagOnAim" %}}

> **bool**

### {{% prop-heading "reloadWholeMags" %}}

> **bool**

### {{% prop-heading "disableReloadWhileSprinting" %}}

> **bool**

### {{% prop-heading "abortReloadOnSprint" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponFiringData](/vext/ref/fb/weaponfiringdata) type.

