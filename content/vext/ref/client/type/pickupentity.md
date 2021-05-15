---
title: PickupEntity
---

Inherits from [GameEntity](/vext/ref/client/type/gameentity)

## Summary

### Constructors

|  |
| --- |
| **[PickupEntity](#constructor-0)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[PickupEntity](#constructor-1)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[PickupEntity](#constructor-2)**(other: [GameEntity](/vext/ref/client/type/gameentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weapons" true >}} | [WeaponInfo](/vext/ref/client/type/weaponInfo)[] |
| {{< prop "droppedByTeam" true >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "droppedByCharacterCustomizationAsset" true >}} | [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PickupEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PickupEntity {#constructor-0}

> **PickupEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### PickupEntity {#constructor-1}

> **PickupEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### PickupEntity {#constructor-2}

> **PickupEntity**(other: [GameEntity](/vext/ref/client/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/client/type/gameentity) |  |

## Properties

### {{% prop-heading "weapons" true %}}

> **[WeaponInfo](/vext/ref/client/type/weaponInfo)**[]

### {{% prop-heading "droppedByTeam" true %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "droppedByCharacterCustomizationAsset" true %}}

> **[CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

