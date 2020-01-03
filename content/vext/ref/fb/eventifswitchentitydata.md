---
title: EventIfSwitchEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EventIfSwitchEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| EventIfSwitchEntityData(EventIfSwitchEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EventIfSwitchEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [EventIfSwitchEntityData](/vext/ref/fb/eventifswitchentitydata/).                    |
| EventIfSwitchEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [EventIfSwitchEntityData](/vext/ref/fb/eventifswitchentitydata/).              |
| EventIfSwitchEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [EventIfSwitchEntityData](/vext/ref/fb/eventifswitchentitydata/).                            |
| EventIfSwitchEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EventIfSwitchEntityData](/vext/ref/fb/eventifswitchentitydata/).                    |
| EventIfSwitchEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EventIfSwitchEntityData](/vext/ref/fb/eventifswitchentitydata/).              |
| EventIfSwitchEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventIfSwitchEntityData](/vext/ref/fb/eventifswitchentitydata/). |

## Properties

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| runOnce    | bool |             |
| startState | bool |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventIfSwitchEntityData](/vext/ref/fb/eventifswitchentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventIfSwitchEntityData](/vext/ref/fb/eventifswitchentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
