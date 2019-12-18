---
title: CreateRawFileParams (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CreateRawFileParams()                                                          | Create a new instance of this container type.                                                                                 |
| CreateRawFileParams(CreateRawFileParams other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CreateRawFileParams([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CreateRawFileParams](CreateRawFileParams). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| assetName      | string |             |
| sourceFile     | string |             |
| createResource | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CreateRawFileParams](CreateRawFileParams) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CreateRawFileParams](CreateRawFileParams) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
