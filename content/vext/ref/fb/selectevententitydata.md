---
title: SelectEventEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SelectEventEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| SelectEventEntityData(SelectEventEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SelectEventEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SelectEventEntityData](/vext/ref/fb/selectevententitydata/).                            |
| SelectEventEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SelectEventEntityData](/vext/ref/fb/selectevententitydata/).                    |
| SelectEventEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SelectEventEntityData](/vext/ref/fb/selectevententitydata/).              |
| SelectEventEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SelectEventEntityData](/vext/ref/fb/selectevententitydata/). |

## Properties

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| realm  | [Realm](/vext/ref/fb/realm/) |             |
| events | string\[\]     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SelectEventEntityData](/vext/ref/fb/selectevententitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SelectEventEntityData](/vext/ref/fb/selectevententitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
