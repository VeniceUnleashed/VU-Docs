---
title: CreateDestructionVolumeParams
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CreateDestructionVolumeParams()                                                          | Create a new instance of this container type.                                                                                                     |
| CreateDestructionVolumeParams(CreateDestructionVolumeParams other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| CreateDestructionVolumeParams([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CreateDestructionVolumeParams](/vext/ref/fb/createdestructionvolumeparams/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| assetName | string |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CreateDestructionVolumeParams](/vext/ref/fb/createdestructionvolumeparams/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CreateDestructionVolumeParams](/vext/ref/fb/createdestructionvolumeparams/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
