---
title: LookAtEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| LookAtEntityData()                                                          | Create a new instance of this container type.                                                                           |
| LookAtEntityData(LookAtEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| LookAtEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LookAtEntityData](/vext/ref/fb/lookatentitydata/).              |
| LookAtEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LookAtEntityData](/vext/ref/fb/lookatentitydata/).                            |
| LookAtEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LookAtEntityData](/vext/ref/fb/lookatentitydata/).                    |
| LookAtEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LookAtEntityData](/vext/ref/fb/lookatentitydata/).              |
| LookAtEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LookAtEntityData](/vext/ref/fb/lookatentitydata/). |

## Properties

| Name               | Type | Description |
| ------------------ | ---- | ----------- |
| runOnce            | bool |             |
| useStaticDirection | bool |             |
| enabled            | bool |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [LookAtEntityData](/vext/ref/fb/lookatentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LookAtEntityData](/vext/ref/fb/lookatentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
