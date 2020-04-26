---
title: TrackPlayerEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[TrackPlayerEntityData](#constructor-0)**() |
| **[TrackPlayerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TrackPlayerEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[TrackPlayerEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[TrackPlayerEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TrackPlayerEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TrackPlayerEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TrackPlayerEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "snapHeightOffsetY" >}} | float |
| {{< prop "randomizeTracker" >}} | bool |
| {{< prop "snapHeightOnKilledDestroyed" >}} | bool |
| {{< prop "checkPlayerAlive" >}} | bool |
| {{< prop "enforceSharedCombatArea" >}} | bool |
| {{< prop "updateFlagComponent" >}} | bool |
| {{< prop "trackMultiplePlayers" >}} | bool |
| {{< prop "reseted" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TrackPlayerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TrackPlayerEntityData {#constructor-0}
> **TrackPlayerEntityData**()

Creates a new [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata) frostbite instance.

### TrackPlayerEntityData {#constructor-1}
> **TrackPlayerEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TrackPlayerEntityData {#constructor-2}
> **TrackPlayerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). |

### TrackPlayerEntityData {#constructor-3}
> **TrackPlayerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). |

### TrackPlayerEntityData {#constructor-4}
> **TrackPlayerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). |

### TrackPlayerEntityData {#constructor-5}
> **TrackPlayerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). |

### TrackPlayerEntityData {#constructor-6}
> **TrackPlayerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). |

### TrackPlayerEntityData {#constructor-7}
> **TrackPlayerEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata). |

## Properties
### {{% prop-heading "snapHeightOffsetY" %}}
> **float**

### {{% prop-heading "randomizeTracker" %}}
> **bool**

### {{% prop-heading "snapHeightOnKilledDestroyed" %}}
> **bool**

### {{% prop-heading "checkPlayerAlive" %}}
> **bool**

### {{% prop-heading "enforceSharedCombatArea" %}}
> **bool**

### {{% prop-heading "updateFlagComponent" %}}
> **bool**

### {{% prop-heading "trackMultiplePlayers" %}}
> **bool**

### {{% prop-heading "reseted" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata) type.

