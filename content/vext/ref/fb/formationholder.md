---
title: FormationHolder
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| FormationHolder()                                                          | Create a new instance of this container type.                                                                         |
| FormationHolder(FormationHolder other)                                     | Create a reference copy of an instance of the same type.                                                              |
| FormationHolder([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [FormationHolder](FormationHolder).                                      |
| FormationHolder([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FormationHolder](FormationHolder). |

## Properties

| Name       | Type                               | Description |
| ---------- | ---------------------------------- | ----------- |
| formations | [FormationData](FormationData)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [FormationHolder](FormationHolder) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FormationHolder](FormationHolder) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
