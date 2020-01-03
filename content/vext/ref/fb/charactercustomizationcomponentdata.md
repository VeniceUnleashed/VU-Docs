---
title: CharacterCustomizationComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterCustomizationComponentData()                                                          | Create a new instance of this container type.                                                                                                                 |
| CharacterCustomizationComponentData(CharacterCustomizationComponentData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| CharacterCustomizationComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [CharacterCustomizationComponentData](/vext/ref/fb/charactercustomizationcomponentdata/).                      |
| CharacterCustomizationComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterCustomizationComponentData](/vext/ref/fb/charactercustomizationcomponentdata/).                    |
| CharacterCustomizationComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterCustomizationComponentData](/vext/ref/fb/charactercustomizationcomponentdata/).              |
| CharacterCustomizationComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterCustomizationComponentData](/vext/ref/fb/charactercustomizationcomponentdata/). |

## Properties

| Name           | Type                                                 | Description |
| -------------- | ---------------------------------------------------- | ----------- |
| socketList     | [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset/) |             |
| sharedLodGroup | [MeshLodGroup](/vext/ref/fb/meshlodgroup/)                         |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterCustomizationComponentData](/vext/ref/fb/charactercustomizationcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterCustomizationComponentData](/vext/ref/fb/charactercustomizationcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
