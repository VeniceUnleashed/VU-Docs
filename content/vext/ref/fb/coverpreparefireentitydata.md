---
title: CoverPrepareFireEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| CoverPrepareFireEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| CoverPrepareFireEntityData(CoverPrepareFireEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| CoverPrepareFireEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CoverPrepareFireEntityData](/vext/ref/fb/coverpreparefireentitydata/).                            |
| CoverPrepareFireEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CoverPrepareFireEntityData](/vext/ref/fb/coverpreparefireentitydata/).                    |
| CoverPrepareFireEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CoverPrepareFireEntityData](/vext/ref/fb/coverpreparefireentitydata/).              |
| CoverPrepareFireEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CoverPrepareFireEntityData](/vext/ref/fb/coverpreparefireentitydata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CoverPrepareFireEntityData](/vext/ref/fb/coverpreparefireentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CoverPrepareFireEntityData](/vext/ref/fb/coverpreparefireentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
