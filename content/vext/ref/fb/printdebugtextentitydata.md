---
title: PrintDebugTextEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PrintDebugTextEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| PrintDebugTextEntityData(PrintDebugTextEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PrintDebugTextEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PrintDebugTextEntityData](/vext/ref/fb/printdebugtextentitydata/).                            |
| PrintDebugTextEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PrintDebugTextEntityData](/vext/ref/fb/printdebugtextentitydata/).                    |
| PrintDebugTextEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PrintDebugTextEntityData](/vext/ref/fb/printdebugtextentitydata/).              |
| PrintDebugTextEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PrintDebugTextEntityData](/vext/ref/fb/printdebugtextentitydata/). |

## Properties

| Name      | Type                              | Description |
| --------- | --------------------------------- | ----------- |
| textColor | [Vec3](/vext/ref/shared/class/vec3) |             |
| realm     | [Realm](/vext/ref/fb/realm/)                    |             |
| text      | string                            |             |
| enabled   | bool                              |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PrintDebugTextEntityData](/vext/ref/fb/printdebugtextentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PrintDebugTextEntityData](/vext/ref/fb/printdebugtextentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
