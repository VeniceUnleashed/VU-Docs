---
title: ObjectVariation (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ObjectVariation()                                                          | Create a new instance of this container type.                                                                         |
| ObjectVariation(ObjectVariation other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ObjectVariation([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ObjectVariation](ObjectVariation).                                      |
| ObjectVariation([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ObjectVariation](ObjectVariation). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| nameHash | number |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ObjectVariation](ObjectVariation) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ObjectVariation](ObjectVariation) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
