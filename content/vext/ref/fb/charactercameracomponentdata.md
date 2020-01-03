---
title: CharacterCameraComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterCameraComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| CharacterCameraComponentData(CharacterCameraComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CharacterCameraComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata/).                      |
| CharacterCameraComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata/).                    |
| CharacterCameraComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata/).              |
| CharacterCameraComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata/). |

## Properties

| Name           | Type                                     | Description |
| -------------- | ---------------------------------------- | ----------- |
| cameras        | [TargetCameraData](/vext/ref/fb/targetcameradata/)\[\] |             |
| cameraBoneName | string                                   |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
