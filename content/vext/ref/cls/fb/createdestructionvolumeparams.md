---
title: CreateDestructionVolumeParams (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CreateDestructionVolumeParams()                                                          | Create a new instance of this container type.                                                                                                     |
| CreateDestructionVolumeParams(CreateDestructionVolumeParams other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| CreateDestructionVolumeParams([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CreateDestructionVolumeParams](CreateDestructionVolumeParams). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| assetName | string |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CreateDestructionVolumeParams](CreateDestructionVolumeParams) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CreateDestructionVolumeParams](CreateDestructionVolumeParams) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
