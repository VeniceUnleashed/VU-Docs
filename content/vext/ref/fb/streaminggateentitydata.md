---
title: StreamingGateEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| StreamingGateEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| StreamingGateEntityData(StreamingGateEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| StreamingGateEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [StreamingGateEntityData](/vext/ref/fb/streaminggateentitydata/).                            |
| StreamingGateEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StreamingGateEntityData](/vext/ref/fb/streaminggateentitydata/).                    |
| StreamingGateEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StreamingGateEntityData](/vext/ref/fb/streaminggateentitydata/).              |
| StreamingGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StreamingGateEntityData](/vext/ref/fb/streaminggateentitydata/). |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| timeout | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StreamingGateEntityData](/vext/ref/fb/streaminggateentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StreamingGateEntityData](/vext/ref/fb/streaminggateentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
