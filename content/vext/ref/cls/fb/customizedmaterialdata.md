---
title: CustomizedMaterialData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CustomizedMaterialData()                                                          | Create a new instance of this container type.                                                                                       |
| CustomizedMaterialData(CustomizedMaterialData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CustomizedMaterialData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CustomizedMaterialData](CustomizedMaterialData). |

## Properties

| Name                   | Type                                                                     | Description |
| ---------------------- | ------------------------------------------------------------------------ | ----------- |
| materialNames          | string\[\]                                                               |             |
| colorParameters        | [UnlockableColorCollection](UnlockableColorCollection)\[\]               |             |
| textureParameters      | [UnlockableTextureCollection](UnlockableTextureCollection)\[\]           |             |
| textureSliceParameters | [UnlockableTextureSliceCollection](UnlockableTextureSliceCollection)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CustomizedMaterialData](CustomizedMaterialData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CustomizedMaterialData](CustomizedMaterialData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
