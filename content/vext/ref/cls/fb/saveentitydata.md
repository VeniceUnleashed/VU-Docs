---
title: SaveEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SaveEntityData()                                                          | Create a new instance of this container type.                                                                       |
| SaveEntityData(SaveEntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SaveEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SaveEntityData](SaveEntityData).                            |
| SaveEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SaveEntityData](SaveEntityData).                    |
| SaveEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SaveEntityData](SaveEntityData).              |
| SaveEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SaveEntityData](SaveEntityData). |

## Properties

| Name                | Type                         | Description |
| ------------------- | ---------------------------- | ----------- |
| saveScreenTexture   | [TextureAsset](TextureAsset) |             |
| levelName           | string                       |             |
| saveFileName        | string                       |             |
| saveNameSID         | string                       |             |
| checkForHumanPlayer | bool                         |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SaveEntityData](SaveEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SaveEntityData](SaveEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
