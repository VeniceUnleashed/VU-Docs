---
title: CharacterEntityData
---

Inherits from 
[ControllableEntityData](/vext/ref/fb/controllableentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[CharacterEntityData](#constructor-0)**() |
| **[CharacterEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CharacterEntityData](#constructor-2)**(other: [ControllableEntityData](/vext/ref/fb/controllableentitydata)) |
| **[CharacterEntityData](#constructor-3)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[CharacterEntityData](#constructor-4)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[CharacterEntityData](#constructor-5)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[CharacterEntityData](#constructor-6)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CharacterEntityData](#constructor-7)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterEntityData](#constructor-8)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterEntityData](#constructor-9)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "defaultViewMode" >}} | [PersonViewMode](/vext/ref/fb/personviewmode) |
| {{< prop "playerSpawnType" >}} | [PlayerSpawnType](/vext/ref/fb/playerspawntype) |
| {{< prop "characterLightingEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterEntityData {#constructor-0}
> **CharacterEntityData**()

Creates a new [CharacterEntityData](/vext/ref/fb/characterentitydata) frostbite instance.

### CharacterEntityData {#constructor-1}
> **CharacterEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CharacterEntityData](/vext/ref/fb/characterentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CharacterEntityData {#constructor-2}
> **CharacterEntityData**(other: [ControllableEntityData](/vext/ref/fb/controllableentitydata))

Casts an instance of type [ControllableEntityData](/vext/ref/fb/controllableentitydata) to [CharacterEntityData](/vext/ref/fb/characterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ControllableEntityData](/vext/ref/fb/controllableentitydata) | The instance to cast to [CharacterEntityData](/vext/ref/fb/characterentitydata). |

### CharacterEntityData {#constructor-3}
> **CharacterEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [CharacterEntityData](/vext/ref/fb/characterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [CharacterEntityData](/vext/ref/fb/characterentitydata). |

### CharacterEntityData {#constructor-4}
> **CharacterEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [CharacterEntityData](/vext/ref/fb/characterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [CharacterEntityData](/vext/ref/fb/characterentitydata). |

### CharacterEntityData {#constructor-5}
> **CharacterEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [CharacterEntityData](/vext/ref/fb/characterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [CharacterEntityData](/vext/ref/fb/characterentitydata). |

### CharacterEntityData {#constructor-6}
> **CharacterEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CharacterEntityData](/vext/ref/fb/characterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CharacterEntityData](/vext/ref/fb/characterentitydata). |

### CharacterEntityData {#constructor-7}
> **CharacterEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterEntityData](/vext/ref/fb/characterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterEntityData](/vext/ref/fb/characterentitydata). |

### CharacterEntityData {#constructor-8}
> **CharacterEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterEntityData](/vext/ref/fb/characterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterEntityData](/vext/ref/fb/characterentitydata). |

### CharacterEntityData {#constructor-9}
> **CharacterEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterEntityData](/vext/ref/fb/characterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CharacterEntityData](/vext/ref/fb/characterentitydata). |

## Properties
### {{% prop-heading "defaultViewMode" %}}
> **[PersonViewMode](/vext/ref/fb/personviewmode)**

### {{% prop-heading "playerSpawnType" %}}
> **[PlayerSpawnType](/vext/ref/fb/playerspawntype)**

### {{% prop-heading "characterLightingEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterEntityData](/vext/ref/fb/characterentitydata) type.

