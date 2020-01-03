---
title: AreaTriggerEntityData
---
### Base Classes

[TriggerEntityData](TriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| AreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| AreaTriggerEntityData(AreaTriggerEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| AreaTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [AreaTriggerEntityData](AreaTriggerEntityData).              |
| AreaTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [AreaTriggerEntityData](AreaTriggerEntityData).                    |
| AreaTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [AreaTriggerEntityData](AreaTriggerEntityData).              |
| AreaTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AreaTriggerEntityData](AreaTriggerEntityData).                            |
| AreaTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AreaTriggerEntityData](AreaTriggerEntityData).                    |
| AreaTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AreaTriggerEntityData](AreaTriggerEntityData).              |
| AreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AreaTriggerEntityData](AreaTriggerEntityData). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| geometryTransform            | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| include                      | [AreaTriggerInclude](AreaTriggerInclude)                |             |
| insideAreaEventRepeatTime    | number                                                  |             |
| radius                       | number                                                  |             |
| useCharacterEntity           | bool                                                    |             |
| oneInsideAreaEventPerSoldier | bool                                                    |             |
| triggerOnlyOnLeave           | bool                                                    |             |
| resetOnEnable                | bool                                                    |             |
| triggerOnLeaveOnDeath        | bool                                                    |             |
| triggerOnLeaveOnDisable      | bool                                                    |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [AreaTriggerEntityData](AreaTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AreaTriggerEntityData](AreaTriggerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
