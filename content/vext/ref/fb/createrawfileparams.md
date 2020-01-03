---
title: CreateRawFileParams
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CreateRawFileParams()                                                          | Create a new instance of this container type.                                                                                 |
| CreateRawFileParams(CreateRawFileParams other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CreateRawFileParams([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CreateRawFileParams](/vext/ref/fb/createrawfileparams/). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| assetName      | string |             |
| sourceFile     | string |             |
| createResource | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CreateRawFileParams](/vext/ref/fb/createrawfileparams/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CreateRawFileParams](/vext/ref/fb/createrawfileparams/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
