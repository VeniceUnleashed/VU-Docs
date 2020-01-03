---
title: CharacterSocketListAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterSocketListAsset()                                                          | Create a new instance of this container type.                                                                                           |
| CharacterSocketListAsset(CharacterSocketListAsset other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CharacterSocketListAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset/).                                      |
| CharacterSocketListAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset/). |

## Properties

| Name                 | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| gameplaySockets      | [SocketData](/vext/ref/fb/socketdata/)\[\] |             |
| rigidVisualSockets   | [SocketData](/vext/ref/fb/socketdata/)\[\] |             |
| skinnedVisualSockets | [SocketData](/vext/ref/fb/socketdata/)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
