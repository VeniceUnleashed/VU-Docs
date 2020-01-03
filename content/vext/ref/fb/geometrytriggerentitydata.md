---
title: GeometryTriggerEntityData
---
### Base Classes

[AreaTriggerEntityData](AreaTriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GeometryTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| GeometryTriggerEntityData(GeometryTriggerEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GeometryTriggerEntityData([AreaTriggerEntityData](AreaTriggerEntityData) other)      | Upcast an instance of type [AreaTriggerEntityData](AreaTriggerEntityData) to [GeometryTriggerEntityData](GeometryTriggerEntityData).      |
| GeometryTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [GeometryTriggerEntityData](GeometryTriggerEntityData).              |
| GeometryTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [GeometryTriggerEntityData](GeometryTriggerEntityData).                    |
| GeometryTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [GeometryTriggerEntityData](GeometryTriggerEntityData).              |
| GeometryTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [GeometryTriggerEntityData](GeometryTriggerEntityData).                            |
| GeometryTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GeometryTriggerEntityData](GeometryTriggerEntityData).                    |
| GeometryTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GeometryTriggerEntityData](GeometryTriggerEntityData).              |
| GeometryTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GeometryTriggerEntityData](GeometryTriggerEntityData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GeometryTriggerEntityData](GeometryTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GeometryTriggerEntityData](GeometryTriggerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
