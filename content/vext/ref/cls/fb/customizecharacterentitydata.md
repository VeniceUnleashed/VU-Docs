---
title: CustomizeCharacterEntityData (Frostbite Container)
---
### Base Classes

[CustomizeBaseEntityData](CustomizeBaseEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeCharacterEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| CustomizeCharacterEntityData(CustomizeCharacterEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CustomizeCharacterEntityData([CustomizeBaseEntityData](CustomizeBaseEntityData) other)  | Upcast an instance of type [CustomizeBaseEntityData](CustomizeBaseEntityData) to [CustomizeCharacterEntityData](CustomizeCharacterEntityData).  |
| CustomizeCharacterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CustomizeCharacterEntityData](CustomizeCharacterEntityData).                            |
| CustomizeCharacterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CustomizeCharacterEntityData](CustomizeCharacterEntityData).                    |
| CustomizeCharacterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CustomizeCharacterEntityData](CustomizeCharacterEntityData).              |
| CustomizeCharacterEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CustomizeCharacterEntityData](CustomizeCharacterEntityData). |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| customizeCharacterData | [CustomizeCharacterData](CustomizeCharacterData) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CustomizeCharacterEntityData](CustomizeCharacterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CustomizeCharacterEntityData](CustomizeCharacterEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
