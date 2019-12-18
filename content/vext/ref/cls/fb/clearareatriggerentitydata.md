---
title: ClearAreaTriggerEntityData (Frostbite Container)
---
### Base Classes

[TriggerEntityData](TriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ClearAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| ClearAreaTriggerEntityData(ClearAreaTriggerEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| ClearAreaTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData).              |
| ClearAreaTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData).                    |
| ClearAreaTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData).              |
| ClearAreaTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData).                            |
| ClearAreaTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData).                    |
| ClearAreaTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData).              |
| ClearAreaTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData). |

## Properties

| Name                          | Type             | Description |
| ----------------------------- | ---------------- | ----------- |
| teamOfImmortalSoldiers        | [TeamId](TeamId) |             |
| removeBangers                 | bool             |             |
| removeVehicles                | bool             |             |
| removeEffects                 | bool             |             |
| removeStaticModels            | bool             |             |
| removeDebrisClusters          | bool             |             |
| excludeImmortalSoldiersInTeam | bool             |             |
| removeMeshProxies             | bool             |             |
| removeSoldiers                | bool             |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ClearAreaTriggerEntityData](ClearAreaTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
