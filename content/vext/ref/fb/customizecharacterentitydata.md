---
title: CustomizeCharacterEntityData
---
### Base Classes

[CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeCharacterEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| CustomizeCharacterEntityData(CustomizeCharacterEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CustomizeCharacterEntityData([CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/) other)  | Upcast an instance of type [CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/) to [CustomizeCharacterEntityData](/vext/ref/fb/customizecharacterentitydata/).  |
| CustomizeCharacterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CustomizeCharacterEntityData](/vext/ref/fb/customizecharacterentitydata/).                            |
| CustomizeCharacterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CustomizeCharacterEntityData](/vext/ref/fb/customizecharacterentitydata/).                    |
| CustomizeCharacterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CustomizeCharacterEntityData](/vext/ref/fb/customizecharacterentitydata/).              |
| CustomizeCharacterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizeCharacterEntityData](/vext/ref/fb/customizecharacterentitydata/). |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| customizeCharacterData | [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata/) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CustomizeCharacterEntityData](/vext/ref/fb/customizecharacterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomizeCharacterEntityData](/vext/ref/fb/customizecharacterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
