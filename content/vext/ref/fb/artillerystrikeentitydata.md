---
title: ArtilleryStrikeEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[ArtilleryStrikeEntityData](#constructor-0)**() |
| **[ArtilleryStrikeEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ArtilleryStrikeEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[ArtilleryStrikeEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[ArtilleryStrikeEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ArtilleryStrikeEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ArtilleryStrikeEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ArtilleryStrikeEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "missileData" >}} | [MissileEntityData](/vext/ref/fb/missileentitydata) \| nil |
| {{< prop "missileSpawnRadius" >}} | float |
| {{< prop "durationOfArtilleryStrike" >}} | float |
| {{< prop "maxDelayBetweenProjectiles" >}} | float |
| {{< prop "minDelayBetweenProjectiles" >}} | float |
| {{< prop "maxDelayBetweenStrikes" >}} | float |
| {{< prop "minDelayBetweenStrikes" >}} | float |
| {{< prop "minRadiusToSoldier" >}} | float |
| {{< prop "radiusWhenFollowingSoldier" >}} | float |
| {{< prop "heightOffsetWhenFollowingSoldier" >}} | float |
| {{< prop "numberOfStrikes" >}} | int |
| {{< prop "maxProjectilesPerStrike" >}} | int |
| {{< prop "minProjectilesPerStrike" >}} | int |
| {{< prop "followSoldier" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ArtilleryStrikeEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ArtilleryStrikeEntityData {#constructor-0}
> **ArtilleryStrikeEntityData**()

Creates a new [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata) frostbite instance.

### ArtilleryStrikeEntityData {#constructor-1}
> **ArtilleryStrikeEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ArtilleryStrikeEntityData {#constructor-2}
> **ArtilleryStrikeEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). |

### ArtilleryStrikeEntityData {#constructor-3}
> **ArtilleryStrikeEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). |

### ArtilleryStrikeEntityData {#constructor-4}
> **ArtilleryStrikeEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). |

### ArtilleryStrikeEntityData {#constructor-5}
> **ArtilleryStrikeEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). |

### ArtilleryStrikeEntityData {#constructor-6}
> **ArtilleryStrikeEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). |

### ArtilleryStrikeEntityData {#constructor-7}
> **ArtilleryStrikeEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata). |

## Properties
### {{% prop-heading "missileData" %}}
> **[MissileEntityData](/vext/ref/fb/missileentitydata)** | **nil**

### {{% prop-heading "missileSpawnRadius" %}}
> **float**

### {{% prop-heading "durationOfArtilleryStrike" %}}
> **float**

### {{% prop-heading "maxDelayBetweenProjectiles" %}}
> **float**

### {{% prop-heading "minDelayBetweenProjectiles" %}}
> **float**

### {{% prop-heading "maxDelayBetweenStrikes" %}}
> **float**

### {{% prop-heading "minDelayBetweenStrikes" %}}
> **float**

### {{% prop-heading "minRadiusToSoldier" %}}
> **float**

### {{% prop-heading "radiusWhenFollowingSoldier" %}}
> **float**

### {{% prop-heading "heightOffsetWhenFollowingSoldier" %}}
> **float**

### {{% prop-heading "numberOfStrikes" %}}
> **int**

### {{% prop-heading "maxProjectilesPerStrike" %}}
> **int**

### {{% prop-heading "minProjectilesPerStrike" %}}
> **int**

### {{% prop-heading "followSoldier" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata) type.

