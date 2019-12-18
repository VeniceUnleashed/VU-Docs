---
title: UrgencyUserData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UrgencyUserData()                                                          | Create a new instance of this container type.                                                                         |
| UrgencyUserData(UrgencyUserData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UrgencyUserData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UrgencyUserData](UrgencyUserData). |

## Properties

| Name             | Type                                           | Description |
| ---------------- | ---------------------------------------------- | ----------- |
| base             | [UrgencyUserData](UrgencyUserData)             |             |
| urgencyModifiers | [UrgencyModifierData](UrgencyModifierData)\[\] |             |
| modifierSets     | [UrgencySetData](UrgencySetData)\[\]           |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UrgencyUserData](UrgencyUserData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UrgencyUserData](UrgencyUserData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
