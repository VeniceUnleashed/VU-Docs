---
title: EnlightenBuildRadiosityParams
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenBuildRadiosityParams()                                                          | Create a new instance of this container type.                                                                                                     |
| EnlightenBuildRadiosityParams(EnlightenBuildRadiosityParams other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| EnlightenBuildRadiosityParams([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenBuildRadiosityParams](EnlightenBuildRadiosityParams). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenBuildRadiosityParams](EnlightenBuildRadiosityParams) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenBuildRadiosityParams](EnlightenBuildRadiosityParams) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
