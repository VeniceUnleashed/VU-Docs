---
title: StateEventGateEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| StateEventGateEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| StateEventGateEntityData(StateEventGateEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| StateEventGateEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [StateEventGateEntityData](/vext/ref/fb/stateeventgateentitydata/).                    |
| StateEventGateEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [StateEventGateEntityData](/vext/ref/fb/stateeventgateentitydata/).              |
| StateEventGateEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [StateEventGateEntityData](/vext/ref/fb/stateeventgateentitydata/).                            |
| StateEventGateEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StateEventGateEntityData](/vext/ref/fb/stateeventgateentitydata/).                    |
| StateEventGateEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StateEventGateEntityData](/vext/ref/fb/stateeventgateentitydata/).              |
| StateEventGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StateEventGateEntityData](/vext/ref/fb/stateeventgateentitydata/). |

## Properties

| Name         | Type                             | Description |
| ------------ | -------------------------------- | ----------- |
| checkedState | [EventGateState](/vext/ref/fb/eventgatestate/) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StateEventGateEntityData](/vext/ref/fb/stateeventgateentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StateEventGateEntityData](/vext/ref/fb/stateeventgateentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
