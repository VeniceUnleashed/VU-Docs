---
title: UrgencyUserData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UrgencyUserData()                                                          | Create a new instance of this container type.                                                                         |
| UrgencyUserData(UrgencyUserData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UrgencyUserData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UrgencyUserData](/vext/ref/fb/urgencyuserdata/). |

## Properties

| Name             | Type                                           | Description |
| ---------------- | ---------------------------------------------- | ----------- |
| base             | [UrgencyUserData](/vext/ref/fb/urgencyuserdata/)             |             |
| urgencyModifiers | [UrgencyModifierData](/vext/ref/fb/urgencymodifierdata/)\[\] |             |
| modifierSets     | [UrgencySetData](/vext/ref/fb/urgencysetdata/)\[\]           |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UrgencyUserData](/vext/ref/fb/urgencyuserdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UrgencyUserData](/vext/ref/fb/urgencyuserdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
