---
title: SpeedEventGateEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SpeedEventGateEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| SpeedEventGateEntityData(SpeedEventGateEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SpeedEventGateEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [SpeedEventGateEntityData](/vext/ref/fb/speedeventgateentitydata/).                    |
| SpeedEventGateEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [SpeedEventGateEntityData](/vext/ref/fb/speedeventgateentitydata/).              |
| SpeedEventGateEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SpeedEventGateEntityData](/vext/ref/fb/speedeventgateentitydata/).                            |
| SpeedEventGateEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpeedEventGateEntityData](/vext/ref/fb/speedeventgateentitydata/).                    |
| SpeedEventGateEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpeedEventGateEntityData](/vext/ref/fb/speedeventgateentitydata/).              |
| SpeedEventGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpeedEventGateEntityData](/vext/ref/fb/speedeventgateentitydata/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| minSpeed | number |             |
| maxSpeed | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpeedEventGateEntityData](/vext/ref/fb/speedeventgateentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpeedEventGateEntityData](/vext/ref/fb/speedeventgateentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
