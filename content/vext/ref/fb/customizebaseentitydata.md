---
title: CustomizeBaseEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeBaseEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| CustomizeBaseEntityData(CustomizeBaseEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| CustomizeBaseEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/).                            |
| CustomizeBaseEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/).                    |
| CustomizeBaseEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/).              |
| CustomizeBaseEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](/vext/ref/fb/realm/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
