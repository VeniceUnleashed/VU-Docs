---
title: UrgencySetData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UrgencySetData()                                                          | Create a new instance of this container type.                                                                       |
| UrgencySetData(UrgencySetData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UrgencySetData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UrgencySetData](UrgencySetData). |

## Properties

| Name             | Type                                           | Description |
| ---------------- | ---------------------------------------------- | ----------- |
| name             | string                                         |             |
| urgencyModifiers | [UrgencyModifierData](UrgencyModifierData)\[\] |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UrgencySetData](UrgencySetData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UrgencySetData](UrgencySetData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
