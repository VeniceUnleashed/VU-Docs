---
title: CameraModeAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| CameraModeAsset()                                                          | Create a new instance of this container type.                                                                         |
| CameraModeAsset(CameraModeAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| CameraModeAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CameraModeAsset](CameraModeAsset).                                      |
| CameraModeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraModeAsset](CameraModeAsset). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [CameraModeAsset](CameraModeAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraModeAsset](CameraModeAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
