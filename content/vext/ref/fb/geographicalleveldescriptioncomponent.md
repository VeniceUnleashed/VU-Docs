---
title: GeographicalLevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                         | Description                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GeographicalLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                        |
| GeographicalLevelDescriptionComponent(GeographicalLevelDescriptionComponent other)                  | Create a reference copy of an instance of the same type.                                                                                                             |
| GeographicalLevelDescriptionComponent([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [GeographicalLevelDescriptionComponent](/vext/ref/fb/geographicalleveldescriptioncomponent/). |
| GeographicalLevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GeographicalLevelDescriptionComponent](/vext/ref/fb/geographicalleveldescriptioncomponent/).    |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| geographicalData | [GeographicalData](/vext/ref/fb/geographicaldata/) |             |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GeographicalLevelDescriptionComponent](/vext/ref/fb/geographicalleveldescriptioncomponent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GeographicalLevelDescriptionComponent](/vext/ref/fb/geographicalleveldescriptioncomponent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
