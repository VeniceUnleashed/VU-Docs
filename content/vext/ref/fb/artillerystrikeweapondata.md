---
title: ArtilleryStrikeWeaponData
---

Inherits from [WeaponData](/vext/ref/fb/weapondata)

## Summary

### Constructors

|  |
| --- |
| **[ArtilleryStrikeWeaponData](#constructor-0)**() |
| **[ArtilleryStrikeWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ArtilleryStrikeWeaponData](#constructor-2)**(other: [WeaponData](/vext/ref/fb/weapondata)) |
| **[ArtilleryStrikeWeaponData](#constructor-3)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[ArtilleryStrikeWeaponData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxStrikeDistance" >}} | float |
| {{< prop "strikeRadius" >}} | float |
| {{< prop "spawnHeight" >}} | float |
| {{< prop "maxRandomSpawnHeight" >}} | float |
| {{< prop "strikeCameraOffset" >}} | float |
| {{< prop "spawnHeightMultiplier" >}} | float |
| {{< prop "camera" >}} | [TargetCameraData](/vext/ref/fb/targetcameradata) \| nil |
| {{< prop "aimingCameraHeight" >}} | float |
| {{< prop "strikeCameraHeight" >}} | float |
| {{< prop "aimingCameraOffset" >}} | float |
| {{< prop "strikeCameraFov" >}} | float |
| {{< prop "aimingCameraFov" >}} | float |
| {{< prop "delayBeforeAimingCamera" >}} | float |
| {{< prop "validMinDistance" >}} | float |
| {{< prop "fireCameraTime" >}} | float |
| {{< prop "strikeCameraTime" >}} | float |
| {{< prop "validMaxDistance" >}} | float |
| {{< prop "validMaxAngle" >}} | float |
| {{< prop "increaseSpawnHeightWithDistance" >}} | bool |
| {{< prop "enableProjectileTrails" >}} | bool |
| {{< prop "enableCameraRotation" >}} | bool |
| {{< prop "fireProjectileFromWeapon" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ArtilleryStrikeWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ArtilleryStrikeWeaponData {#constructor-0}

> **ArtilleryStrikeWeaponData**()

Creates a new [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata) frostbite instance.

### ArtilleryStrikeWeaponData {#constructor-1}

> **ArtilleryStrikeWeaponData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ArtilleryStrikeWeaponData {#constructor-2}

> **ArtilleryStrikeWeaponData**(other: [WeaponData](/vext/ref/fb/weapondata))

Casts an instance of type [WeaponData](/vext/ref/fb/weapondata) to [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponData](/vext/ref/fb/weapondata) | The instance to cast to [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata). |

### ArtilleryStrikeWeaponData {#constructor-3}

> **ArtilleryStrikeWeaponData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata). |

### ArtilleryStrikeWeaponData {#constructor-4}

> **ArtilleryStrikeWeaponData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata). |

## Properties

### {{% prop-heading "maxStrikeDistance" %}}

> **float**

### {{% prop-heading "strikeRadius" %}}

> **float**

### {{% prop-heading "spawnHeight" %}}

> **float**

### {{% prop-heading "maxRandomSpawnHeight" %}}

> **float**

### {{% prop-heading "strikeCameraOffset" %}}

> **float**

### {{% prop-heading "spawnHeightMultiplier" %}}

> **float**

### {{% prop-heading "camera" %}}

> **[TargetCameraData](/vext/ref/fb/targetcameradata)** \| **nil**

### {{% prop-heading "aimingCameraHeight" %}}

> **float**

### {{% prop-heading "strikeCameraHeight" %}}

> **float**

### {{% prop-heading "aimingCameraOffset" %}}

> **float**

### {{% prop-heading "strikeCameraFov" %}}

> **float**

### {{% prop-heading "aimingCameraFov" %}}

> **float**

### {{% prop-heading "delayBeforeAimingCamera" %}}

> **float**

### {{% prop-heading "validMinDistance" %}}

> **float**

### {{% prop-heading "fireCameraTime" %}}

> **float**

### {{% prop-heading "strikeCameraTime" %}}

> **float**

### {{% prop-heading "validMaxDistance" %}}

> **float**

### {{% prop-heading "validMaxAngle" %}}

> **float**

### {{% prop-heading "increaseSpawnHeightWithDistance" %}}

> **bool**

### {{% prop-heading "enableProjectileTrails" %}}

> **bool**

### {{% prop-heading "enableCameraRotation" %}}

> **bool**

### {{% prop-heading "fireProjectileFromWeapon" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ArtilleryStrikeWeaponData](/vext/ref/fb/artillerystrikeweapondata) type.

