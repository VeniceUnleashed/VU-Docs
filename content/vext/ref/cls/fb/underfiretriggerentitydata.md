---
title: UnderFireTriggerEntityData (Frostbite Container)
---
### Base Classes

[TriggerEntityData](TriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UnderFireTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| UnderFireTriggerEntityData(UnderFireTriggerEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UnderFireTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [UnderFireTriggerEntityData](UnderFireTriggerEntityData).              |
| UnderFireTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [UnderFireTriggerEntityData](UnderFireTriggerEntityData).                    |
| UnderFireTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [UnderFireTriggerEntityData](UnderFireTriggerEntityData).              |
| UnderFireTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [UnderFireTriggerEntityData](UnderFireTriggerEntityData).                            |
| UnderFireTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [UnderFireTriggerEntityData](UnderFireTriggerEntityData).                    |
| UnderFireTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [UnderFireTriggerEntityData](UnderFireTriggerEntityData).              |
| UnderFireTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UnderFireTriggerEntityData](UnderFireTriggerEntityData). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| radius                     | number                                         |             |
| coolDownTime               | number                                         |             |
| triggerOnMaterialOnly      | [MaterialContainerPair](MaterialContainerPair) |             |
| triggeredBy                | [AreaTriggerInclude](AreaTriggerInclude)       |             |
| disableIfTrackEntityIsLost | bool                                           |             |
| randomYaw                  | bool                                           |             |
| indicateHit                | bool                                           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UnderFireTriggerEntityData](UnderFireTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UnderFireTriggerEntityData](UnderFireTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
