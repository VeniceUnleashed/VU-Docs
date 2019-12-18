---
title: CharacterCustomizationComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterCustomizationComponentData()                                                          | Create a new instance of this container type.                                                                                                                 |
| CharacterCustomizationComponentData(CharacterCustomizationComponentData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| CharacterCustomizationComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [CharacterCustomizationComponentData](CharacterCustomizationComponentData).                      |
| CharacterCustomizationComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterCustomizationComponentData](CharacterCustomizationComponentData).                    |
| CharacterCustomizationComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterCustomizationComponentData](CharacterCustomizationComponentData).              |
| CharacterCustomizationComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterCustomizationComponentData](CharacterCustomizationComponentData). |

## Properties

| Name           | Type                                                 | Description |
| -------------- | ---------------------------------------------------- | ----------- |
| socketList     | [CharacterSocketListAsset](CharacterSocketListAsset) |             |
| sharedLodGroup | [MeshLodGroup](MeshLodGroup)                         |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterCustomizationComponentData](CharacterCustomizationComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterCustomizationComponentData](CharacterCustomizationComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
