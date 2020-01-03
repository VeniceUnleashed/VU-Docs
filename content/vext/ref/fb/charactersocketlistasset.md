---
title: CharacterSocketListAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterSocketListAsset()                                                          | Create a new instance of this container type.                                                                                           |
| CharacterSocketListAsset(CharacterSocketListAsset other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CharacterSocketListAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CharacterSocketListAsset](CharacterSocketListAsset).                                      |
| CharacterSocketListAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterSocketListAsset](CharacterSocketListAsset). |

## Properties

| Name                 | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| gameplaySockets      | [SocketData](SocketData)\[\] |             |
| rigidVisualSockets   | [SocketData](SocketData)\[\] |             |
| skinnedVisualSockets | [SocketData](SocketData)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterSocketListAsset](CharacterSocketListAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterSocketListAsset](CharacterSocketListAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
