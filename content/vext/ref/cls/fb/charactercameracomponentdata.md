---
title: CharacterCameraComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterCameraComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| CharacterCameraComponentData(CharacterCameraComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CharacterCameraComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [CharacterCameraComponentData](CharacterCameraComponentData).                      |
| CharacterCameraComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterCameraComponentData](CharacterCameraComponentData).                    |
| CharacterCameraComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterCameraComponentData](CharacterCameraComponentData).              |
| CharacterCameraComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterCameraComponentData](CharacterCameraComponentData). |

## Properties

| Name           | Type                                     | Description |
| -------------- | ---------------------------------------- | ----------- |
| cameras        | [TargetCameraData](TargetCameraData)\[\] |             |
| cameraBoneName | string                                   |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterCameraComponentData](CharacterCameraComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterCameraComponentData](CharacterCameraComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
